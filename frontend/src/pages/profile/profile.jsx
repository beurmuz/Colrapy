import React from 'react';
import { useState } from 'react';
import InputLabel from '../../components/inputLabel';
import Button from '../../components/button';
import styles from './profile.module.css';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    const [showProfile, setshowProfile] = useState(false);

    // 데이터 초기값은 DB에서 가져온 사용자의 기본정보여야 함
    const [state, setState] = useState({
        age: '',
        username: '',
        password: ''
    });
    const { age, username, password } = state;

    // state 변경 시 발생하는 함수
    const handleChangeState = (e) => {
        setState({
            [e.target.name] : e.target.value // name이 age이면 age의 input값 업데이트
        });
        // console.log(e.target.value);  
    }

    return (
        <div className={styles.profile_box}>
            <h2>Profile</h2>
            <div className={styles.button_list}>
                <button onClick={() => setshowProfile(!showProfile)}>
                    내 프로필 수정하기
                </button>
                { showProfile 
                  ? <div className={styles.controlbar_accordion} >
                        <form> 
                            {/* placeholder 부분 다 빼주고, 실제 사용자 정보를 초기 값으로 넣어주어야 함 */}
                            <InputLabel label='이메일' name='email' placeholder='testuser1@naver.com' disabled/>
                            <InputLabel label='나이' name='age' placeholder='24' onChange={handleChangeState}/>
                            <InputLabel label='사용자이름' name='username' placeholder='아이디를 입력하세요.' onChange={handleChangeState}/>
                            <InputLabel label='비밀번호' name='password' placeholder='비밀번호를 입력하세요.' type='password' onChange={handleChangeState}/>
                        </form>
                        <button >수정 완료</button>
                    </div>
                  : ''}
                <Link to={'/'}>
                    <Button content={'로그아웃'} />
                </Link>
            </div>
        </div>
    )
}

export default Profile;