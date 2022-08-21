import React, { useEffect, useState } from 'react';
import Button from '../../components/button';
import styles from './result.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/header';
import data from'../../data/result.json';
import paintImg from '../../assets/paintimg.png';

const Result = (props) => {
    const navigate = useNavigate();
    let username = '컬라피';
    let [mention, setMention] = useState();
    let [colors, setColors] = useState([{}]);
    let [baseImages, setBaseImages] = useState([{}]);
    let [lineImages, setLineImages] = useState([{}]);
    let [imgsrc, setImgsrc] = useState([]);

    // 서버로부터 결과 받아오기
    // const getResult = async() => {
    //     await axios.get('https://16c2b227-f591-4fed-b28a-4e43d84fdd27.mock.pstmn.io/diary/result/')
    //         .then((response) => {
    //             // console.log(response.data);
    //             setMention(response.data.mention.mention); //ok
    //             // console.log(mention.mention);
    //             setColors([{ ...response.data.color1 },{ ...response.data.color2 }, { ...response.data.color3 }]);
    //             // console.log(colors[0].color);
    //             setBaseImages([{...response.data.base_images}]);
    //             // console.log(...bImages);
    //             setLineImages([{...response.data.line_images}]);
    //             // console.log(...lImages);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    
    // 테스트 data - 서버 죽었을 때
    const getResult = () => {
        setMention(data.mention.mention);
        setColors([{ ...data.color1 },{ ...data.color2 }, { ...data.color3 }]);
        setBaseImages([{...data.base_images}]);
        setLineImages([{...data.line_images}]);
    }

    useEffect(() => {
        getResult();

        if(baseImages) {
            let objToImgs = Object.entries(...baseImages);
            let images = [];
            for(let [key, value] of objToImgs) {
                images.push(value);
            }
            setImgsrc(images);
            console.log(images);
        }
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/canvas/templates');
    }

    // 팔레트 UI
    const palette = colors.map((color, index) => {
        return(
            <div className={styles.pale_box} style={{backgroundColor: color.code}}>
                {color.code}
            </div>
        )
    });

    // 추천색 UI
    const recommandList = colors.map((color, index) => {
        return(
            <li key={color.code + index} className={styles.recommand_item} >
                <p className={styles.color_info}>
                    <span className={styles.hashtag}>{`#${color.color}`}</span>
                    <span className={styles.hashtag}>{color.code}</span>
                </p>
                <div className={styles.post}>
                    <div className={styles.post_front} style={{backgroundColor: color.code}}></div>
                    <div className={styles.post_back} style={{backgroundColor: color.code}}></div>
                </div>
                <p className={styles.color_effect}>
                    {color.negative || color.positive}
                </p>
            </li>
        )
    }) ;

    console.log(imgsrc);
    // 템플릿 UI
    const templateList = imgsrc.map((img, index) => {
        return <img className={styles.template_image} alt={index+1} src={img}/>;
    });

    return (
        <>
            <Header whiteback={true} />
            <div className={styles.content}>
                <div className={styles.page_title}>
                    {username}님의 색상 팔레트
                </div>
                <div className={styles.palette}>
                    {palette}
                </div>

                <p className={styles.mention_box}>
                    {username}{mention}
                </p>

                <div className={styles.recommand_box}>
                    <ul className={styles.recommand_list}>
                        {recommandList}
                    </ul>
                </div>

                <div className={styles.template_box}>
                    <p className={styles.box_title}>
                        컬라피가 추천하는 템플릿
                    </p>
                    <p className={styles.box_info}>
                        팔레트 색상을 많이 활용할 수 있는 템플릿을 추천해드릴게요.
                    </p>
                    <div className={styles.templates}>
                        {templateList}
                    </div>
                </div>

                <Button content={'컬러링하러 가기'} whiteback={true} _onClick={handleClick} />
            </div>
        </>
    )
}

export default Result;