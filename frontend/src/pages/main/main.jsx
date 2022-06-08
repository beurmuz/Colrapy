import React from 'react';
import styles from './main.module.css';
import Button from '../../components/button';

const Main = (props) => {

    return( 
        <div className={styles.main_box}>
            <div className={styles.intro_content}>
                <h2>오늘 당신의 기분은 어떤가요? <br/>회원가입하고 컬라피에서 나의 심리상태를 알아보세요!</h2>
            </div>
            <Button content={'3초만에 회원가입하기'} pageUrl={'/user/login'}/>
        </div>
    );
}

export default Main;