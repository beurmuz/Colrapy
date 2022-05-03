"""
hyeonseo
* 사진 엣지 찾기 예시(사용자가 만드는 템플릿)
* python, openCV 사용
* 추가할것: 데이터베이스 연동 이미지 불러오기
* 문제: 사진마다 적절한 임계값 다름 -> 여러 사진 시도해보고 가장 적절한 값으로 조정 필요
"""

import cv2, sys
from matplotlib import pyplot as plt
import numpy as np

image = cv2.imread('img_data/cosmetic.jpg')                              # 원본 이미지 읽어오기
image_gray = cv2.imread('img_data/cosmetic.jpg', cv2.IMREAD_GRAYSCALE)   # 흑백 이미지로 읽어오기

cv2.imshow('original_result', image)      # 원본 이미지 출력
cv2.imshow('original_result', image_gray) # 흑백 이미지 출력
cv2.waitKey(0)                            # 이미지 출력 유지

blur = cv2.GaussianBlur(image_gray, ksize=(3,3), sigmaX=0)      # 가우시안 블러: ksize커질수록 큰 경계만 검출
ret, thresh1 = cv2.threshold(blur, 127, 255, cv2.THRESH_BINARY) # 이진화(입력영상, 지정임계값, 최댓값(보통255), 함수동작지정, 출력영상)

edged = cv2.Canny(blur, 10, 250)        # 엣지검출함수(입력영상, 임계값1(2에서 판단된 엣지 늘림), 임계값2(엣지여부 판단))
cv2.imshow('Edged', edged)              # 엣지 검출 이미지 출력
cv2.waitKey(0)                          # 이미지 출력 유지

kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (7,7))       # 커널(구조화요소)만드는 함수(커널모양, 크기,[기준점(디폴트(-1,-1))])
# 모폴로지 연산 플래그: ERODE(침식), DILATE(팽창), OPEN(열기), CLOSE(닫기), GRADIENT(팽창-침식)
closed = cv2.morphologyEx(edged, cv2.MORPH_CLOSE, kernel)       # (입력영상, 모폴로지연산 플래그, 커널, 출력영상)
cv2.imshow('closed', closed)                                    # 노이즈 정리한 엣지 검출 이미지 출력
cv2.waitKey(0)

final = cv2.threshold(edged, 127, 255, cv2.THRESH_BINARY_INV)   # 색칠할 수 있게 색상 반전 
cv2.imwrite('img_edges.jpg', final[1])                          # 마지막 이미지 저장
cv2.imshow('final', final[1])                                   # 마지막 이미지 출력
cv2.waitKey(0)
cv2.destroyAllWindows()                                         # 출력하고나면 창 모두 꺼지도록 정리
