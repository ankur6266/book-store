import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Signup = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    username: "",
    email: "",  
    password: ""
  });

  const { username, email, password } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3001/user", user);
    history.push("/");
  };
  

  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center">Sign Page</h1>
      </div>
        <div className="card mt-2 shadow" >
      
     <div className="row g-0 mt-5">
      <div className="col-md-6">
       <div className="row my-2 mx-2">
         <form  onSubmit={e => onSubmit(e)} >
         <div className="mb-3">
  
             
              <label for="usernameInput" className="form-label">Username</label>
              <input type="text" className="form-control" id="usernameInput"    name="username"
              value={username}
              onChange={e => onInputChange(e)} />
            
              
         
         </div>
        <div className="mb-3">
          <label for="emailInput" className="form-label">Email</label>
          <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp"  name="email"
              value={email}
              onChange={e => onInputChange(e)} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="passwordInput" className="form-label">Password</label>
          <input type="password" className="form-control" id="passwordInput"  name="password"
              value={password}
              onChange={e => onInputChange(e)} />
        </div>
        <div className="mb-3">
          <label for="passwordInputConfirm" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="passwordInputConfirm"  name="password"
              value={password}
              onChange={e => onInputChange(e)}/>
        </div>
        
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary" >Sign Up</button>
        </div>
      </form>

       </div>
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h3 className="card-title">Create account with social links</h3>
        <div className="row mt-5">
          <div className="d-grid gap-2">
            <a className="btn btn-danger" href="#" role="button"><i className="bi bi-google"></i> Login with Google</a>
          </div>
        </div>
        <div className="row mt-2">
          <div className="d-grid gap-2">
            <a className="btn btn-dark" href="#" role="button"><i className="bi bi-github"></i> Login with Github</a>


          </div>
        </div>
        <div className="row mt-2">
         <p className="text-center fs-4">OR</p>
        </div>
        <dir className="row">
          <p className="text-center fs-6">Already have an account <a  href="/login"> Login</a></p>
           <p className="text-center fs-6"><a  href="#"> Didn't receive confirmation instructions?</a></p>
        </dir>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Signup;