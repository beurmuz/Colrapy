import React from 'react';
import styles from './diary.module.css';
import Button from '../../components/button';
import InputLabel from '../../components/inputLabel';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Diary = (props) => {
    // 같은 역할을 하는 input들
    const [state, setState] = useState({
        activity: '',
        feeling: ''
    });
    const { activity, feeling } = state;

    // state 변경 시 발생하는 함수
    const handleChangeState = (e) => {
        setState({
            [e.target.name] : e.target.value // name이 feeling이면 feeling의 input값 업데이트
        });
        // console.log(e.target.value);    
    }

    // button 클릭시 submit 하는 함수
    const handleSubmit = () => {
        checkInput();
        return false;
    }

    // input validation 체크 함수
    const checkInput = () => {
        if(activity === '' || feeling === '') {
            // console.log(activity);
            alert('빈칸이 있어요! 모든 칸을 채워주세요. 😢');
            return false;
        }
        return true;
    }
    
    return(
        <div className={styles.diary_box}>
            <form>
                <div className={styles.act_choice_box}>
                    <h2>오늘 무엇을 했나요?</h2>
                    <p>데이트, 운동, 일, 쇼핑 등 단어로 작성해주세요!</p>
                    <InputLabel name={'activity'} placeholder={'명상'} onChange={handleChangeState}/>
                </div>
                <div className={styles.write_box}>
                    <h2>기분이 어땠나요?</h2>
                    <p>해당 활동을 하면서 느낀 감정에 대해 자유롭게 작성해주세요. 길게 작성할수록 컬라피가 기분을 상세하게 분석할 수 있어요! </p>
                    <InputLabel name={'feeling'} placeholder={'원래 혼자 있는 시간을 즐기는 편이지만, 오늘따라 외롭기도 했다. 이도저도 아닌 애매한 기분이었다.'} onChange={handleChangeState}/>
                </div>
                <Link to={'/diary/result'}>
                    <Button 
                        content={'기록하기 ✨'} 
                        _onClick={handleSubmit}
                    />
                </Link>
            </form>
        </div>
    );
}

export default Diary;