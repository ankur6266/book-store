
import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center">Login Page</h1>
      </div>
        <div className="card mt-2 shadow" >
      
     <div className="row g-0 mt-5">
      <div className="col-md-6">
       <div className="row my-2 mx-2">
         <form action="" method="post">
        <div className="mb-3">
          <label for="emailInput" className="form-label">Email</label>
          <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="passwordInput" className="form-label">Password</label>
          <input type="password" className="form-control" id="passwordInput" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Remember me</label>
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary" >Login</button>
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
          <p className="text-center fs-6">Don't have an account<a  href="/signup"> Signup</a></p>
           <p className="text-center fs-6"><a  href="#"> Didn't receive confirmation instructions?</a></p>
        </dir>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Login;