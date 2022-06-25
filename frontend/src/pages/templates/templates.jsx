import React from 'react';
import styles from './templates.module.css';
import Button from '../../components/button';

const ChooseTemplates = ({all_templates}) => {
    const template_list = [{...all_templates}];
    
    function resetTemplates (template_list) {
        let index = Math.random(0, template_list.length)*10;
        // let reset_template_item = template_list
        return 
    }

    return (
        <div className={styles.choose_box}>
            <h3 className={styles.page_title}>컬라피가 추천하는 템플릿들</h3>
            <p>아래의 템플릿 중 하나를 골라보세요!</p>
            <div className={styles.templates_box}>
                <ul className={styles.templates_list}>
                    <li className={styles.templates_item}>
                        <img className={styles.templates_image} src="/images/template_image/pattern.png" />
                    </li>
                    <li className={styles.templates_item}>
                        <img className={styles.templates_image} src="/images/template_image/pattern.png" />
                    </li>
                    <li className={styles.templates_item}>
                        <img className={styles.templates_image} src="/images/template_image/pattern.png" />

                    </li>
                </ul>
            </div>
            <Button content={'선택 완료'} pageUrl={'/canvas/paint'}/>
        </div>
    )
}

export default ChooseTemplates;