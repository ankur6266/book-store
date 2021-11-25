import React from "react"
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import Header1 from "./components/header 1";
import Header2 from "./components/header 2";
import Home from "./components/Pages/home.js";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Login from "./components/Pages/login";
import SignUp from "./components/Pages/signup";
import Contact from "./components/Pages/contact-us";
import BookSection from "./components/book-section";
import About from "./components/Pages/about-us";


function App(){
    // console.log(window.innerHeight);
    return(
        <div>
            
                    <Route exact path="/">
                        <Header1 />
                        <Home/>
                        <BookSection />
                    </Route>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/signup">
                        <SignUp/>
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/about">
                        <Header1 />
                        <About />
                    </Route>
        </div>
    )
}

export default App;