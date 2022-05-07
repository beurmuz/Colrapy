import cv2
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
import scipy.misc

# 히스토그램 형식으로 색을 반환해주는 함수, 각 클러스터의 픽셀의 숫자 기반
def centroid_histogram(clt):

    numLabels = np.arange(0, len(np.unique(clt.labels_)) + 1)
    (hist, _) = np.histogram(clt.labels_, bins=numLabels)

    hist = hist.astype("float")
    hist /= hist.sum()

    return hist

# 이미지 색 클러스터링 함수, k-means
def image_color_cluster(image_path, k = 3):
    image = cv2.imread(image_path)
    # cv에서는 RGB가 아닌 BGR 순으로 나오기 때문에 순서를 RGB로 전환
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    # shape의 0,1번째 즉, height와 width를 통합시킴
    image = image.reshape((image.shape[0] * image.shape[1], 3))

    clt = KMeans(n_clusters = k)
    clt.fit(image)

    hist = centroid_histogram(clt)
    bar = plot_colors(hist, clt.cluster_centers_)
    return clt, bar

# 그래프 함수
def plot_colors(hist, centroids):
    bar = np.zeros((50, 300, 3), dtype = "uint8")
    startX = 0

    # 각 클러스터의 색과 분포
    for (percent, color) in zip(hist, centroids):
        # plot the relative percentage of each cluster
        endX = startX + (percent * 300)
        cv2.rectangle(bar, (int(startX), 0), (int(endX), 50),
        color.astype("uint8").tolist(), -1)
        startX = endX

    return bar

# 이미지 경로 설정 및 클러스터 함수 호출
image_path = 'data_img/nature_blue_1.png'
clt, bar = image_color_cluster(image_path)

# 히스토그램과 각 컬러를 나타내기 위한 그래프 함수 호출
hist = centroid_histogram(clt)
bar = plot_colors(hist, clt.cluster_centers_)

# bar 형식으로 시각화 및 결과 저장
plt.figure()
plt.axis("off")
plt.imshow(bar)
plt.show()
cv2.imwrite('color_result/1.png',bar)

# 템플릿에서 많이 쓰인 3가지의 색 헥사 코드로 반환
def read_real_color(filename, color_rank):
    image = cv2.imread(filename, cv2.IMREAD_COLOR)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    image_list = [str(list(image[i][k])) for i in range(len(image)) for k in range(len(image[0]))]
    image_unique = {}
    for d in image_list:
        if d not in image_unique:
            image_unique[d] = 1
        else:
            image_unique[d] += 1

    total_color_lists = sorted(image_unique.keys(), key=lambda x: image_unique[x], reverse=True)
    color_list = total_color_lists[color_rank]
    # max가 아닌 빈도수 기준으로 정렬된 데이터를 불러와 각각을 변환

    color_R = int(color_list.split('[')[1].split(']')[0].split(', ')[0])
    color_G = int(color_list.split('[')[1].split(']')[0].split(', ')[1])
    color_B = int(color_list.split('[')[1].split(']')[0].split(', ')[2])

    color_R = dec_to_hex(color_R)
    color_G = dec_to_hex(color_G)
    color_B = dec_to_hex(color_B)

    return str(color_R + color_G + color_B)


def dec_to_hex(color):
    if color < 16:
        return '0' + str(hex(int(color)).split('x')[1])
    else:
        return str(hex(int(color)).split('x')[1])


# 저장된 bar.png 호출 및 많이 사용된 3가지 색의 헥사 코드 확인
png = 'color_result/1.png'
rep_color = []
for i in range(3):
    rep_color.append(read_real_color(png, i))
print(rep_color)