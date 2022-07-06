import React from 'react';
import Button from '../../components/button';
import styles from './result.module.css';

const Result = (props) => {
    const { username, recommand_colors } = props;
    const recommand_status = ['오늘은 에너지가 필요한 날이예요 !'];
    const analysis_day = ['우울하고 슬픈'];
    const color_list = recommand_colors.map((color, index) =>
        <div className={styles.color_item} >
            <li key={index} className={styles.color_color} style={{backgroundColor: color.code}}></li>
            <p className={styles.color_define}>{color.effet}</p>
        </div>
    );

    return (
        <div className={styles.result_box}>
            <h2>{username}님, {recommand_status}</h2>
            <div className={styles.template_item}>
                <h3>컬라피가 추천하는 템플릿</h3>
                <p>{analysis_day}날엔 아래의 그림처럼 색칠해보는 것을 추천해드려요! 🥰</p>
                <img className={styles.template_image} src="/images/template_image/pattern.png"/>
            </div>
            <div className={styles.color_list_wrap}>
                <h3>컬라피가 추천하는 색</h3>
                <p>컬러링을 할 때 사용하면 좋은 3가지 색을 추천해드릴게요 😋</p>
                <ul className={styles.color_list}>
                    {color_list}
                </ul>
            </div>
            <Button content={'컬러링하러 가기'} pageUrl={'/canvas/templates'}/>
        </div>
    )
}

export default Result;