import {Container, Carousel, Row, Col} from "react-bootstrap";

function $1(props) {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" style={{"height": "400px"}} src="assets/pages/home/carousel_1.jpg"  alt="First slide"/>
                    <Carousel.Caption>
                        <h5>Ontology addresses questions of how entities are grouped into categories and which of these entities exist on the most fundamental level.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" style={{"height": "400px"}} src="assets/pages/home/carousel_2.jpg"  alt="Second slide"/>
                    <Carousel.Caption>
                        <h5>Ontologists often try to determine what the categories or highest kinds are and how they form a system of categories that encompasses classification of all entities</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" style={{"height": "400px"}} src="assets/pages/home/carousel_3.jpg"  alt="First slide"/>
                    <Carousel.Caption>
                        <h5>Commonly proposed categories include substances, properties, relations, states of affairs and events. These categories are characterized by fundamental ontological concepts, including particularity and universality, abstractness and concreteness, or possibility and necessity</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container fluid="md">
                <Row>
                    <div className="col-lg-12">
                        <div className="bg-light p-5 rounded-lg m-3">
                            <h2 style={{textAlign: "center"}} className="display-5">Welcome to CDSS4PCP Project!</h2>
                            <p className="lead">Our investigation will develop publicly accessible, reusable, upper-level clinical decision support
                                (CDS) ontology and machine-interpretable CDS rules for CDC-recommended immunization
                                schedules, which will save duplicate effort by multiple stakeholders of CDS rules and build a
                                critical foundation for achieving interoperability for individuals’ immunization records. Our
                                investigation also aims to enable primary care providers, especially in small primary care
                                practices, to manage and maintain CDS rules independently to keep CDS updated, useful, and
                                working to its full potential and to benefit the large population served by such practices.</p>
                            <h5>Funders:</h5>
                            <img src="assets/logos/clemson.png" className="img-fluid" alt="Responsive image"/>
                            <img src="assets/logos/NIGMS.png" className="img-fluid" alt="Responsive image"/>
                            <hr className="my-4"/>
                            <p>We are working on the amazing exiting projects and researches</p>
                            <p className="lead">
                                <a className="btn btn-primary btn-sm" href="/projects" role="button">Learn more</a>
                            </p>
                        </div>
                    </div>
                </Row>

                <Row>
                    <div className="col-lg-12">
                        <div className="rounded-lg m-3">
                            <h2>Recent Publications and Articles</h2>
                            <ul>
                                <li>
                                    <a href="">A systematic approach to configuring MetaMap for optimal performance</a>
                                    <p>Jing X, Indani A*, Hubig N, Min H, Gong Y, Cimino JJ, Sittig DF, Rennert L,
                                        Robinson D, Biondich P, Wright A, Nohr C, Law T, Faxvaag A, Gimbel R</p>
                                    <p>Methods Inf Med, 2022. PMID: 35613942 DOI: 10.1055/a-1862-0421</p>
                                </li>
                                <li>
                                    <a href="">Keyphrase identification with limited labeled dataset using deep active
                                        learning and domain adaptation</a>
                                    <p>Goli R*, Hubig N, Min H, Gong Y, Sittig DF, Robinson D, Biondich P, Wright A,
                                        Nøhr C, Law T, Faxvaag A, Gimbel R, Rennert L, Jing X</p>
                                    <p>AMIA 2022, Nov 5-9, 2022, Washington DC</p>
                                </li>
                                <li>
                                    <a href="">Keyphrase identification with limited labeled dataset using deep active
                                        learning and domain adaptation</a>
                                    <p>Goli R*, Hubig N, Renert L, Gimbel R, Jing X</p>
                                    <p>The 7th Annual Clemson Research Symposium, Clemson, SC, 2022-05-10</p>
                                </li>
                                <li>
                                    <a href="">A clinical decision support system (CDSS) ontology to facilitate portable
                                        vaccination CDSS rules: preliminary results</a>
                                    <p>Jing X, Hua M, Gong Y, Cimino JJ, Robinson D, Sittig D, Biondich P, Wright A,
                                        Nøhr C, Law T, Faxvaag A, Indani A, Hubig N, Gimbel R, Rennert L</p>
                                    <p>AMIA Annu Symp Proc. 2022 Feb 21;2021:1695</p>
                                </li>
                                <li>
                                    <a href="">A systematic review of ontology-based clinical decision support system
                                        rules: usage, management, and interoperability</a>
                                    <p>Jing X, Min H, Gong Y, Sittig DF, Biondich P, Robinson D, Law T, Wright A, Nøhr
                                        C, Faxvaag A, Rennert L, Hubig N, Gimbel R</p>
                                    <p>https://www.medrxiv.org/content/10.1101/2022.05.11.22274984v1. Preprint, Under
                                        review</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Row>

                <Row>
                    <h3 className="page-header">Recent Projects</h3>
                    <Col xs={4}>
                        <a href="#"><img className="img-responsive portfolio-item img-fluid" src="assets/pages/home/carousel_2.jpg"/></a>
                        <h5 className="text-center"><a href="/projects/project-one">Automatic Identication of CDSS
                            Ontology Candidates</a></h5>
                        <p>We are leveraging deep learning and natural language processing techniques to automatically identify key phrases for the CDSS ontology we are constructing.</p>
                    </Col>
                    <Col xs={4}>
                        <a href="#"><img className="img-responsive portfolio-item img-fluid" src="assets/pages/home/carousel_2.jpg"/></a>
                        <h5 className="text-center"><a href="/projects/project-one">CDSS Ontology</a></h5>
                        <p>We are constructing a CDSS ontology aiming to improve the semantic interoperability of CDSS rules via the CDSS ontology.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default $1;