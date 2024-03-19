import { Helmet, HelmetProvider } from 'react-helmet-async'

const Meta = ({ title, description, keywords }) => {
    const existingMetaTags = document.querySelectorAll('meta[name="description"]');
    existingMetaTags.forEach((tag) => tag.remove());
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name="keywords" content={keywords} />



            </Helmet>

        </HelmetProvider>
      
    )
}

export default Meta