import React from 'react';
import styles from './button.module.css'

const Button = (props) => {
    return (
        <div className={styles.button_box}>
            <button> {props.content} </button>
        </div>
    )
};

export default Button;