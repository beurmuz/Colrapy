import React from 'react';
import styles from './inputLabel.module.css';
// import Input from '../input';

const InputLabel = ({label, ...rest}) => {

    return (
        <div className={styles.label_box}>
            <label className={styles.label_name}>{label}</label>
            <input className={styles.input_box}{...rest} />
        </div> 
    )
}

export default InputLabel;  