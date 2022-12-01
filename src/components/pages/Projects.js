import {Container, Row, Col} from "react-bootstrap";
import Header from "../Header";
import {Link} from "react-router-dom";
import projectsDetails from "../../db/projects.json";
import {encodeURI} from "../../util/urlEncDec";

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
                                <div className="col-md-6">
                                    <Link to={`/project/${encodeURI(projectName)}`}>
                                        <img style={{"max-height": "320px", "width": "100%"}} className="img-responsive img-fluid" src={`assets/pages/home/${projectsDetails[projectName]["image"]}`}/>
                                    </Link>
                                    <br/>
                                    <br/>
                                    <h5 className="text-center"><Link to={`/project/${encodeURI(projectName)}`}>{projectName}</Link></h5>
                                    <p>{projectsDetails[projectName]["short-description"]}</p>
                                    <br/>
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