import React from 'react';
import styles from './home.module.css';
import Button from '../../components/button';
import {Link} from 'react-router-dom';

const Home = (props) => {

    return( 
        <div className={styles.main_box}>
            <div className={styles.intro_content}>
                <h2>오늘 당신의 기분은 어떤가요? <br/>회원가입하고 컬라피에서 나의 심리상태를 알아보세요!</h2>
            </div>
            <Link to={'/users/login'}>
                <Button content={'3초만에 회원가입 / 로그인 하기'} />
            </Link>
            {/* <Button content={'3초만에 회원가입 / 로그인 하기'} pageUrl={'/users/login'}/> */}
        </div>
    );
}

export default Home;