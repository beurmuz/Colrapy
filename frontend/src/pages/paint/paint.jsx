import React from 'react';
import styles from './paint.module.css';
import { HexColorPicker, HexColorInput } from "react-colorful";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown, faFillDrip, faPaintbrush, faArrowRotateLeft, faPalette } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Button from '../../components/button';

const Paint = (props) => {
    const [color, setColor] = useState('aabbcc');
    console.log(setColor);

    function setSize() {
        return '<input type="range" min="0.5" max="3.0" step="0.5" />';
    }

    const import_background = { backgroundImage: "url('/images/template_image/blue_easy.jpg')" };

    return (
        <div className={styles.paint_box}>
            <div className={styles.controlbar_box}>
                <div className={styles.control_element}>
                    <FontAwesomeIcon className={styles.icon_undo} icon={faArrowRotateLeft} />
                </div>
                <div className={styles.control_element}>
                    <FontAwesomeIcon className={styles.icon_fill} icon={faFillDrip} />
                </div>
                <div className={styles.control_element}>
                    <FontAwesomeIcon className={styles.icon_brush} icon={faPaintbrush} onClick={setSize}/>
                </div>
                <div className={styles.control_element}>
                    <FontAwesomeIcon className={styles.icon_color} icon={faPalette} />
                </div>  
                <div className={styles.control_element}>
                    <FontAwesomeIcon className={styles.icon_save} icon={faCloudArrowDown} />    
                </div>
            </div>
            <div className="controls">
                <div className="controls_colors" id="jsColors">
                    <HexColorPicker className={styles.palette}color={color} onChange={setColor} />
                    <HexColorInput color={color} onChange={setColor} placeholder="Type a Color" prefixed alpha/>
                </div>
            </div>
            <div className={styles.paint_img} style={import_background}>
            </div>
            <Button content={'색칠하기 끝!'} pageUrl={'/canvas/poll'} />
        </div>
    )
}

export default Paint;