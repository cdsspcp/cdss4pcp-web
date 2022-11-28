import {Container, Row, Col} from "react-bootstrap";
import Header from "../Header";
import { useLocation } from 'react-router-dom';
import projectsDetails from "../../db/projects.json";

function $1(props) {
    let location = useLocation().pathname.split("/");
    location = location[location.length -1];
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
                                        <h3>What we are doing?</h3>
                                        <p className="lead">{projectDetail["short-description"]}</p>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="card border-0 shadow">
                                                    <img className="img-responsive img-fluid" src="assets/team/XiaJ.jpg"/>
                                                        <div className="card-body text-center">
                                                            <h5 className="card-title mb-0">Team Lead</h5>
                                                            <a className="card-text text-black-50" target="_blank" href="https://www.clemson.edu/cbshs/about/profiles/index.html?userid=xjing">Dr. Xia Jing</a>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="col-md-4">
                        <h3>Project Description</h3>
                        <p>{projectDetail["short-description"]}</p>
                        <h3>Publications and Articles</h3>
                        <ul>
                            <li>
                                <a href="">A systematic approach to configuring MetaMap for optimal performance</a>
                                <p>Jing X, Indani A*, Hubig N, Min H, Gong Y, Cimino JJ, Sittig DF, Rennert L, Robinson
                                    D, Biondich P, Wright A, Nohr C, Law T, Faxvaag A, Gimbel R</p>
                                <p>Methods Inf Med, 2022. PMID: 35613942 DOI: 10.1055/a-1862-0421</p>
                            </li>
                            <li>
                                <a href="">Keyphrase identification with limited labeled dataset using deep active
                                    learning and domain adaptation</a>
                                <p>Goli R*, Hubig N, Min H, Gong Y, Sittig DF, Robinson D, Biondich P, Wright A, Nøhr C,
                                    Law T, Faxvaag A, Gimbel R, Rennert L, Jing X</p>
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
                                <p>Jing X, Hua M, Gong Y, Cimino JJ, Robinson D, Sittig D, Biondich P, Wright A, Nøhr C,
                                    Law T, Faxvaag A, Indani A, Hubig N, Gimbel R, Rennert L</p>
                                <p>AMIA Annu Symp Proc. 2022 Feb 21;2021:1695</p>
                            </li>
                            <li>
                                <a href="">A systematic review of ontology-based clinical decision support system rules:
                                    usage, management, and interoperability</a>
                                <p>Jing X, Min H, Gong Y, Sittig DF, Biondich P, Robinson D, Law T, Wright A, Nøhr C,
                                    Faxvaag A, Rennert L, Hubig N, Gimbel R</p>
                                <p>https://www.medrxiv.org/content/10.1101/2022.05.11.22274984v1. Preprint, Under
                                    review</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default $1;