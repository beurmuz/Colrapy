import React from 'react';
import styles from './header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const navigate = useNavigate();

    // 홈으로 가기
    const handleGoHome = () => {
        navigate('/');
    }

    // 프로필로 가기
    const handleGoProfile = () => {
        navigate('/profile');
    }

    return (
        <nav className={styles.header}>
            <h1 className={styles.title} onClick={handleGoHome}>
                Colrapy
            </h1>
            <span onClick={handleGoProfile}>
                <FontAwesomeIcon 
                    className={styles.user_icon}
                    icon={faCircleUser}>
                </FontAwesomeIcon>
            </span>
        </nav>
    )
}

export default Header;