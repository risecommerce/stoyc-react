import React from "react";
import { Link } from 'react-router-dom';
import UsaFlag from '../assets/images/home/usa-flag.png';
import EnFlag from '../assets/images/home/england.png';
import FrFlag from '../assets/images/home/france.png';
import { Col, Row } from "react-bootstrap";
const Footer = () => {

    return (
        <>
            <footer className="footer section overflow-hidden">
                <div className="theme-container text-white">
                    <div className="footer-top d-flex justify-content-between mb-5 pb-3">

                        <div className="logo">
                         
                            <Link to="/" className="logo-link">
                                <h3 className="text-uppercase">Stoyc</h3>
                            </Link>
                        </div>

                        <ul className="footer-menu list-unstyled d-flex flex-wrap justify-content-between">

                            <li className="" data-aos="fade-up-left">
                                <Link to="/about">Culture</Link>

                            </li>

                            <li className="" data-aos="fade-up-left">
                                <Link to="/services">Capabilities</Link>

                            </li>

                            <li className="" data-aos="fade-up-left">
                                <Link to="/projects">Portfolio</Link>

                            </li>

                            <li className="" data-aos="fade-up-left">
                                <Link to="/contact">Contact</Link>

                            </li>
                            <li className="" data-aos="fade-up-left">
                                <Link to="/prices">Where are the prices?</Link>

                            </li>

                        </ul>
                    </div>


                    <Row className=" align-items-center">

                        <Col className="col-lg-6">
                            <div className="footer-regional d-flex flex-wrap justify-content-between">
                                <div className="footer__address footer__address--primary">
                                    <div className="footer__address-name" data-aos="fade-up-right">
                                        <a href="mailto:info@stoyc.com" className="footer__address-email" rel="noreferrer">
                                            <span className="icon">
                                                <img
                                                src={UsaFlag} width="25" alt="flag" />
                                            </span>
                                            <span>SF</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="footer__address footer__address--center">
                                    <div className="footer__address-name" data-aos="fade-up-right">
                                        <a href="mailto:info@stoyc.com" className="footer__address-email" rel="noreferrer">
                                            <span className="icon">
                                                <img src={UsaFlag} width="25" alt="flag" />
                                            </span>
                                            <span>LA</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="footer__address footer__address--secondary">
                                    <div className="footer__address-name" data-aos="fade-up-right">
                                        <a href="mailto:info@stoyc.com" className="footer__address-email" rel="noreferrer">
                                            <span className="icon">
                                                <img src={EnFlag} width="25" alt="flag" />
                                            </span>
                                            <span>LDN</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="footer__address footer__address--secondary">
                                    <div className="footer__address-name" data-aos="fade-up-right">
                                        <a href="mailto:info@stoyc.com" className="footer__address-email" rel="noreferrer">
                                            <span className="icon">
                                                <img src={FrFlag} width="25" alt="flag" />
                                            </span>
                                            <span>PARIS</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-lg-5 mt-5 mt-md-0 offset-lg-1">
                            <div className="newsletter-content" data-aos="fade-up-left">

                                <div className="input-group">
                                    <input type="email" className="form-control border-bottom border-white"
                                        placeholder="Enter your email" />
                                    <span className="input-group-btn  ml-lg-4 mt-3 mt-lg-0">
                                        <button className="btn btn-solid-white" type="submit">Subscribe</button>
                                    </span>
                                </div>
                                <ul className="social-list d-flex ">
                                    <li>
                                        <a href="http://instagram.com/#" className="instagram" target="_blank" rel="noreferrer"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 9.9" width="20px" height="20px">
                                            <path
                                                d="M5.29,0C3.94,0,3.77,0,3.23.07A3.72,3.72,0,0,0,2,.3a2.45,2.45,0,0,0-.89.57,2.42,2.42,0,0,0-.58.88,3.61,3.61,0,0,0-.23,1.2c0,.53,0,.7,0,2s0,1.51,0,2a3.61,3.61,0,0,0,.23,1.2,2.42,2.42,0,0,0,.58.88A2.46,2.46,0,0,0,2,9.68a3.7,3.7,0,0,0,1.21.23c.53,0,.7,0,2.06,0s1.53,0,2.06,0a3.7,3.7,0,0,0,1.21-.23A2.54,2.54,0,0,0,10,8.24,3.61,3.61,0,0,0,10.26,7c0-.53,0-.7,0-2s0-1.51,0-2A3.61,3.61,0,0,0,10,1.75,2.54,2.54,0,0,0,8.57.3,3.71,3.71,0,0,0,7.36.07c-.53,0-.7,0-2.06,0m0,.89c1.33,0,1.49,0,2,0a2.79,2.79,0,0,1,.93.17,1.54,1.54,0,0,1,.57.37,1.53,1.53,0,0,1,.37.57A2.74,2.74,0,0,1,9.36,3c0,.52,0,.68,0,2s0,1.48,0,2a2.74,2.74,0,0,1-.17.92,1.65,1.65,0,0,1-.95.94A2.8,2.8,0,0,1,7.31,9c-.53,0-.69,0-2,0s-1.49,0-2,0a2.8,2.8,0,0,1-.93-.17,1.56,1.56,0,0,1-.58-.37,1.54,1.54,0,0,1-.37-.57A2.71,2.71,0,0,1,1.22,7c0-.52,0-.68,0-2s0-1.48,0-2a2.71,2.71,0,0,1,.17-.92,1.53,1.53,0,0,1,.37-.57,1.54,1.54,0,0,1,.58-.37A2.79,2.79,0,0,1,3.27,1c.53,0,.69,0,2,0"
                                                transform="translate(-0.29 -0.04)"></path>
                                            <path
                                                d="M5.29,6.64A1.65,1.65,0,1,1,7,5,1.66,1.66,0,0,1,5.29,6.64m0-4.19A2.54,2.54,0,1,0,7.86,5,2.56,2.56,0,0,0,5.29,2.45"
                                                transform="translate(-0.29 -0.04)"></path>
                                            <path d="M8.56,2.35A.6.6,0,1,1,8,1.75a.6.6,0,0,1,.6.59"
                                                transform="translate(-0.29 -0.04)">
                                            </path>
                                        </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/people/STOYC/61556254455533/" className="facebook"
                                            target="_blank" rel="noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.83 10"
                                                width="20px" height="20px">
                                                <path
                                                    d="M3.32,3.31h1v-1A2.68,2.68,0,0,1,4.69.75,1.84,1.84,0,0,1,6.29,0,6.5,6.5,0,0,1,8.14.19L7.89,1.72a3.49,3.49,0,0,0-.83-.12c-.4,0-.76.14-.76.55V3.31H7.94L7.82,4.8H6.29V10H4.35V4.8h-1Z"
                                                    transform="translate(-3.32)"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/STOYC_" className="twitter" target="_blank" rel="noreferrer">
                                        <svg width="20"
                                            height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_901_22)">
                                                <path
                                                    d="M11.9047 8.46958L19.3513 0H17.5873L11.1187 7.35251L5.956 0H0L7.80867 11.1194L0 19.9999H1.764L8.59067 12.2338L14.044 19.9999H20M2.40067 1.30158H5.11067L17.586 18.7623H14.8753"
                                                    fill="black"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_901_22">
                                                    <rect width="20" height="20" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/stoyc" className="linkedin" target="_blank" rel="noreferrer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 9.18" width="20px" height="20px">
                                                <path
                                                    d="M2.45,9.18H.5V2.94H2.45Zm-1-7h0A1.08,1.08,0,0,1,.25,1.08,1.09,1.09,0,0,1,1.44,0a1.09,1.09,0,1,1,0,2.16Zm8.82,7H8V6c0-.84-.35-1.42-1.11-1.42a1.12,1.12,0,0,0-1.06.76,1.44,1.44,0,0,0,0,.51V9.18H3.64s0-5.72,0-6.24H5.83v1a2,2,0,0,1,1.95-1c1.38,0,2.47.9,2.47,2.83Z"
                                                    transform="translate(-0.25 0)"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <div className="footer-btm py-4 mt-5">
                        <Row>
                            <Col className="col-lg-6">
                                <div className="copyright">
                                    &copy; Copyright Reserved to <span className="site-name text-uppercase">Stoyc</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;