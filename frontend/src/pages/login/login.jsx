import React from 'react';
import styles from './login.module.css';
import Button from '../../components/button';
import { Link } from 'react-router-dom';

const Login = (props) => {
    return (
        <div className={styles.login_box}>
            <h2 className={styles.page_title}>로그인</h2>
            <div className={styles.button_box}>
                <Button content={'카카오로 회원가입/로그인'} domain_name={'kakao'} pageUrl={'/user/join'}/>
                <Button content={'네이버로 회원가입/로그인'} domain_name={'naver'} pageUrl={'/user/join'}/>
                {/* <Button content={'로그인'} /> */}
            </div>
            {/* <div className={styles.find_box}>
                <Link to='/user/findpw'>비밀번호 찾기</Link>
            </div> */}
        </div>
    );
}

export default Login;