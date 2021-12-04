import { useState } from "react";
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import '../Pages/signup.css'

function SignUp(){

    const history = useHistory();
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfpassword] = useState('');
console.log(password);
    return(
        <div className='signup'>
            

            <div className='signup__container'>
                <h1>Sign Up</h1>

                <form>
                    <h5>First Name</h5>
                    <input type="text" value={fname} placeholder="First Name"
                        onChange = {e => setFname(e.target.value)}
                    />
                    <h5>Last Name</h5>
                    <input type="text" value={lname} placeholder="Last Name"
                        onChange = {e => setLname(e.target.value)}
                    />
                    <h5>E-mail</h5>
                    <input type="email" value={email} placeholder="E-mail"
                        onChange = {e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input type="password" value={password} placeholder="Password" required 
                        onChange = {e => setPassword(e.target.value)}
                    />
                    <h5>Confirm Password</h5>
                    <input type="password" value={confPassword} placeholder="Password" required 
                        onChange = {e => setConfpassword(e.target.value)}
                    />
                    <button type='submit' className='signup__signInButton' 
                    onClick = {() => history.push('/') }>
                    Sign Up
                    </button>
                </form>

                <p>
                    By Sign Up you agree to the BOOKISH Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='signup__registerButton'>
                    <Link to="/login" className="login_button">Already Have Account? Login</Link>
                </button>
            </div>
        </div>
    )
}
export default SignUp;