import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function $1(props) {
    return (
        <>
            <br/>
            <footer className="nb-footer">
                <Container>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="about">
                                <img src="assets/logos/clemson.png" className="img-responsive img-fluid" alt=""/>
                                <p>If you have a disability and are having trouble accessing information on this website or need materials in an alternate format, <Link to="/contact" style={{color: "white"}}>contact us</Link> for assistance. </p>
                            </div>
                        </div>
                    </div>
                </Container>
                <section className="copyright text-center">
                    <div className="container">
                        <div className="row">
                            <p>Copyright © 2022. CDSS4PCP</p>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );
}

export default $1;