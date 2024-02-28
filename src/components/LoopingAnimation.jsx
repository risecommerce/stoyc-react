import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const LoopingAnimation = () => {
    const wrapperRef = useRef(null);
    const numberOfEls = 100;
    const duration = 6000;
    const delay = duration / numberOfEls;

    useEffect(() => {
        let tl = anime.timeline({
            duration: delay,
            complete: function () {
                tl.restart();
            }
        });

        const createEl = (i) => {
            const rotate = (360 / numberOfEls) * i;
            const translateY = -50;

            tl.add({
                begin: function () {
                    anime({
                        targets: `.el-${i}`,
                        rotate: [rotate + 'deg', rotate + 10 + 'deg'],
                        translateY: [translateY + '%', translateY + 10 + '%'],
                        scale: [1, 1.25],
                        easing: 'easeInOutSine',
                        direction: 'alternate',
                        duration: duration * 0.1
                    });
                }
            });
        }

        for (let i = 0; i < numberOfEls; i++) {
            createEl(i);
        }

        return () => {
            tl.pause();
        }
    }, [duration, delay, numberOfEls]);

    return (
        <div className="looping-wrapper" ref={wrapperRef}>
            {Array.from({ length: numberOfEls }, (_, i) => (
                <div key={i} className={`el el-${i}`}></div>
            ))}
        </div>
    );
};

export default LoopingAnimation;
