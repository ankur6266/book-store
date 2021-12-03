import {Link} from "react-router-dom"
import '../Pages/signup.css'

function SignUp(){
    return(
        <div className='signup'>
            

            <div className='signup__container'>
                <h1>Sign Up</h1>

                <form>
                    <h5>First Name</h5>
                    <input type="text" placeholder="First Name"/>
                    <h5>Last Name</h5>
                    <input type="text" placeholder="Last Name"/>
                    <h5>E-mail</h5>
                    <input type="email" placeholder="E-mail"/>
                    <h5>Password</h5>
                    <input type="password" placeholder="Password" required />
                    <h5>Confirm Password</h5>
                    <input type="password" placeholder="Password" required />
                    <button type='submit' className='signup__signInButton' onClick="#">
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