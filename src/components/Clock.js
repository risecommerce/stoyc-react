import React, { Component } from "react";
import AnalogClock from "./AnalogClock";
import { Container , Row, Col} from "react-bootstrap";

class Clock extends Component {
   // constructor(props){}
    render(){
        const presetObj = {
            hasShadow: true,
            shadowColor: "#000",
            shadowBlur: 10,
            drawSecondHand: true,
            drawMajorTicks: true,
            drawMinorTicks: true,
            drawBorder: true,
            drawFill: true,
            drawTexts: true,
            drawPin: true,
            majorTicksColor: "#fff",
            minorTicksColor: "#fff",
            majorTicksLength: 10.0,
            minorTicksLength: 7.0,
            majorTicksWidth: 0.005,
            minorTicksWidth: 0.0025,
            fillColor: "#000",
            pinColor: "#f88",
            pinRadius: 5.0,
            borderColor: "#000",
            borderWidth: 2.0,
            secondHandColor: "#f00",
            minuteHandColor: "#fff",
            hourHandColor: "#fff",
            fontColor: "#fff",
            fontName: "Tahoma",
            fontSize: 10.0,
            secondHandLength: 90.0,
            minuteHandLength: 70.0,
            hourHandLength: 50.0,
            secondHandWidth: 1.0,
            minuteHandWidth: 2.0,
            hourHandWidth: 3.0
          };
          const londonTime = {
            timezone: "Europe/London" 
          };

          const losAnglesTime = {
            timezone: "America/Los_Angeles" 
          };

          const parisTime = {
            timezone: "Europe/Paris" 
          };

          const sanFranciscoTime = {
            timezone: "America/Los_Angeles" 
          };
        return(
          <Container className="text-white clock-contents py-5">
            <Row>
          
          <Col>
            <div className="clocks-and-text">
              <h2 className="text-white fw-500 ls-minus-2px pb-5 mb-0 alt-font " data-aos="fade-right" data-aos-delay={100}>Based in California <br />but Working Worldwide.</h2>
              <div className="clocks flex-wrap div-fade">
                <div className="clock-container text-center font-weight-bold text-uppercase" data-aos="fade-left" data-aos-delay={100}>
                  <AnalogClock id="losAnglesTime" preset={presetObj} options={losAnglesTime} />
                  <div className="label-small align-center">Los Angeles<br /></div>
                </div>
                <div className="clock-container text-center font-weight-bold text-uppercase" data-aos="fade-up" data-aos-delay={100}>
                  <AnalogClock id="franciscoZone" preset={presetObj} options={sanFranciscoTime} />
                  <div className="label-small align-center">San Francisco<br /></div>
                </div>
                <div className="clock-container text-center font-weight-bold text-uppercase" data-aos="fade-down" data-aos-delay={100}>
                  <AnalogClock id="parisTime" preset={presetObj} options={parisTime} />
                  <div className="label-small align-center">Paris<br /></div>
                </div>
                <div className="clock-container text-center font-weight-bold text-uppercase" data-aos="fade-right" data-aos-delay={100}>
                  <AnalogClock id="landonTimeZone" preset={presetObj} options={londonTime} />
                  <div className="label-small align-center">London<br /></div>
                </div>
              </div>
            </div>
          </Col>
              </Row>
          </Container>
        );
    }
}

export default Clock;