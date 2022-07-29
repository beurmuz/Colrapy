import React from 'react';
import styles from './login.module.css';
import Button from '../../components/button';
import { Link } from 'react-router-dom';
import InputLabel from '../../components/auth/inputLabel';
import { useState } from 'react';

const Login = (props) => {
    // const user_info = props;
    // console.log(user_info);
    async function loginUser(credentials) {
        return fetch('https://www.mecallapi.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(data => data.json())
    }

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = async e => {
      e.preventDefault();
      const response = await loginUser({username, password});
      if ('accessToken' in response) {
        console.log("Success", response.message, "success", {
          buttons: false,
          timer: 2000,
        })
        .then((value) => {
          localStorage.setItem('accessToken', response['accessToken']);
          localStorage.setItem('user', JSON.stringify(response['user']));
          window.location.href = "/profile";
        });
      } else {
        console.log("Failed", response.message, "error");
      }
    }

    return (
        <div className={styles.info_box}>
            <div className={styles.login_box}>
                <h2 className={styles.page_title}>로그인</h2>
                <form className={styles.login_form} noValidate onSubmit={handleSubmit} >
                    <InputLabel label='아이디' name='id' placeholder='가입 시 작성한 이메일을 입력해주세요.' required onChange={e => setUserName(e.target.value)}/>
                    <InputLabel label='비밀번호' name='password' placeholder='비밀번호를 입력하세요.' required onChange={e => setPassword(e.target.value)}/>
                    <Link to={'/main'}>
                      <Button content={'로그인'} />
                    </Link>
                </form>
            </div>
            <div className={styles.join_box}>
                <h2 className={styles.page_title}>회원가입</h2>
                <p>아직 회원가입 전인가요?</p>
                <Link to={'/users/login/kakao/'}>
                  <Button content={'카카오로 가입하기'} domain_name={'kakao'} />
                </Link>
                <Link to={'/users/login/naver/'}>
                  <Button content={'네이버로 가입하기'} domain_name={'naver'} />
                </Link>
            </div>
            {/* <div className={styles.find_box}>
                <Link to='/user/findpw'>비밀번호 찾기</Link>
            </div> */}
        </div>
    );
}

export default Login;