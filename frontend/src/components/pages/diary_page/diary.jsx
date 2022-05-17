import React from 'react';
import styles from './diary.module.css';
import Button from '../../button';

const Diary = (props) => {

    return(
        <div className={styles.diary_box}>
            <div className={styles.act_choice_box}>
                <h2>오늘 무엇을 했나요?</h2>
                <div className={styles.act_choice_wrap}>
                    <ul className={styles.act_choice_list}>
                        <li>데이트</li>
                        <li>회사</li>
                        <li>운동</li>
                        <li>휴식</li>
                        <li>영화</li>
                        <li>독서</li>
                        <li>게임</li>
                        <li>친구</li>
                        <li>가족</li>
                        <li>쇼핑</li>
                        <li>산책</li>
                        <li>청소</li>
                        <li>목욕</li>
                        <li>+</li>
                    </ul>
                </div>
            </div>
            <div className={styles.write_box}>
                <h2>기분이 어땠나요?</h2>
                <p>해당 활동을 하면서 느낀 감정에 대해 자유롭게 작성해주세요. 길게 작성할수록 컬라피가 기분을 상세하게 분석할 수 있어요! </p>
                <form>
                    <input className={styles.write_content} type='text'></input>
                </form>
            </div>
            <Button content={'기록하기'}></Button>
        </div>
    );
}

export default Diary;