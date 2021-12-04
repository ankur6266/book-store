import { useState } from "react";
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import '../Pages/login.css'

function Login(){
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    return(
        <div className='login'>

            <div className='login__container'>
                <h1>Log In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="email" placeholder="E-mail" required
                    value={email} onChange = {e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" placeholder="Password" required
                    value={password} onChange = {e => setPassword(e.target.value)} />
                    <button type='submit' className='login__signInButton' 
                    onClick = {() => history.push('/')}
                     >
                    Login
                    </button>
                </form>

                <p>
                    By Log-in you agree to the BOOKISH Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton'>
                   <Link to="/signup" className="signup_button">Create New Account. Sign Up</Link>
                </button>
            </div>
            <div className="extra"></div>
        </div>
        
    )
}
export default Login;