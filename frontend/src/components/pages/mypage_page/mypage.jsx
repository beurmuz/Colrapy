import React from 'react';
import Button from '../../button';
import styles from './mypage.module.css';

const Mypage = (props) => {
    
    return (
        <div className={styles.mypage_box}>
            <h2>마이페이지</h2>
            <div className={styles.button_list}>
                <Button content={'로그아웃'} />
                <Button content={'일기 기록'} />
                <Button content={'피드백 보내기'} />
            </div>
        </div>
    )
}

export default Mypage;