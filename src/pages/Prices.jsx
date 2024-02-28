import Title from '../components/Title'
import Meta from '../components/Meta'

const Prices = () => {
    // page content
    const pageTitle = 'where are the prices?'
    const pageDescription = 'Stoyc - where are the prices'

    return (
        <div>
            <Meta title={pageTitle} />
            <Title head={pageTitle} description={pageDescription} />
        </div>
    )
}

export default Prices