import React from 'react';
import styles from './login.module.css';
import Button from '../../components/button';
import { Link, useNavigate } from 'react-router-dom';
import InputLabel from '../../components/inputLabel';
import { useState } from 'react';
import { useDispatch } from "react-redux";
// import { actionCreators as userActions } from "../../redux/modules/user";
import axios from 'axios';
// import { history } from '../../redux/configStore';

const Login = (props) => {
  const navigate = useNavigate();
    // const dispatch = useDispatch();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    const emailCheck = (email) => {
      let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
      return _reg.test(email);
    }
    const login = () => {
      //입력 값 정합성 체크 후 login API 요청
          if (email === "" || password === "") {
            alert("아이디와 비밀번호를 입력해주세요. 🤒");
            return false;
          }
          if (!emailCheck(email)) {
            alert("이메일 형식이 맞지 않습니다.");
            return false;
          }
          // dispatch(userActions.loginDB(email, password));
    };

    // submit 함수 구현
    const loginSumbit = async () => {
      try{
        // 서버로부터 email과 password 정보를 보냄
        await axios.post('https://jsonplaceholder.typicode.com/users', {
          email,
          password
        });
        // 
      } catch (error) {
        console.log(error);
        alert('로그인에 실패했습니다. 😥');
      }
    }

    return (
        <div className={styles.info_box}>
            <div className={styles.login_box}>
                <h2 className={styles.page_title}>로그인</h2>
                <form className={styles.login_form} noValemailate>
                    <InputLabel label='아이디' name='email' placeholder='가입 시 작성한 이메일을 입력해주세요.' required onChange={e => setemail(e.target.value)}/>
                    <InputLabel label='비밀번호' name='password' placeholder='비밀번호를 입력하세요.' type='password' required onChange={e => setPassword(e.target.value)}/>
                    <Link to={'/main'}>
                      <Button content={'로그인'} _onClick={login}/>
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