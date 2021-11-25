import { BrowserRouter as Router,Link } from "react-router-dom";
import './header.css'
function Header1(){
   
    return(
        <header>
            <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" id="header-logo" href="#">BOOKISH</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">=</span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul className="navbar-nav mb-lg-0 ms-lg-5">
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    CATEGORY
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Web Dev</a></li>
                    <li><a className="dropdown-item" href="#">Data Science</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Robotics</a></li>
                </ul>
                </li>
                </ul>

                <ul className="navbar-nav mb-lg-0 ms-auto">
                <li className="nav-item leftHead">
                    <Link to="/signup" className="nav-link" href="#">SIGN UP</Link></li>
                <li className="nav-item ">
                <Link to="/login" className="nav-link">LOG IN</Link></li>
                <li className="nav-item ">
                <Link to="/contact" className="nav-link fw-normal" href="#">CONTACT US</Link></li>
                <li className="nav-item ">
                <Link to="/about" className="nav-link fw-normal" href="#">ABOUT US</Link></li>
                </ul>

                </div>
            </div>
            </nav>
        </header>
    )
}
export default Header1;