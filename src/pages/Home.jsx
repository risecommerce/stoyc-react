import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Discovery from '../assets/images/home/discovery.webp'
import ClintSlider from '../components/ClientSlider'
import Testimonial from '../components/Testimonial'
import Cta from "../components/Cta";
import Clock from "../components/Clock";
import { ArrowRightCircle } from 'react-feather'
import LoopingAnimation from '../components/LoopingAnimation'
import Partcls from '../components/Particlas'
import Meta from '../components/Meta'


const Home = () => {
    // page content
    const pageTitle = 'Stoyc Home Page'
    const pageDescription = 'Stoyc - Digital Marketing Company'
    const keywords = 'digital marketing'
    return (
           

        <>
            <Meta title={pageTitle} description={pageDescription} keywords={keywords} />
            <section className="banner" id="animated-bg">
                <LoopingAnimation />
                <Partcls />
                <div className="theme-container">
                    <Row className="h100vh align-content-center">

                        <Col className="col-lg-9 col-12">
                            <div className="block text-left">
                                <h1 className="mb-3 mt-3 fadede-qoutes" data-aos="fade-right">
                                    Social Media Is Not Just A Megaphone, It's A Tool For Building Meaningful Relationships
                                </h1>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="mouse-click text-center">
                    <div className="text-center position-absolute jump-link w-100">
                        <div className="d-flex justify-content-center align-items-center mx-auto">
                            <a href="#about" className="d-block section-link box-shadow-medium-bottom bg-white" rel="noreferrer">
                                <i className="ti-mouse icon-very-medium lh-0px"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="position-relative overflow-hidden py-5 mt-5 section-dark-highlight" id="about">
                <Container className="text-center">
                    <Row className="align-items-center">

                        <Col className="col-md-12">
                            <h2 className="text-uppercase about-head text-black aos-init aos-animate" data-aos="fade-up" data-aos-delay={100}>Who We Are</h2>
                            <div className="intro-para text-center font-weight-bold section">
                                <p className="mb-2" data-aos="fade-down" data-aos-delay={100}>
                                    At STOYC, a California-based digital marketing agency, we harness this potential to elevate brands in the digital world. Our founding principles, rooted in the passion of two entrepreneurial spirits, focus on driving business growth through creative and targeted online strategies. Utilizing a blend of expertly crafted high-quality content creation, strategic paid advertising, and distinctive web design, we not only connect our clients with their desired audience but also foster lasting relationships and brand loyalty.
                                </p>
                                <p className="mb-5" data-aos="fade-down" data-aos-delay={100}>
                                    Our approach is designed to turn every digital interaction into an opportunity for growth, ensuring that your brand doesn’t just speak to your audience, but engages with them on a deeper level. After all, marketing is about building relationships, not just making sales. It's creating a connection with your audience that goes beyond the transaction.
                                </p>
                                <a href="https://calendly.com/stoyc" target="_blank" rel="noreferrer">
                                    <img src={Discovery} data-aos="fade-up" alt="discovery" data-aos-delay={100} className="cta-ballon img-fluid" width="400" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="out-clients overflow-hidden pb-5">
                <ClintSlider />
            </section>

            <section className="bg-black overflow-hidden big-section py-5">
                <Container>
                    <Row className="mb-5 mt-5 sm-mb-50px">
                        <Col className="col-12 col-xl-9 col-lg-12">
                            <h2 className="text-white fw-500 pb-5 mb-0 alt-font" data-aos="fade-right" data-aos-delay={100}>What We're Known For</h2>
                        </Col>
                    </Row>
                    <Row className=" align-items-center mb-5 sm-mb-30px">
                        <Col className="col-lg-6 animated-content">
                            <div className="tiled-text text-white">
                                <div className="tilted1"><span className="tiled" data-aos="zoom-in-up" data-aos-delay={100}>Social Media Optimization</span></div>
                                <div className="tilted2"><span className="tiled " data-aos="zoom-in-down" data-aos-delay={150}>Social Media Management</span></div>
                                <div className="tilted3"><span className="tiled " data-aos="zoom-in-up" data-aos-delay={150}>Brand Development</span></div>
                                <div className="tilted4"><span className="tiled " data-aos="zoom-in-down" data-aos-delay={150}>Logo Design</span></div>
                                <div className="tilted5"><span className="tiled " data-aos="zoom-in-up" data-aos-delay={150}>Search Engine Optimization</span></div>
                                <div className="tilted6"><span className="tiled " data-aos="zoom-in-down" data-aos-delay={150}>Website Design</span></div>
                                <div className="tilted7"><span className="tiled " data-aos="zoom-in-up" data-aos-delay={150}>Content Creation</span></div>
                                <div className="tilted8"><span className="tiled " data-aos="zoom-in-down" data-aos-delay={150}>Brand Strategy</span></div>
                                <div className="tilted9"><span className="tiled " data-aos="zoom-in-up" data-aos-delay={150}>Business Marketing</span></div>
                            </div>
                        </Col>
                        <Col className="col-lg-6 animated-content">
                            <Row className="py-4 text-white align-items-center hover-row border-top border-bottom border-color-dark-gray position-relative" data-aos="fade-up" data-aos-delay={100}>
                                <Col className="col-md-1 col-3 text-start text-md-center sm-mb-20px">
                                    <span className="fs-18 alt-font text-white">01</span>
                                </Col>
                                <Col className="col-md-11 col-9 d-flex align-items-center justify-content-between sm-mb-20px">
                                    <span className="text-white fw-500 fs-30 alt-font font-weight-bold text-uppercase">SOCIAL MEDIA MARKETING</span>
                                    <ArrowRightCircle />
                                   
                                </Col>
                            </Row>
                            <Row className="py-4 text-white align-items-center hover-row border-top border-bottom border-color-dark-gray position-relative" data-aos="fade-up" data-aos-delay={100}>
                                <Col className="col-md-1 col-3 text-start text-md-center sm-mb-20px">
                                    <span className="fs-18 alt-font text-white">02</span>
                                </Col>
                                <Col className="col-md-11 col-9 d-flex align-items-center justify-content-between sm-mb-20px">
                                    <span className="text-white fw-500 fs-30 alt-font font-weight-bold text-uppercase">ADVERTISING</span>
                                    <ArrowRightCircle />
                                </Col>
                            </Row>
                            <Row className="py-4 text-white align-items-center hover-row border-top border-bottom border-color-dark-gray position-relative" data-aos="fade-up" data-aos-delay={100}>
                                <Col className="col-md-1 col-3 text-start text-md-center sm-mb-20px">
                                    <span className="fs-18 alt-font text-white">03</span>
                                </Col>
                                <Col className="col-md-11 col-9 d-flex align-items-center justify-content-between sm-mb-20px">
                                    <span className="text-white fw-500 fs-30 alt-font font-weight-bold text-uppercase">CONTENT CREATION</span>
                                    <ArrowRightCircle />
                                </Col>
                            </Row>
                            <Row className="py-4 text-white align-items-center hover-row border-top border-bottom border-color-dark-gray position-relative" data-aos="fade-up" data-aos-delay={100}>
                                <Col className="col-md-1 col-3 text-start text-md-center sm-mb-20px">
                                    <span className="fs-18 alt-font text-white">04</span>
                                </Col>
                                <Col className="col-md-11 col-9 d-flex align-items-center justify-content-between sm-mb-20px">
                                    <span className="text-white fw-500 fs-30 alt-font font-weight-bold text-uppercase">WEBSITE  DEVELOPMENT</span>
                                    <ArrowRightCircle />
                                </Col>
                            </Row>
                            <Row className="py-4 text-white align-items-center hover-row border-top border-bottom border-color-dark-gray position-relative" data-aos="fade-up" data-aos-delay={100}>
                                <Col className="col-md-1 col-3 text-start text-md-center sm-mb-20px">
                                    <span className="fs-18 alt-font text-white">05</span>
                                </Col>
                                <Col className="col-md-11 col-9 d-flex align-items-center justify-content-between sm-mb-20px">
                                    <span className="text-white fw-500 fs-30 alt-font font-weight-bold text-uppercase">BRAND STRATEGY</span>
                                    <ArrowRightCircle />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="text-white justify-content-center mb-5" data-aos="fade-up" data-aos-delay={100}>
                        <div className="col-lg-12 col-md-10 text-center">
                            <div className="text-white fs-20">Save your precious time and effort spent for finding a solution.  <Link to="/contact" className="text-white text-decoration-line-bottom">Contact us now</Link></div>
                        </div>
                    </Row>
                </Container>
            </section>

            <section className="section testimonial overflow-hidden">

                <Container>
                    <Row>
                        <Col className="col-lg-6 offset-lg-3">
                            <div className="heading text-center">
                                <h2 className="mb-4" data-aos="fade-left" data-aos-delay={100}>What they say about us</h2>

                            </div>
                        </Col>

                        <Col className="col-lg-12 testimonial-wrap">
                            <Testimonial />

                        </Col>


                    </Row>
                </Container>
            </section>
            <section className="position-relative overflow-hidden bg-black  py-5 video-banner ">

                <div className="clocks-section">


                    <Clock />
                </div>





            </section >

            <Cta />
        </>
    )
}

export default Home