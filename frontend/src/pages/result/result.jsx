import React, { useEffect, useState } from 'react';
import Button from '../../components/button';
import styles from './result.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Result = (props) => {
    const navigate = useNavigate();
    let username = '컬라피';
    let [mention, setMention] = useState();
    let [colors, setColors] = useState([{}]);
    let [baseImages, setBaseImages] = useState([{}]);
    let [lineImages, setLineImages] = useState([{}]);

    // 서버로부터 결과 받아오기
    const getResult = async() => {
        await axios.get('https://16c2b227-f591-4fed-b28a-4e43d84fdd27.mock.pstmn.io/diary/result/')
            .then((response) => {
                // console.log(response.data);
                setMention(response.data.mention.mention); //ok
                // console.log(mention.mention);
                setColors([{ ...response.data.color1 },{ ...response.data.color2 }, { ...response.data.color3 }]);
                // console.log(colors[0].color);
                setBaseImages([{...response.data.base_images}]);
                // console.log(...bImages);
                setLineImages([{...response.data.line_images}]);
                // console.log(...lImages);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getResult();
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/canvas/templates');
    }

    const recommandList = colors.map((color, index) => {
        return(
            <li key={color.code + index} className={styles.recommand_item} >
                <div className={styles.recommand_wrap}>
                    <span className={styles.recommand_color} style={{backgroundColor: color.code}}></span>
                    <p className={styles.recommand_effect}>{color.negative || color.positive}</p>
                </div>
                {/* <img className={styles.template_image} alt={color.color} src={color.b_image}/> */}
            </li>
        )
    }) ;

    return (
        <div className={styles.result_box}>
            <h2>{username}{mention}</h2>
            <p>이런 날엔 아래의 색상그림처럼 색칠해보는 것을 추천해드려요! 🥰</p>

            <div className={styles.recommand_box}>
                <ul className={styles.recommand_list}>
                    {recommandList}
                </ul>
            </div>
            <Button content={'컬러링하러 가기'} _onClick={handleClick} />
        </div>
    )
}

export default Result;