import {Container, Row, Col} from "react-bootstrap";
import Header from "../Header";
import {Link} from "react-router-dom";
import projectsDetails from "../../db/projects.json";

function $1(props) {
    return (
        <>
            <Header title="Projects Overview" />
            <Container>
                <h6 style={{textAlign: "center"}}>We are exploring leveraging ontology to improve the interoperability of machine-readable CDSS rules, and the use case is in primary care settings.</h6>
                <br/>
                <Row>
                    {
                        Object.keys(projectsDetails).map(projectName => {
                            return (
                                <div className="col-md-6 portfolio-item">
                                    <Link to={`/project/${projectName}`}>
                                        <img className="img-responsive img-fluid" src={`assets/pages/home/${projectsDetails[projectName]["image"]}`}/>
                                    </Link>
                                    <h3 className="text-center"><Link to={`/project/${projectName}`}>{projectName}</Link></h3>
                                    <p>{projectsDetails[projectName]["short-description"]}</p>
                                </div>
                            );
                        })
                    }
                </Row>
            </Container>
        </>
    );
}

export default $1;