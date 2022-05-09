import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
    <nav className={styles.header}>
        <h1 className={styles.title}>
            <a href='/'>
                Colrapy
            </a>
        </h1>
        <img className={styles.user_icon_img} alt='user' src='images/icon_user.png'></img>
    </nav>          
);

export default Header;