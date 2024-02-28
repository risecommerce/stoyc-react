import Title from '../components/Title'
import Meta from '../components/Meta'
import { Container } from 'react-bootstrap'

const Prices = () => {
    // page content
    const pageTitle = 'where are the prices?'
    const pageDescription = 'Stoyc - where are the prices'
    const keywords = 'digital marketing'
    return (
        <>
            <Meta title={pageTitle} description={pageDescription} keywords={keywords} />
            <Title head={pageTitle} description={pageDescription} />
            <section className="service-extra section mb-5">
                <Container>

                    <p>At STOYC, we believe in providing customized solutions tailored to
                        each client's unique requirements. This personalized approach also extends to our pricing
                        structure, which is why you won't find standardized prices listed on our website. We
                        understand that each business has its distinct goals, challenges, and market conditions.
                        Consequently, we engage closely with our clients to understand their specific needs and
                        objectives. This allows us to craft a customized strategy and pricing plan that aligns with their
                        vision and budget. This flexible, client-centric approach ensures we deliver the most value and
                        impactful results, rather than offering a one-size-fits-all solution.</p>

                </Container>
            </section>
        </>
    )
}

export default Prices