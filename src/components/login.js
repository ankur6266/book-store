import {Link} from "react-router-dom"
import './login.css'
import logo from '../logo.png'
function Login(){
    return(
        <div className='login'>
            <Link to='/' className="login_head">
                <h2>BOOKISH</h2>
            </Link>

            <div className='login__container'>
                <h1>Log In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="email" placeholder="E-mail"/>
                    <h5>Password</h5>
                    <input type="password" placeholder="Password" required />
                    <button type='submit' className='login__signInButton'>Login</button>
                </form>

                <p>
                    By Log-in you agree to the BOOKISH Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton'>
                    <Link to="/signup" className="signup_button">Create New Account. Sign Up</Link>
                </button>
            </div>
        </div>
    )
}
export default Login;