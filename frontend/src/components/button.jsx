import React from 'react';
import styles from './button.module.css'

const Button = (props) => {
    const { domain_name, content } = props;
    // const { domain_name, content, pageUrl } = props;

    // if(handle_function) {
    //     // console.log(handle_function);
    // }
    
    // function handleGoPage (event) {
    //     if(pageUrl) window.location.href = pageUrl;
    // }

    function find_color(domain_name) {
        if(domain_name) {
            if(domain_name === 'kakao') {
                return <button className={styles.kakao}> {content} </button>; 
            } else if(domain_name === 'naver') {
                return <button className={styles.naver}> {content} </button>;
            }
        } else {
            return <button> {content} </button>;
        }
    }

    return (
        <div className={styles.button_box}>
        {/* <div className={styles.button_box} onClick={handleGoPage}> */}
            {find_color(domain_name)}
        </div>

        // <div className={styles.button_box} onClick={handle_function}>
        //     {find_color(domain_name)}
        // </div>
    )
};

export default Button;