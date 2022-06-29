import React from 'react';
import styles from './paint.module.css';
import { HexColorPicker } from "react-colorful";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown, faFillDrip, faPaintbrush, faArrowRotateLeft, faPalette } from "@fortawesome/free-solid-svg-icons";
import Button from '../../components/button';
import { useState, useRef, useEffect } from 'react';
import { useCallback } from 'react';

const Paint = (props) => {
    const [color, setColor] = useState('000000');

    const canvas_ref = useRef(null); // 컨버스의 DOM값 가져오기

    // 마우스가 눌렸을때만 커서의 움직임 그리기
    // 마우스가 클릭되었는지 안되었는지를 저장하는 state 생성
    const [isPainting, setisPainting] = useState(false);
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    // 좌표를 얻는 함수
    const getCoordinates = (e) => {
        if(!canvas_ref.current) {
            return;
        }
        const canvas = canvas_ref.current;
        return {
            x: e.pageX - canvas.offsetLeft,
            y: e.pageY - canvas.offsetTop
        };
    }

    // canvas에 선 긋는 함수
    const drawLine = (originalPosition, newMousePosition) => {
        if(!canvas_ref.current) {
            return;
        }
        const canvas = canvas_ref.current;
        const context = canvas.getContext('2d');

        if(context) {
            context.strokeStyle = color; // 선 색깔
            context.lineJoin = 'round'; // 선 끄트머리
            context.lineWidth = 5; //선 굵기

            context.beginPath(); 
            context.moveTo(originalPosition.x, originalPosition.y);
            context.lineTo(newMousePosition.x, newMousePosition.y);
            context.closePath();

            context.stroke();
        }
    }

    // paint 시작
    const startPaint = useCallback((e) => {
        const coordinates = getCoordinates(e);
        if(coordinates) {
            setisPainting(true);
            setMousePosition(coordinates);
        }
    }, []);

    const paint = useCallback((e) => {
        e.preventDefault(); // 드래그 방지
        e.stopPropagation(); // 드래그 방지
        
        if(isPainting) {
            const newMousePosition = getCoordinates(e);
            if(mousePosition && newMousePosition) {
                drawLine(mousePosition, newMousePosition);
                setMousePosition(newMousePosition);
            }
        }
    }, [isPainting, mousePosition]);

    const exitPaint = useCallback(() => {
        setisPainting(false);
    }, []);


    useEffect(() => {
        if(!canvas_ref.current) {
            return ;
        }
        const canvas = canvas_ref.current;

        canvas.addEventListener('mousedown', startPaint);
        canvas.addEventListener('mousemove', paint);
        canvas.addEventListener('mouseup', exitPaint);
        canvas.addEventListener('mouseleave', exitPaint);

        return () => {
        // Unmount 시 이벤트 리스터 제거
        canvas.removeEventListener('mousedown', startPaint);
        canvas.removeEventListener('mousemove', paint);
        canvas.removeEventListener('mouseup', exitPaint);
        canvas.removeEventListener('mouseleave', exitPaint);
        };
    }, [startPaint, paint, exitPaint]);


    function setSize() {
        return '<input type="range" min="0.5" max="3.0" step="0.5" />';
    }
    const nowColor = { color: color };
    const import_background = { backgroundImage: "url('/images/template_image/blue_easy.jpg')" };

    return (
        <div className={styles.paint_box}>
            {/* 색상 3가지, 미리보기  */}
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
                    <FontAwesomeIcon className={styles.icon_color} icon={faPalette} style={nowColor}/>
                </div>  
                <div className={styles.control_element}>
                    <FontAwesomeIcon className={styles.icon_save} icon={faCloudArrowDown} />    
                </div>
            </div>
            <div className="controls">
                <div className="controls_colors" id="jsColors">
                    <HexColorPicker 
                        className={styles.palette}
                        color={color} 
                        onChange={setColor} 
                    />
                    {/* <HexColorInput 
                        color={color} 
                        placeholder="Type a Color" prefixed alpha
                    /> */}
                </div>
            </div>
            <div className={styles.canvas_container}>
                <canvas 
                    ref={canvas_ref}
                    className={styles.paint_img} 
                    style={import_background} 
                    onMouseDown={(e) => setisPainting(true)}
                    onMouseUp={(e) => setisPainting(false)}
                />
            </div>
            <Button 
                content={'완성했어요!'} 
                pageUrl={'/canvas/poll'} 
            />
        </div>
    )
}

export default Paint;