import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

import Header from "./components/Navigation";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import NotFound from "./components/pages/NotFound";
import Team from "./components/pages/Team";
import News from "./components/pages/News";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Project from "./components/pages/Project";

function App() {
    const pages = [
        {component: <Home/>, name: "Home", href:"/"},
        {component: <Projects/>, name: "Projects", href: "/projects"},
        {component: <Team/>, name: "Team", href: "/team"},
        {component: <News/>, name: "News", href: "/news"},
        {component: <Contact/>, name: "Jobs & Contact", href: "/contact"}
    ];
    return (
        <div className="App">
            <Header pages={pages}/>
            <Routes>
                {pages.map((page, index) => (<Route path={page.href} key={index} element={page.component}/>))}
                <Route path="/project/*" element={<Project/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
