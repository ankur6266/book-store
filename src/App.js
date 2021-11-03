import React from "react"
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import Header1 from "./components/header 1";
import Header2 from "./components/header 2";
import Home from "./components/home.js";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Login from "./components/login";
import SignUp from "./components/signup";

function App(){
    console.log(window.innerHeight);
    return(
        <div>
            
                    <Route exact path="/">
                        <Header1 />
                        <Home/>
                    </Route>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/signup">
                        <SignUp/>
                    </Route>
        </div>
    )
}

export default App;