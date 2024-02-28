import React from "react";
import { Link } from 'react-router-dom';
import { Container, Col, Row } from "react-bootstrap";
const Cta = () => {
   
    return (
        <>
            <section className="cta-2 bg-light overflow-hidden">

                <Container>
                    <div className="cta-block py-5">
                        <Row className="align-items-center ">
                            <Col className="col-lg-8">
                                <h2 className="mt-2 mb-4 mb-lg-0" data-aos="fade-right" data-aos-delay="100">Let's Get The Ball
                                    Rolling
                                </h2>
                                <span className="text-color" data-aos="fade-up-right" data-aos-delay="100">If you're interested
                                    in
                                    working together, drop a message with your
                                    social media
                                    handles and your website (if you have them), and we'll get back to you as soon as
                                    possible!
                                </span>
                            </Col>
                           
                            <Col className="col-lg-4">
                                <Link to="/Contact" className="btn btn-main mt-5 mt-md-0 btn-round-full float-lg-right" data-aos="fade-up-left">Let's
                                    connect</Link>
                               
                            </Col>

                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Cta;