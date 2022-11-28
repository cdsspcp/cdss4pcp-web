import teamData from "../../db/teams.json";
import {Container, Row, Badge} from "react-bootstrap";
import Header from "../Header";
import * as Icon from 'react-bootstrap-icons';

function $1(props) {
    return (
        <>
            <Header title="Meet the Team" />
            <Container>
                {
                    teamData.map(team => {
                        return (
                                <Row>
                                    <Row>
                                        <div className="rounded-lg bg-gradient mt-3 mb-2">
                                            <h4>{team.description}</h4>
                                        </div>
                                    </Row>
                                    <Row>
                                        {
                                            team.members.map(member=> {
                                                return (
                                                    <div className="col-xl-4 col-md-6 mb-4">
                                                        <div className="card border-0 shadow">
                                                            <div style={{width: "80%", margin: "auto"}}>
                                                                <img src={`assets/team/${member.image}`} className="card-img-top fade-in"/>
                                                            </div>
                                                            <div className="card-body" style={{borderBottom: "3px solid #0273f5"}}>
                                                                <h5 className="card-text text-black-50">{member.name} <Badge pill bg="dark" style={{opacity: "60%"}}>{member.role}</Badge></h5>
                                                                <small className="card-text text-black-50" style={{display: "inline-block", minHeight: "40px"}}>{member.intro}</small>
                                                                <div className="text-center mt-3">
                                                                    <a href={`mailto:${member.contact.mail}`} className={!member.contact.mail ? "disabled" : ""}><Icon.Envelope className="m-1" color="#ca473a" size={20}/></a>
                                                                    <a href={member.contact.facebook} target="_blank" className={!member.contact.facebook ? "disabled" : ""}><Icon.Facebook className="m-1" color="#4267B2" size={20}/></a>
                                                                    <a href={member.contact.github} target="_blank" className={!member.contact.github ? "disabled" : ""}><Icon.Github className="m-1" color="#000000" size={20}/></a>
                                                                    <a href={member.contact.website} target="_blank" className={!member.contact.website ? "disabled" : ""}><Icon.Globe className="m-1" color="#ee5f2d" size={20}/></a>
                                                                    <a href={member.contact.linkedin} target="_blank" className={!member.contact.linkedin ? "disabled" : ""}><Icon.Linkedin className="m-1" color="#4267B2" size={20}/></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Row>
                                </Row>
                            )
                    })
                }
            </Container>
        </>
    );
}

export default $1;