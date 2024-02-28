import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
    const existingMetaTags = document.querySelectorAll('meta[name="description"]');
    existingMetaTags.forEach((tag) => tag.remove());
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="keywords" content={keywords} />

           
          
        </Helmet>
    )
}

export default Meta