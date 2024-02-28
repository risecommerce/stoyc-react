import React, { useEffect } from 'react';

function AnalogClock({ id, preset, options }) {
  useEffect(() => {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext('2d');
    const bound = canvas.height;
    let safepad = 0;
    if (preset.hasShadow) {
      safepad = preset.shadowBlur; 
    }
    const radius = canvas.height / 2 - safepad;
    const secondStep = 2 * Math.PI / 60;
    const hourStep = 2 * Math.PI / 12;

    const initialize = () => {
      canvas.style.maxWidth = '100%';
      canvas.width = canvas.height;
      if (preset.hasShadow) {
        ctx.shadowOffsetX = 0.0;
        ctx.shadowOffsetY = 0.0;
        ctx.shadowBlur = preset.shadowBlur;
        ctx.shadowColor = preset.shadowColor;
      }
      draw();
    };

    const p2v = (value) => {
      return value / 100.0 * radius;
    };

    const drawMajorLines = () => {
      ctx.lineWidth = p2v(preset.majorTicksLength);
      ctx.strokeStyle = preset.majorTicksColor;

      for (let i = 1; i <= 12; i++) {
        ctx.beginPath();
        ctx.arc(radius + safepad, radius + safepad, radius - ctx.lineWidth / 2, i * hourStep - p2v(preset.majorTicksWidth) / 2, i * hourStep + p2v(preset.majorTicksWidth) / 2);
        ctx.stroke();
      }
    };

    const drawMinorLines = () => {
      ctx.lineWidth = p2v(preset.minorTicksLength);
      ctx.strokeStyle = preset.minorTicksColor;

      for (let i = 1; i <= 60; i++) {
        ctx.beginPath();
        ctx.arc(radius + safepad, radius + safepad, radius - ctx.lineWidth / 2, i * secondStep - p2v(preset.minorTicksWidth) / 2, i * secondStep + p2v(preset.minorTicksWidth) / 2);
        ctx.stroke();
      }
    };

    const drawBorder = () => {
      ctx.strokeStyle = preset.borderColor;
      ctx.lineWidth = p2v(preset.borderWidth);
      ctx.beginPath();
      ctx.arc(radius + safepad, radius + safepad, radius - ctx.lineWidth / 2, 0.0, 2 * Math.PI);
      ctx.stroke();
    };

    const drawFill = () => {
      ctx.fillStyle = preset.fillColor;
      ctx.lineWidth = p2v(preset.borderWidth);
      ctx.beginPath();
      ctx.arc(radius + safepad, radius + safepad, radius - ctx.lineWidth, 0.0, 2 * Math.PI);
      ctx.fill();
    };

    const drawHandle = (angle, lengthPercent, widthPercent, color) => {
      let x = angle - Math.PI / 2;
      x = Math.cos(x) * p2v(lengthPercent);
      let x_1 = angle - Math.PI / 2;
      let y = Math.sin(x_1) * p2v(lengthPercent);
      ctx.lineWidth = p2v(widthPercent);
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(radius + safepad, radius + safepad);
      ctx.lineTo(radius + safepad + x, radius + safepad + y);
      ctx.stroke();
    };

    const drawTexts = () => {
      for (let i = 1; i <= 12; i++) {
        let angle = i * hourStep;
        let x = angle - Math.PI / 2;
        x = Math.cos(x) * p2v(80.0);
        let x_1 = angle - Math.PI / 2;
        let y = Math.sin(x_1) * p2v(80.0);

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = p2v(preset.fontSize).toString() + 'px ' + preset.fontName;
        ctx.fillStyle = preset.fontColor;
        ctx.beginPath();
        ctx.fillText(i.toString(), radius + safepad + x, radius + safepad + y);
        ctx.stroke();
      }
    };

    const drawPin = () => {
      ctx.fillStyle = preset.pinColor;
      ctx.beginPath();
      ctx.arc(radius + safepad, radius + safepad, p2v(preset.pinRadius), 0.0, 2 * Math.PI);
      ctx.fill();
    };

    const changeTimezone = (date, ianatz) => {
      let invdate = new Date(date.toLocaleString('en-US', { timeZone: ianatz }));
      let diff = date.getTime() - invdate.getTime();
      return new Date(date.getTime() - diff);
    };

    const draw = () => {
      ctx.clearRect(0.0, 0.0, bound, bound);
      ctx.lineCap = 'butt';

      if (preset.drawFill) {
        drawFill();
      }

      if (preset.drawMinorTicks) {
        drawMinorLines();
      }

      if (preset.drawMajorTicks) {
        drawMajorLines();
      }

      if (preset.drawBorder) {
        drawBorder();
      }

      if (preset.drawTexts) {
        drawTexts();
      }

      let date = new Date();
      if (options.timezone) {
        date = changeTimezone(date, options.timezone);
      }

      let s = date.getSeconds();
      let m = date.getMinutes();
      let h = date.getHours();
      m += s / 60.0;
      h += m / 60.0;
      ctx.lineCap = 'round';
      drawHandle(h * hourStep, preset.hourHandLength, preset.hourHandWidth, preset.hourHandColor);
      drawHandle(m * secondStep, preset.minuteHandLength, preset.minuteHandWidth, preset.minuteHandColor);
      if (preset.drawSecondHand) {
        drawHandle(s * secondStep, preset.secondHandLength, preset.secondHandWidth, preset.secondHandColor);
      }

      if (preset.drawPin) {
        drawPin();
      }

      window.requestAnimationFrame(draw);
    };

    initialize();
  }, [id, preset, options]);

  return <canvas id={id} height={200}></canvas>;
}

export default AnalogClock;
