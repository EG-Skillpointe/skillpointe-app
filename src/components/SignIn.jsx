import React from 'react';
import { Link } from "react-router-dom";

export const SingIn = (props) => {
  return (
      <form>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input remember-me-checkbox" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block login-form-btn">Sign In</button>
        <button className="btn signup-primary btn-block login-form-btn" onClick={props.toggle}>Sign Up</button>
      </form>
  )
}

export default SingIn;

