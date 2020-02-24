import React from 'react';

export const SignUp = (props) => {
  return (
      <div className="sign-in-block text-left">
        

        <div className="form-group">
          <input type="text" className="form-control" placeholder="First name" />
        </div>

        <div className="form-group">
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
          <input type="email" className="form-control" placeholder="Email" />
        </div>

        <div className="form-group">
          <input type="password" className="form-control" placeholder="Password" />
        </div>

        <button type="submit" className="btn btn-primary btn-block login-form-btn">Sign Up</button>

        <hr></hr>
        <p className="forgot-password text-center">
          Already registered? <label className="signin-primary" onClick={props.toggle}>Log in.</label>
        </p>
      </div>
  );
}

export default SignUp;

