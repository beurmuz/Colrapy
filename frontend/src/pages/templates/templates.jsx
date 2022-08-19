import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './templates.module.css';

const ChooseTemplates = () => {
    let [baseImages, setBaseImages] = useState({});
    let navigate = useNavigate();

    // 서버로부터 결과 받아오기
    const getResult = async() => {
        await axios.get('https://16c2b227-f591-4fed-b28a-4e43d84fdd27.mock.pstmn.io/canvas/')
            .then((response) => {
                setBaseImages(response.data.base_images);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getResult();
    }, []);

    // img object -> img array
    let images = [];
    const objToImgs = Object.entries(baseImages);
    for(let [key, value] of objToImgs) {
        images.push(value);
    }

    // 특정 템플릿 클릭 시 라우팅과 함께 클릭한 템플릿 주소 props로 넘기기
    const handleRouting = (e) => {
        console.log(e.target.src);
        navigate('/canvas/painting', {
            img_src: e.target.src
        });
    }


    // UI 생성
    const templateList = images.map((img, index) => {
        return (
            <div>
                <li key={img+index} className={styles.templates_item}>
                    <img className={styles.templates_image} src={img} alt='templates' onClick={handleRouting}/>
                 </li>
            </div>
        )
    });

    return (
        <div className={styles.choose_box}>
            <h3 className={styles.page_title}>템플릿 선택</h3>
            <p>컬러링을 원하는 템플릿을 클릭해보세요!</p>
            <div className={styles.templates_box}>
                <ul className={styles.templates_list}>
                    {templateList}
                </ul>
            </div>
        </div>
    )
}

export default ChooseTemplates;