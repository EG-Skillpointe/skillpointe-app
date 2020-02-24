import React from 'react';

export const SingIn = (props) => {
  return (
      <div className="sign-in-block text-left">
        {/* <label className="heading">Log In</label> */}

        <div className="form-group">
          {/* <label>Email address</label> */}
          <input type="email" className="form-control" placeholder="Email" />
        </div>

        <div className="form-group">
          {/* <label>Password</label> */}
          <input type="password" className="form-control" placeholder="Password" />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox text-left">
            <input type="checkbox" className="custom-control-input remember-me-checkbox" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
          </div>
        </div>

        <button className="btn btn-primary btn-block login-form-btn" onClick={() => props.login(1)}>Log In</button>
        <button className="btn signup-primary btn-block login-form-btn" onClick={props.toggle}>Sign Up</button>
      </div>
  )
}

export default SingIn;

