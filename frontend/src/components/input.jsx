import React from 'react';
import styles from './input.module.css';

const Input = (props) => {

    return (
        <>
            <input 
             type='text'
             name='message' 
             placeholder='내용을 입력하세요.'
             onChange={
                 (e) => {
                     console.log(e.target.value);
                 }
             }
            />
        </>
    )
}

export default Input;