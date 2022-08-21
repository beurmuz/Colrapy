import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './templates.module.css';
import data from '../../data/template.json';
import HeaderBack from '../../components/headerBack';

const ChooseTemplates = () => {
    let [baseImages, setBaseImages] = useState({});
    let [imgsrc, setImgsrc] = useState([]);
    let navigate = useNavigate();

    // // 서버로부터 결과 받아오기
    // const getResult = async() => {
    //     await axios.get('https://16c2b227-f591-4fed-b28a-4e43d84fdd27.mock.pstmn.io/canvas/')
    //         .then((response) => {
    //             setBaseImages(response.data.base_images);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    const getResult = () => {
        setBaseImages(data.base_images);
    }

    useEffect(() => {
        getResult();

        // img object -> img array
        let images = [];
        const objToImgs = Object.entries(baseImages);
        for(let [key, value] of objToImgs) {
            images.push(value);
        }
        setImgsrc(images);
        console.log(imgsrc);
    }, []);



    // 특정 템플릿 클릭 시 라우팅과 함께 클릭한 템플릿 주소 props로 넘기기
    const handleRouting = (e) => {
        let template_name = `line_image${e.target.alt}`;
        navigate('/canvas/painting', {
            state: {
                t_name: template_name
            }
        });
    }

    // UI 생성
    const templateList = imgsrc.map((img, index) => {
        return (
            <li key={img+index} className={styles.templates_item}>
                <img className={styles.templates_image} src={img} alt={index+1} onClick={handleRouting}/>
             </li>
        )
    });

    return (
        <>
            <HeaderBack />
            <div className={styles.content}>
                <h2 className={styles.page_title}>템플릿 선택</h2>
                <p className={styles.page_info}>컬러링을 원하는 템플릿을 선택해 색칠하세요.</p>
                    <ul className={styles.templates_list}>
                        {templateList}
                    </ul>
            </div>
        </>
    )
}

export default ChooseTemplates;