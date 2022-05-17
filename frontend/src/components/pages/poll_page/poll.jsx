import React from 'react';
import Button from '../../button';
import styles from './poll.module.css';

const Poll = (props) => {

    return (
        <div className={styles.poll_box}>
            <h2>컬러링을 한 후 기분이 개선되었나요?</h2>
            <div className={styles.result_box}>
                <Button content={'네! 개선되었어요 🙆🏻'}></Button>
                <Button content={'잘 모르겠어요 🙅🏻‍♂️'}></Button>
            </div>
        </div>
    );
}

export default Poll;