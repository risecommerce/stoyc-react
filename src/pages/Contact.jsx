import Title from '../components/Title'
import Meta from '../components/Meta'
import { Container, Row, Col } from 'react-bootstrap'
import Sanfrans from '../assets/images/home/SF.jpg'
import LosAngeles from '../assets/images/home/LA.jpg'
import London from '../assets/images/home/london.jpg'
import Paris from '../assets/images/home/Paris.jpg'
import ContactForm from '../components/ContactForm.js'
const Contact = () => {
    // page content
    const pageTitle = 'Get in Touch'
    const pageDescription = 'Stoyc - Contact page'
    const keywords = "digital marketing"
    return (
        <>
            <Meta title={pageTitle} description={pageDescription} keywords={keywords} />
           
            <Title head={pageTitle} description={pageDescription} />
            <section className="section contact-cities">
                <Container className="city-grid">
                    <div className="city">
                        <div className="imgwrap">

                            <img className="img-fluid" alt="San Francisco" src={Sanfrans} />

                                <h3>sf.</h3>
                        </div>

                    </div>

                    <div className="city">
                        <div className="imgwrap">

                            <img className="img-fluid" alt="LA" src={LosAngeles} />

                                <h3>LA.</h3>
                        </div>

                    </div>
                    <div className="city">
                        <div className="imgwrap">

                            <img className="img-fluid" alt="london" src={London} />

                                <h3>LDN.</h3>
                        </div>

                    </div>
                    <div className="city">
                        <div className="imgwrap">
                        

                            <img className="img-fluid" alt="paris" src={Paris} />

                                <h3>PARIS.</h3>
                        </div>

                    </div>
                </Container>
            </section>
            <section className="cta-2 bg-light ">
                <Container>
                    <div className="cta-block py-5">
                        <Row className="align-items-center ">
                            <Col className="col-lg-8 offset-md-2">
                                <h2 className="mt-2 mb-4 mb-lg-0">Let's Get The Ball Rolling</h2>
                                <span className="text-color">If you're interested in working together, drop a message with your
                                    social media
                                    handles and your website (if you have them), and we'll get back to you as soon as
                                    possible!</span>
                            </Col>


                        </Row>
                    </div>
                </Container>
            </section>
            <ContactForm />
        </>
    ) 
}

export default Contact