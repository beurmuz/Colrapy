import React from 'react';
import styles from './diary.module.css';
import Button from '../../components/button';
import InputLabel from '../../components/auth/inputLabel';
import { useState } from 'react';

const Diary = (props) => {
    // 같은 역할을 하는 input들
    const [state, setState] = useState({
        activity: '',
        content: ''
    });

    // state 변경 시 발생하는 함수
    const handleChangeState = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
        // 객체 안에서 key를 작성하는 [] 배열의 비구조화할당
        // [e.target.name] 이라는 key를 전달받은 name이 activity면 activity의 input값을 업데이트
    }

    // button 클릭시 submit 하는 함수
    // const handleSubmit = () => {
    //     console.log(state)
    //     alert('일기 작성완료!');
    // }
    
    return(
        <div className={styles.diary_box}>
            <div className={styles.act_choice_box}>
                <h2>오늘 무엇을 했나요?</h2>
                <p>데이트, 운동, 일, 쇼핑 등 단어로 작성해주세요!</p>
                <input 
                    name='activity' 
                    value={state.activity} 
                    onChange={handleChangeState} 
                    className={styles.write_activity}
                />
            </div>
            <div className={styles.write_box}>
                <h2>기분이 어땠나요?</h2>
                <p>해당 활동을 하면서 느낀 감정에 대해 자유롭게 작성해주세요. 길게 작성할수록 컬라피가 기분을 상세하게 분석할 수 있어요! </p>
                <input
                    name='content'
                    value={state.content}
                    onChange={handleChangeState} 
                    className={styles.write_content}
                />
            </div>
            <Button 
                content={'기록하기'} 
                pageUrl={'/diary/result'} 
                // handle_function={handleSubmit}
            />
        </div>
    );
}

export default Diary;