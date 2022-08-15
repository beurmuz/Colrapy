// color 데이터, 배경 이미지 데이터 둘 다 받아오는 코드

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './templates.module.css';

const ChooseTemplates = ({}) => {
    let [colors, setColors] = useState([{}]);
    let [bImages, setBImages] = useState([{}]);
    let colorData = [];
    let images = [];

    // 서버로부터 결과 받아오기
    const getResult = async() => {
        await axios.get('https://16c2b227-f591-4fed-b28a-4e43d84fdd27.mock.pstmn.io/diary/result/')
            .then((response) => {
                // console.log(response.data);
                setColors([{ ...response.data.color1 },{ ...response.data.color2 }, { ...response.data.color3 }]);
                // console.log(colors[0].color);
                setBImages([{...response.data.b_images}]);
                // console.log(...bImages);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getResult();
        // changeObjToImg(bImages);
        // makeNewArray(colors, images);
    }, []);

    //  object -> array
    // const changeObjToImg = (bImages) => {
        // const objToBImages = Object.entries(...bImages);
        // for(let [key, value] of objToBImages) {
        //     images.push(value);
        // }
    // }

    // map을 위한 새로운 array 생성
    // const makeNewArray = (colors, images) => {
        // for(let i = 0; i < 3; i++) {
        //     colorData.push([colors[i].color, colors[i].code, images[i]]);
        // }
    // }

    const templateList = colors.map((color) => {
        // let [elColor, elCode, elImg] = [v[0], v[1], v[2]];
        let [elColor, elCode] = [color.color, color.code];
        return (
            <div>
                <div className={styles.choice_wrap}>
                    <div style={{backgroundColor: elCode}} className={styles.template_color}></div>
                    <span className={styles.template_colorname}>{elColor}</span>
                </div>
                {/* <Link to='/canvas/painting/'> */}
                    <li className={styles.templates_item}>
                        {/* <img className={styles.templates_image} src={elImg} alt='templates' /> */}
                    </li>
                {/* </Link> */}
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