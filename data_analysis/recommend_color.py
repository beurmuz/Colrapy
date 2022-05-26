# 먼셀의 10색상
color = ['빨간색','주황색','노란색','연두색','초록색','청록색','파란색','남색','보라색','자주색']

# 점수에 따른 추천 색상 부여
def recommend_color(score):
    if score < 10: #초록
        recommend_color = color[3:6]
    elif score < 20: # 파랑
        recommend_color = color[5:8]
    elif score < 30: # 연두
        recommend_color = color[2:5]
    elif score < 40: # 청록
        recommend_color = color[4:7]
    elif score < 50: # 남색
        recommend_color = color[6:9]
    elif score < 60: # 빨강
        recommend_color = color[0:2]
        recommend_color.append(color[-1])
    elif score < 70: # 노랑
        recommend_color = color[1:4]
    elif score < 80: # 자주
        recommend_color = color[8:10]
        recommend_color.append(color[0])
    elif score < 90: # 주황
        recommend_color = color[0:3]
    else: # 보라
        recommend_color = color[4:7]
    return recommend_color

predictions = 75
print(recommend_color(predictions))