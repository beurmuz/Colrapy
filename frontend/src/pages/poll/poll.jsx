import React from 'react';
import Button from '../../components/button';
import styles from './poll.module.css';
import { Link } from 'react-router-dom';

const Poll = ({username}) => {

    return (
        <div className={styles.poll_box}>
            {/* <h2>{username}님, 기분이 개선되었나요?</h2> */}
            {/* <p>{username}님의 소중한 피드백이 더 나은 컬라피를 만들어준답니다!</p> */}
            {/* <div className={styles.result_box}>
                <button className={styles.poll_button}>네! 개선되었어요 🙆🏻</button>
                <button className={styles.poll_button}>잘 모르겠어요 🤷🏻‍♂️</button>
            </div> */}
            <Link to={'/canvas/templates'}>
                <Button content={'더 할래요! 템플릿 선택하러가기'}/>
            </Link>
            <Link to={'/colrapy'}>
                <Button content={'메인페이지로 가기'} />
            </Link>
        </div>
    );
}

export default Poll;