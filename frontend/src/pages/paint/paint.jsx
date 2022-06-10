import React from 'react';
import styles from './paint.module.css';
import Button from '../../components/button';
import { HexColorPicker, HexColorInput } from "react-colorful";
import { useState } from 'react';

const Paint = (props) => {
    const [color, setColor] = useState('aabbcc');
    console.log(setColor);

    return (
        <div className={styles.paint_box}>
            <h3>색칠하기</h3>
            <div className="controls">
                <div className="controls__range">
                    {/* <input type="range" id="jsRange" min="0.2" max="5.0" value="2.5" step="0.2" /> */}
                </div>
                <div className="controls_colors" id="jsColors">
                    <HexColorPicker color={color} onChange={setColor} />
                    <HexColorInput color={color} onChange={setColor} placeholder="Type a Color" prefixed alpha/>
                </div>
                <div className="controls__btns">
                    <Button content={'Fill'} />
                    <Button content={'Save'} />
                </div>
            </div>
            <canvas id="jsCanvas" className="canvas"></canvas>
        </div>
    )
}

export default Paint;