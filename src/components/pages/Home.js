import {Container, Carousel, Row, Col} from "react-bootstrap";
import projectsDetails from "../../db/projects.json";
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import Header from "../Header";
import {encodeURI} from "../../util/urlEncDec";

function $1(props) {
    return (
        <>
            <Header title="Welcome to CDSS4PCP Lab" />
            <Container fluid="md">
                <Row>
                    <div className="col-lg-12">
                        <div className="bg-light p-4 rounded-lg">
                            <p>Our investigation will develop publicly accessible, reusable, upper-level clinical decision support
                                (CDS) ontology and machine-interpretable CDS rules for CDC-recommended immunization
                                schedules, which will save duplicate effort by multiple stakeholders of CDS rules and build a
                                critical foundation for achieving interoperability for individuals’ immunization records. Our
                                investigation also aims to enable primary care providers, especially in small primary care
                                practices, to manage and maintain CDS rules independently to keep CDS updated, useful, and
                                working to its full potential and to benefit the large population served by such practices.</p>

                            <h5>Latest Projects:</h5>

                            <div className="row">
                                <div className="col-md-12">
                                    <OwlCarousel options={{nav: true, rewind: true, autoplay: true, responsive: { 0: {items: 1}, 1000: { items: 2}, 1800: { items: 2}}, }} loop margin={10}>
                                        {
                                            Object.keys(projectsDetails).filter(projectName => projectsDetails[projectName].latest).map(projectName=>{
                                                return (
                                                    <div className="post-slide">
                                                        <div className="post-img">
                                                            <img style={{maxHeight: "300px"}} src={`assets/pages/home/${projectsDetails[projectName]["image"]}`} alt=""/>
                                                            <Link className="over-layer" to={`/project/${encodeURI(projectName)}`}></Link>
                                                        </div>
                                                        <div className="post-content">
                                                            <h3 className="post-title">
                                                                <Link to={`/project/${encodeURI(projectName)}`}>{projectName}</Link>
                                                            </h3>
                                                            <p className="post-description" style={{minHeight: "100px"}}>{projectsDetails[projectName]["short-description"]}</p>
                                                            <Link className="read-more" to={`/project/${encodeURI(projectName)}`}>Read More</Link>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </OwlCarousel>
                                </div>
                            </div>

                            <h5>Funders:</h5>
                            <img src="assets/logos/clemson.png" style={{height: "50px"}} className="img-fluid" alt="Responsive image"/>
                            <img src="assets/logos/NIGMS.png" style={{height: "150px"}} className="img-fluid" alt="Responsive image"/>
                            <hr className="my-4"/>
                            <p>We are working on the amazing projects and researches</p>
                            <p className="lead">
                                <Link className="btn btn-primary btn-sm" to="/projects">View all projects</Link>
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
                                    <p>Jing X, Indani A*, Hubig N, Min H, Gong Y, Cimino JJ, Sittig DF, Rennert L, Robinson D, Biondich P, Wright A, Nohr C, Law T, Faxvaag A, Gimbel R</p>
                                    <p>Methods Inf Med, 2022. PMID: 35613942 DOI: 10.1055/a-1862-0421</p>
                                </li>
                                <li>
                                    <a href="">Keyphrase identification with limited labeled dataset using deep active learning and domain adaptation</a>
                                    <p>Goli R*, Hubig N, Min H, Gong Y, Sittig DF, Robinson D, Biondich P, Wright A, Nøhr C, Law T, Faxvaag A, Gimbel R, Rennert L, Jing X</p>
                                    <p>AMIA 2022, Nov 5-9, 2022, Washington DC</p>
                                </li>
                                <li>
                                    <a href="">Keyphrase identification with limited labeled dataset using deep active learning and domain adaptation</a>
                                    <p>Goli R*, Hubig N, Renert L, Gimbel R, Jing X</p>
                                    <p>The 7th Annual Clemson Research Symposium, Clemson, SC, 2022-05-10</p>
                                </li>
                                <li>
                                    <a href="">A clinical decision support system (CDSS) ontology to facilitate portable vaccination CDSS rules: preliminary results</a>
                                    <p>Jing X, Hua M, Gong Y, Cimino JJ, Robinson D, Sittig D, Biondich P, Wright A, Nøhr C, Law T, Faxvaag A, Indani A, Hubig N, Gimbel R, Rennert L</p>
                                    <p>AMIA Annu Symp Proc. 2022 Feb 21;2021:1695</p>
                                </li>
                                <li>
                                    <a href="">A systematic review of ontology-based clinical decision support system rules: usage, management, and interoperability</a>
                                    <p>Jing X, Min H, Gong Y, Sittig DF, Biondich P, Robinson D, Law T, Wright A, Nøhr C, Faxvaag A, Rennert L, Hubig N, Gimbel R</p>
                                    <p>https://www.medrxiv.org/content/10.1101/2022.05.11.22274984v1. Preprint, Under review</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default $1;