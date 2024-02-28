import { Row } from 'react-bootstrap'

const Title = ({ head, description }) => {
    return (
        <>
            <section className="page-title bg-1">
                <div className="theme-container">
                    <Row >
                        

               
                        <div className="col-md-12">
                            <div className="block text-center">

                                <h1 className="text-uppercase mb-2 text-lg">{head}</h1>


                            </div>
                        </div>
                    </Row>
                </div>
            </section>
           
        </>
    )
}

export default Title