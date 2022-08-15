import React from 'react';
import styles from './diary.module.css';
import Button from '../../components/button';
import InputLabel from '../../components/inputLabel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Diary = (props) => {
    const navigate = useNavigate();
    let [activity, setActivity] = useState('');
    let [feeling, setFeeling] = useState('');

    // activity 값 변경 시 발생하는 함수
    const handleChangeActivity = (e) => {
        setActivity(e.target.value);
    }

    // feeling 값 변경 시 발생하는 함수
    const handleChangeFeeling = (e) => {
        setFeeling(e.target.value);
    }

    // 유효성 및 길이 체크
    const checkInput = (activity, feeling) => {
        if(activity === '' || feeling === '') {
            alert('빈칸이 있어요.😥 모든 칸을 채워주세요.');
            return false;
        }
        if(feeling.length < 15) {
            alert('너무 짧아요.😥 오늘 느꼈던 기분에 대해 좀 더 상세하게 작성해주세요!');
            return false;
        }
        return true;
    }

    // button 클릭시 submit 하는 함수
    const handleSubmit = async (e) => {
        e.preventDefault();

        // input 검사
        if(!checkInput(activity, feeling)) return;
        try {
            await axios.post('https://16c2b227-f591-4fed-b28a-4e43d84fdd27.mock.pstmn.io/diary/', {
                activity: activity,
                feeling: feeling
            }, {
                headers: { "Content-Type": "application/json" }
              })
            .then((response) => {
                alert('기록이 완료되었어요!');
                setTimeout(() => {
                    navigate('/diary/result');
                }, 1000);
            });
        } catch (error) {
            alert('오류가 발생했어요. 다시 시도해주세요. 😥');
        }
    }
    
    return(
        <div className={styles.diary_box}>
            <form>
                <div className={styles.act_choice_box}>
                    <h2>오늘 무엇을 했나요?</h2>
                    <p>데이트, 운동, 일, 쇼핑 등 단어로 작성해주세요!</p>
                    <InputLabel 
                        name={'activity'} 
                        placeholder={'데이트'} 
                        onChange={handleChangeActivity}
                    />
                </div>
                <div className={styles.write_box}>
                    <h2>기분이 어땠나요?</h2>
                    <p>해당 활동을 하면서 느낀 감정에 대해 자유롭게 작성해주세요. 길게 작성할수록 컬라피가 기분을 상세하게 분석할 수 있어요! </p>
                    <InputLabel 
                        name={'feeling'} 
                        placeholder={'오랜만에 데이트를 했다. 오랜만이라 반가웠지만 만나자마자 남자친구와 다퉈서 속상했다.'}
                        onChange={handleChangeFeeling}
                    />
                </div>
                <Button 
                    content={'기록하기 ✨'} 
                    _onClick={handleSubmit}
                />
            </form>
        </div>
    );
}

export default Diary;