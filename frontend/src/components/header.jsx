import React from 'react';
import styles from './header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <nav className={styles.header}>
            <Link to={'/'}>
            <h1 className={styles.title}>
                Colrapy
            </h1>
            </Link>
            <Link to={'/profile'}>
                <FontAwesomeIcon 
                    className={styles.user_icon}
                    icon={faCircleUser}>
                </FontAwesomeIcon>
            </Link>
        </nav>
    )
}

export default Header;