import React from 'react';
import styles from './templates.module.css';
import Button from '../../components/button';
import { Link } from 'react-router-dom';

const ChooseTemplates = (props) => {
    const { recommand_colors } = props;

    const template_list = recommand_colors.map((color, index) => 
        <div>
            <div className={styles.choice_wrap}>
                <input type='checkbox' className={styles.template_check}/>
                <div style={{backgroundColor: color.code}} className={styles.template_color}></div>
                <span className={styles.template_colorname}>{color.color}</span>
            </div>
            
            <li key={index} className={styles.templates_item}>
                <img className={styles.templates_image} src={color.imageUrl} alt='templates' />
            </li>
        </div>
    );

    return (
        <div className={styles.choose_box}>
            <h3 className={styles.page_title}>컬라피가 추천하는 템플릿들</h3>
            <p>아래의 템플릿 중 하나를 골라보세요!</p>
            <div className={styles.templates_box}>
                <ul className={styles.templates_list}>
                    {template_list}

                </ul>
            </div>
            <Link to={'/canvas/paint'}>
                <Button content={'선택 완료'}/>
            </Link>
        </div>
    )
}

export default ChooseTemplates;