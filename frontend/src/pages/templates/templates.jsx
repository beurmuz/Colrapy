import React from 'react';
import styles from './templates.module.css';

const ChooseTemplates = ({resultData}) => {
    const colors = [resultData.color1, resultData.color2, resultData.color3];
    const templateList = colors.map((color) => {
        return (
            <div>
                <div className={styles.choice_wrap}>
                    <div style={{backgroundColor: color.code}} className={styles.template_color}></div>
                    <span className={styles.template_colorname}>{color.color}</span>
                </div>
                <li className={styles.templates_item}>
                    <img className={styles.templates_image} src={color.b_image} alt='templates' />
                </li>
            </div>
        )
    })

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