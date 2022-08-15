import React from 'react';
import styles from './login.module.css';
import Button from '../../components/button';
import { useNavigate } from 'react-router-dom';
import InputLabel from '../../components/inputLabel';
import { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
  const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    // 유효성 체크1: 이메일 형식 체크
    const emailCheck = (email) => {
      let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
      return _reg.test(email);
    }

    // 유효성 체크2: 빈 값 체크 
    const checkInputValue = (email, password)  => {
      if (email === "" || password === "") {
        alert("아이디와 비밀번호를 입력해주세요. 🤒");
        return false;
      }
      if (!emailCheck(email)) {
        alert("이메일 형식이 맞지 않습니다. 😱");
        return false;
      }
      return true;
    };

    // login 버튼 클릭 시 api호출
    const login = async (e) => {
      e.preventDefault();

      // email, password 칸 검사
      if(!checkInputValue(email, password)) return;
      try {
        await axios.post('https://16c2b227-f591-4fed-b28a-4e43d84fdd27.mock.pstmn.io/users/login/', {
          email: email,
          password: password
        }, {
          headers: { "Content-Type": "application/json" }
        });
        alert('로그인에 성공했습니다! 🥰');
        setTimeout(() => {
          navigate('/colrapy');
        }, 1000);
      } catch(error) {
        alert('로그인에 실패했습니다. 😥');
      }
    }

    // 카카오 로그인 버튼 클릭 시 api호출
    const kakaoLogin = async (e) => {
      e.preventDefault();
      
      await axios.get('https://16c2b227-f591-4fed-b28a-4e43d84fdd27.mock.pstmn.io/users/login/kakao/')
        .then((response) => {
          console.log(response.data.link); // tmp: 연결 확인 데이터
          navigate('/users/login/kakao/');
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // 카카오 로그인 버튼 클릭 시 api호출
    const naverLogin = async (e) => {
      e.preventDefault();
      
      await axios.get('https://16c2b227-f591-4fed-b28a-4e43d84fdd27.mock.pstmn.io/users/login/naver/')
        .then((response) => {
          console.log(response.data.link); // tmp: 연결 확인 데이터
          navigate('/users/login/naver/');
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return (
        <div className={styles.info_box}>
            <div className={styles.login_box}>
                <h2 className={styles.page_title}>로그인</h2>
                <form className={styles.login_form} >
                    <InputLabel label='아이디' name='email' placeholder='가입 시 작성한 이메일을 입력해주세요.' type='email' required onChange={e => setemail(e.target.value)}/>
                    <InputLabel label='비밀번호' name='password' placeholder='비밀번호를 입력하세요.' type='password' required onChange={e => setPassword(e.target.value)}/>
                    <Button content={'로그인'} _onClick={login}/>
                </form>
            </div>
            <div className={styles.join_box}>
                <h2 className={styles.page_title}>회원가입</h2>
                <p>아직 회원가입 전인가요?</p>
                  <Button content={'카카오로 가입하기'} domain_name={'kakao'} _onClick={kakaoLogin} />
                  <Button content={'네이버로 가입하기'} domain_name={'naver'} _onClick={naverLogin} />
            </div>
            {/* <div className={styles.find_box}>
                <Link to='/user/findpw'>비밀번호 찾기</Link>
            </div> */}
        </div>
    );
}

export default Login;