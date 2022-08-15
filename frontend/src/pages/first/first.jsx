import { React, useState, useEffect } from "react";
import styles from './first.module.css';
import Button from '../../components/button';
import {Link} from 'react-router-dom';

const Typing = ({ content = "", speed = 1000 }) => {
    const [displayContent, setDisplayContent] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const animationKey = setInterval(() => {
        setIndex((index) => {        
          if (index >= content.length - 1) {
            clearInterval(animationKey);
            return index;
          }
          return index + 1;
        });
      }, speed);
    }, []);
  
    useEffect(() => {
      setDisplayContent((displayContent) => displayContent + content[index]) 
    }, [index])
  
    return( 
        <div className={styles.main_box}>
            <div className={styles.intro_content}>
                <h2 className={styles.display_content}>{displayContent}</h2>
            </div>
            <Link to={'/users/login'}>
                <Button content={'회원가입 / 로그인 하기'} />
            </Link>
        </div>
    );
  };
  
const sample_content = `오늘 당신의 기분은 어떤가요?\n회원가입하고 컬라피에서 나의 심리 상태를 알아보세요!`;
const First = () => <Typing content={sample_content} speed={100} />;

export default First;