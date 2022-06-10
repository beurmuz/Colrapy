import React from 'react';
import styles from './main.module.css';
import Button from '../../components/button';

const Main = ({username}) => {

    return( 
        <div className={styles.main_box}>
            <div className={styles.intro_content}>
                <h2>{username}님, 어서오세요! 🤗 <br/>오늘 하루는 어땠나요? <br/> 일기를 작성하고 현재 심리상태를 분석해보세요! </h2>
            </div>
            <Button content={'일기 작성하기'} pageUrl={'/diary'}/>
        </div>
    );
}

export default Main;