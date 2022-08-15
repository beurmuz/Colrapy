import React from 'react';
import styles from './colrapy.module.css';
import Button from '../../components/button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Colrapy = () => {
    let [username, setUsername] = useState('');
    let [userGreeting, setUserGreeting] = useState('');

    // 서버로부터 사용자명 받아오기
    const getUsername = async() => {
        await axios.get('https://16c2b227-f591-4fed-b28a-4e43d84fdd27.mock.pstmn.io/colrapy')
            .then((response) => {
                setUsername(response.data.username);
                setUserGreeting(`${username}님, 어서오세요!\n오늘 하루는 어땠나요? \n일기를 작성하고 컬라피에게 색을 추천받아 컬러링을 해보세요!`);
            })
            .catch((error) => {
                alert('에러가 발생했어요! 😥');
            });
    }

    useEffect(() => {
        getUsername();
    }); // 컴포넌트가 실행될 때 한번만 데이터 가져오기

    return( 
        <div className={styles.main_box}>
            <div className={styles.intro_content}>
                {/* <h2>{username}님, 어서오세요! 🤗 <br/>오늘 하루는 어땠나요? <br/> 일기를 작성하고 현재 심리상태를 분석해보세요! </h2> */}
                <h2>{userGreeting}</h2>
            </div>
            <Link to={'/diary'}>
                <Button content={'일기 작성하기'} />
            </Link>
        </div>
    );
}

export default Colrapy;