import React from 'react';
import styles from './login.module.css';
import Button from '../../components/button';
import { Link } from 'react-router-dom';
import InputLabel from '../../components/auth/inputLabel';

const Login = (props) => {
    const user_info = props;
    console.log(user_info);
    return (
        <div className={styles.info_box}>
            <div className={styles.login_box}>
                <h2 className={styles.page_title}>로그인</h2>
                <form className={styles.login_form}>
                    <InputLabel label='아이디' name='id' placeholder='가입 시 작성한 이메일을 입력해주세요.' />
                    <InputLabel label='비밀번호' name='password' placeholder='비밀번호를 입력하세요.' />
                    <Button content={'로그인하기'} pageUrl={'/main'} />
                </form>
            </div>
            <div className={styles.join_box}>
                <h2 className={styles.page_title}>회원가입</h2>
                <p>아직 회원가입 전인가요?</p>
                <Button content={'카카오로 가입하기'} domain_name={'kakao'} pageUrl={'/main'}/>
                <Button content={'네이버로 가입하기'} domain_name={'naver'} pageUrl={'/main'}/>
                {/* <Button content={'로그인'} /> */}
            </div>
            {/* <div className={styles.find_box}>
                <Link to='/user/findpw'>비밀번호 찾기</Link>
            </div> */}
        </div>
    );
}

export default Login;