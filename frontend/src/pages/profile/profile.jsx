import React from 'react';
import { useState } from 'react';
import InputLabel from '../../components/auth/inputLabel';
import Button from '../../components/button';
import styles from './profile.module.css';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    const [showProfile, setshowProfile] = useState(false);
    return (
        <div className={styles.profile_box}>
            <h2>Profile</h2>
            <div className={styles.button_list}>
                <button onClick={() => setshowProfile(!showProfile)}>
                    내 프로필 수정하기
                </button>
                { showProfile ? <div className={styles.controlbar_accordion} >
                                    <form>
                                        <InputLabel label='이메일' name='email' placeholder='testuser1@naver.com' disabled/>
                                        <InputLabel label='나이' name='age' placeholder='24' />
                                        <InputLabel label='사용자이름' name='username' placeholder='금밍밍' />
                                        <InputLabel label='비밀번호' name='password' placeholder='xxxxxxxxxx' />
                                    </form>
                                    <button>수정 완료</button>
                                </div>
                : ''}
                <Link to={'/'}>
                    <Button content={'로그아웃'} />
                </Link>
                <Button content={'피드백 보내기'} />
            </div>
        </div>
    )
}

export default Profile;