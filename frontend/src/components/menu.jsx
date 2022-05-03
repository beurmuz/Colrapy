import React from 'react';
import styles from './menu.module.css';

const Menu = (props) => (
    <nav className={styles.menu}>
        <h1 className={styles.title}>
            <a href='/'>
                Colrapy
            </a>
        </h1>
        <div className={styles.user_icon}>
            <img className={styles.user_icon_img} alt='user' src='images/icon_user.png'></img>
        </div>
    </nav>          
);

export default Menu;