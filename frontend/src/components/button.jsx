import React from 'react';
import styles from './button.module.css'

const Button = (props) => {
    function find_color(domain_name) {
        domain_name = props.domain_name;
        if(domain_name) {
            if(domain_name === 'google') {
                return <button className={styles.google}> {props.content} </button>; 
            } else if(domain_name === 'naver') {
                return <button className={styles.naver}> {props.content} </button>;
            }
        } else {
            return <button> {props.content} </button>;
        }
    }

    return (
        <div className={styles.button_box}>
            {find_color(props.domain_name)}
        </div>
    )
};

export default Button;