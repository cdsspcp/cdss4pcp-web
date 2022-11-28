import {Container, Row, Col} from "react-bootstrap";
import Header from "../Header";
import {Link} from "react-router-dom";

function $1(props) {
    return (
        <>
            <Header title="Projects Overview" />
            <Container>
                <h6 style={{textAlign: "center"}}>We are exploring leveraging ontology to improve the interoperability of machine-readable CDSS rules, and the use case is in primary care settings.</h6>
                <br/>
                <Row>
                    <div className="col-md-6 portfolio-item">
                        <Link to="/projects/project-one">
                            <img className="img-responsive img-fluid" src="assets/pages/home/carousel_3.jpg"/>
                        </Link>
                        <h3 className="text-center"><Link to="/projects/project-one">Automatic Identication of CDSS Ontology Entity
                            Candidates</Link></h3>
                        <p>We are leveraging deep learning and natural language processing techniques to automatically identify key phrases for the CDSS ontology we are constructing.</p>
                    </div>

                    <div className="col-md-6 portfolio-item">
                        <Link to="/projects/project-two">
                            <img className="img-responsive img-fluid" src="assets/pages/home/carousel_3.jpg"/>
                        </Link>
                        <h3 className="text-center"><Link to="/projects/project-two">CDSS Ontology</Link></h3>
                        <p>We are constructing a CDSS ontology aiming to improve the semantic interoperability of CDSS rules via the CDSS ontology.</p>
                    </div>

                    <div className="col-md-6 portfolio-item">
                        <Link to="/projects/project-three">
                            <img className="img-responsive img-fluid" src="assets/pages/home/carousel_3.jpg"/>
                        </Link>
                        <h3 className="text-center"><Link to="/projects/project-three">CDSS Modules for OpenMRS & OpenEMR</Link></h3>
                        <p>We are developing an open and reusable CDSS module for OpenMRS and an enhanced CDSS module for OpenEMR as test beds for the interoperable CDSS rules.</p>
                    </div>

                    <div className="col-md-6 portfolio-item">
                        <Link to="/projects/project-four">
                            <img className="img-responsive img-fluid" src="assets/pages/home/carousel_3.jpg"/>
                        </Link>
                        <h3 className="text-center"><Link to="/projects/project-four">User Testing</Link></h3>
                        <p>We will invite primary care providers (i.e., general practitioners or family medicine physicians) to participate in a usability and utility test for the CDSS modules in OpenMRS and OpenEMR.</p>
                    </div>

                    <div className="col-md-6 portfolio-item">
                        <Link to="/projects/project-five">
                            <img className="img-responsive img-fluid" src="assets/pages/home/carousel_3.jpg"/>
                        </Link>
                        <h3 className="text-center"><Link to="/projects/project-five">CDSS Open Course</Link></h3>
                        <p>This open course focuses on CDSS design, development, use, maintenance, and evaluation. For Clemson and MUSC BDSI (<a href="https://www.cs.clemson.edu/bdsi/" target="_blank">https://www.cs.clemson.edu/bdsi/</a>) students, this course will be offered as 3 credit hours in the near future.</p>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default $1;