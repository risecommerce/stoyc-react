import Title from '../components/Title'
import Meta from '../components/Meta'
import { Container, Row, Col } from 'react-bootstrap';

import Cta from '../components/Cta'
import Team from '../components/Teams';

const About = () => {
    // page content
    const pageTitle = 'Our Values & Culture'
    const pageDescription = 'Stoyc - Aboutus page'
    const keywords= 'digital marketing'
    return (
        <>
            
           
            <Meta title={pageTitle} description={pageDescription} keywords={keywords} />
            
            <Title head={pageTitle} description={pageDescription} />



            <section className="section company-intro mt-md-5 mt-0">
                <Container>
                    <Row>

                        <Col md={6} className="intro-part mb-5">
                            <span className="text-color font-weight-bold">01</span>
                            <h3 className="text-md mb-4 subheading">
                                Vision
                            </h3>

                            <p>
                                At STOYC, our journey began with the entrepreneurial spirit of our founders, Rafi
                                and Miles. Launching the company at 17 years old, their vision was more than just building a
                                business. But rather to understand and harness the transformative power of online digital
                                marketing.
                            </p>
                        </Col>
                        <Col md={6} className="intro-part mb-5">
                            <span className="text-color font-weight-bold">02</span>
                            <h3 className="text-md mb-4 subheading">
                                Mission
                            </h3>

                            <p>Our culture thrives on a unique blend of youthful dynamism and seasoned
                                digital expertise. We've grown, adapted, and continually redefined our strategies from our
                                early
                                days to the present. Yet, our mission has stayed constant at the heart of it all: to forge
                                deep,
                                impactful connections between brands and their audiences.</p>
                        </Col>
                        <Col md={6} className=" intro-part mb-5">
                            <span className="text-color font-weight-bold">03</span>
                            <h3 className="text-md mb-4 subheading">
                                Strategy
                            </h3>

                            <p>We transcend traditional social media marketing metrics. Where others see
                                success in likes and follow, we measure our achievements in authentic engagements and
                                meaningful interactions. This philosophy of genuine connection is not just a strategy; it's
                                the
                                essence of who we are and what sets us apart in the digital world.</p>
                        </Col>
                        <Col md={6} className=" intro-part">
                            <span className="text-color font-weight-bold">04</span>
                            <h3 className="text-md mb-4 subheading">
                                Expertise
                            </h3>

                            <p>STOYC was never destined to be just another social media and creative
                                agency in the crowd. It's a place where boundaries are pushed, norms are challenged, and a
                                new legacy in digital marketing is being created. Each year, as our team expands, so does
                                the
                                depth of our vision and expertise.
                            </p>
                        </Col>

                    </Row>

                </Container>

            </section>
            <section className="section1 rafiquotes bg-black1 text-white1">
                <Container className="container text-center">
                    <p>“Social media is more than just apps and platforms: It's a digital world reconstructing
                        the marketing space… for all businesses. Platforms like Instagram and TikTok have become
                        the best for connecting and engaging.”
                    </p>
                    <span>-Rafi Baig, Founder</span>
                </Container>

            </section>


            <section className="section team">

                <Container>
                    <Team />
                </Container>
            </section>



            <Cta />


        </>
    )
}

export default About