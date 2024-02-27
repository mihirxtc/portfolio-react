import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Error from "./pages/Error";

function App() {
    return (
        <>
            <nav className="navbar">
                <div className="header">
                    <Link className="logo" to={'/'}>Mihir</Link>
                    <div className="links">
                        <Link className="link" to={'/about'}>About</Link>
                        <Link className="link" to={'/contact'}>Contact</Link>
                        <Link className="link" to={'/portfolio'}>Portfolio</Link>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </>
    )
}

export default App;