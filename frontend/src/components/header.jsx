import React from 'react';
import styles from './header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
    function handleGoPage (event) {
        window.location.href = '/user/mypage';
    }
    return (
        <nav className={styles.header}>
            <h1 className={styles.title}>
                <a href='/'>
                    Colrapy
                </a>
            </h1>
            <FontAwesomeIcon 
                className={styles.user_icon}
                icon={faCircleUser} 
                onClick={handleGoPage} >
            </FontAwesomeIcon>
        </nav>
    )
}

export default Header;