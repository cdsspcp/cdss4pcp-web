import {Container} from "react-bootstrap";
import Header from "../Header";
import { useLocation } from 'react-router-dom';
import projectsDetails from "../../db/projects.json";
import {decodeURI} from "../../util/urlEncDec";
import QuickLinks from "../QuickLinks";

function $1(props) {
    let location = useLocation().pathname.split("/");
    location = decodeURI(location[location.length -1]);
    const projectDetail = projectsDetails[location];

    return (
        <>
            <Header title={location} />
            <Container>
                <div className="row">
                    <div className="col-md-8">
                        <img className="img-responsive img-fluid" src={`assets/pages/home/${projectDetail["image"]}`}/>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="jumbotron">
                                        <br/>
                                        <h3>What we are doing?</h3>
                                        <p>{projectDetail["long-description"]}</p>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="col-md-4">
                        <h3>Project Description</h3>
                        <p>{projectDetail["short-description"]}</p>
                        <h3>Publications and Articles</h3>
                        <QuickLinks/>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default $1;