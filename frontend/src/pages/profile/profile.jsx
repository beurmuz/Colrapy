import React, { useEffect } from 'react';
import { useState } from 'react';
import InputLabel from '../../components/inputLabel';
import Button from '../../components/button';
import styles from './profile.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = (props) => {
    const navigate = useNavigate();
    const [showProfile, setshowProfile] = useState(false);
    // 초기값은 서버로부터 전달받은 사용자 정보여야 함
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // state 변경 시 발생하는 함수
    const handleChangeAge = (e) => {
        setAge(e.target.value);
    }
    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleChangePw = (e) => {
        setPassword(e.target.value);
    }

    // 서버로부터 사용자 정보 받아오기
    const getUserInfo = async() => {
        await axios.get('https://16c2b227-f591-4fed-b28a-4e43d84fdd27.mock.pstmn.io/profile',{
            params: {email: email}
        })
            .then((response) => {
                setEmail(response.data.email);
                setAge(response.data.age);
                setUsername(response.data.username);
                // setPassword(response.data.password);
            })
            .catch((error) => {
                alert('오류가 발생했어요. 새로고침 해주세요.😥');
            })
    }

    useEffect(() => {
        getUserInfo();
    }, []);

    // input값 체크
    const checkInput = (password) => {
        if(password === '') {
            alert('비밀번호를 입력해주세요!');
            return false;
        }
        return true;
    }

    // 프로필 수정 시
    const updateUserInfo = async() => {
        if(!checkInput(password)) return;
        await axios.put('https://16c2b227-f591-4fed-b28a-4e43d84fdd27.mock.pstmn.io/profile', {
            age: age,
            username: username,
            password: password
        },{
            params: {email: email}
        })
            .then((response) => {
                alert('수정이 완료되었어요! 잠시 후 메인으로 이동합니다.');
                setTimeout(() => {
                    navigate('/colrapy');
                }, 2000);
            })
            .catch((error) => {
                alert('오류가 발생했어요. 새로고침 해주세요.😥');
            })
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
                            <InputLabel label='이메일' name='email' placeholder={email} disabled/>
                            <InputLabel label='나이' name='age' value={age} onChange={handleChangeAge}/>
                            <InputLabel label='사용자이름' name='username' value={username} onChange={handleChangeUsername}/>
                            <InputLabel label='비밀번호' name='password' placeholder='비밀번호를 입력하세요.' type='password' onChange={handleChangePw}/>
                        </form>
                        <button onClick={updateUserInfo}>수정 완료</button>
                    </div>
                  : ''}
                {/* <Link to={'/'}> */}
                    <Button content={'로그아웃'} />
                {/* </Link> */}
            </div>
        </div>
    )
}

export default Profile;