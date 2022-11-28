import {Link, useResolvedPath, useMatch, BrowserRouter} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

function $1({pages}) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {
                        pages.map((page, index)=> (<HeaderLink page={page} index={index}/>))
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

function HeaderLink({page, index}) {
    const is_active = useMatch({path: useResolvedPath(page.href).pathname, end: true});
    return (
        <Link className={`nav-item nav-link ${is_active ? " active" : ""}`} to={page.href} key={index}>{page.name}</Link>
    )
}

export default $1;