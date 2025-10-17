import {Container, Carousel, Row, Col} from "react-bootstrap";
import projectsDetails from "../../db/projects.json";
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import Header from "../Header";
import {encodeURI} from "../../util/urlEncDec";
import QuickLinks from "../QuickLinks";
import FeedbackBox from "../FeedbackBox";

function $1(props) {
    return (
        <>
            <Header title="Welcome to CDSS4PCP Project" />
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
                                working to its full potential and to benefit the large population served by such practices. 
                                All the codes related to this project can be found through the GitHub link: <a href="https://github.com/CDSS4PCP" target="_blank" rel="noopener noreferrer">
                                    https://github.com/CDSS4PCP</a>. 
    </p>

                            <h5>Latest Projects:</h5>

                            <div className="row">
                                <div className="col-md-12">
                                    <OwlCarousel options={{autoplayHoverPause: true, nav: true, rewind: true, autoplay: true, responsive: { 0: {items: 1}, 1000: { items: 2}, 1800: { items: 2}}, }} loop margin={10}>
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
                            <a href="https://nigms.nih.gov/" target="_blank"><img src="assets/logos/NIGMS.png" style={{height: "150px"}} className="img-fluid" alt="Responsive image"/></a>
                            <a href="https://www.clemson.edu/" target="_blank"><img src="assets/logos/clemson.png" style={{height: "50px"}} className="img-fluid" alt="Responsive image"/></a>
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
                            <QuickLinks/>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default $1;
