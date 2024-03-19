import Title from '../components/Title'
import Meta from '../components/Meta'
import { Row, Col } from 'react-bootstrap'
import Cta from '../components/Cta'
const Services = () => {
    // page content
    const pageTitle = 'What We Do'
    const pageDescription = 'Stoyc - services'
    const keywords = 'digital marketing'
    return (
        <>
            <Meta title={pageTitle} description={pageDescription} keywords={keywords} />
            <Title head={pageTitle} description={pageDescription} />



            <section className="section service-2">
                <div className="theme-container">
                    <Row>

                        <Col  lg={3} md={6} sm={6}>
                            <div className="service-info ">

                                <h3 className="mb-4 mt-2 ">
                                    Social Media
                                    <br />Management and Optimization
                                </h3>
                                <p>Elevate your Instagram presence with our
                                    expertly crafted strategies for superior engagement and visibility</p>
                            </div>
                        </Col>



                        <Col  lg={3} md={6} sm={6}>

                            <div className="service-info ">

                                <h3 className="mb-4 mt-2 ">
                                    Digital <br />Marketing
                                </h3>
                                <p>Elevate your brands digital awareness through
                                    advertising campaigns on Google, Facebook,
                                    Instagram, and all of the major platforms.</p>

                            </div>


                        </Col>



                        <Col  lg={3} md={6} sm={6}>
                            <div className="service-info">

                                <h3 className="mb-4 mt-2 ">
                                    Branding and <br />Identity
                                </h3>
                                <p>Comprehensive branding solutions from logo creation
                                    to overall brand design and theme development, shaping your brand's complete identity
                                </p>
                            </div>
                        </Col>






                        <Col  lg={3} md={6} sm={6}>
                            <div className="service-info">

                                <h3 className="mb-4 mt-2 ">
                                    Website Design <br />and Development
                                </h3>
                                <p>Create a compelling online presence with our custom, user-centric website
                                    designs.</p>
                            </div>
                        </Col>

                        <Col  lg={3} md={6} sm={6}>
                            <div className="service-info mb-5 mb-lg-0">

                                <h3 className="mb-4 mt-2 ">
                                    Content <br />Creation
                                </h3>
                                <p>Engage your audience with high-quality, original content designed to
                                    resonate and drive engagement.</p>

                            </div>
                        </Col>



                        <Col  lg={3} md={6} sm={6}>
                            <div className="service-info">

                                <h3 className="mb-4 mt-2 ">
                                    Brand Strategy <br />for Start-Ups
                                </h3>
                                <p>Forge a powerful brand identity with our comprehensive
                                    strategy services, tailored to launch start-ups with a cohesive and compelling brand
                                    narrative.</p>
                            </div>
                        </Col>
                        <Col  lg={3} md={6} sm={6}>
                            <div className="service-info mb-5 mb-lg-0">

                                <h3 className="mb-4 mt-2 ">
                                    Search Engine <br />Optimization (SEO)
                                </h3>
                                <p>On-Page SEO: Enhancing your site's content for improved search engine rankings.
                                    Off-Page SEO: Building your site's authority through external strategies.
                                    Technical SEO: Optimizing the technical aspects of your website for peak search engine
                                    performance.</p>

                            </div>
                        </Col>
                        <Col  lg={3} md={6} sm={6}>
                            <div className="service-info mb-5 mb-lg-0">

                                <h3 className="mb-4 mt-2 ">
                                    Local Independent <br />Business Marketing
                                </h3>
                                <p>Tailored marketing strategies for local, family-owned
                                    businesses, encompassing all the above along with targeted promotions on platforms like
                                    Nextdoor, Yelp, and Google Business to enhance local visibility and community
                                    engagement.</p>

                            </div>
                        </Col>
                    </Row>

                </div>
            </section>
            <Cta/>
        </>
    )
}

export default Services