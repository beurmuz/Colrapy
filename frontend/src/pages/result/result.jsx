import React from 'react';
import Button from '../../components/button';
import styles from './result.module.css';
import {Link} from 'react-router-dom';

const Result = ({username, resultData}) => {
    const mention = resultData.mention.mention;
    const colors = [resultData.color1, resultData.color2, resultData.color3];

    const recommandList = colors.map((color) => {
        return(
            <li key={color.code} className={styles.recommand_item} >
                <div className={styles.recommand_wrap}>
                    <span className={styles.recommand_color} style={{backgroundColor: color.code}}></span>
                    <p className={styles.recommand_effect}>{color.negative}</p>
                </div>
                <img className={styles.template_image} src={color.b_image}/>
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
            <Link to={'/canvas/templates'}>
                <Button content={'컬러링하러 가기'} />
            </Link>
        </div>
    )
}

export default Result;