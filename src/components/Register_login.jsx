import React from 'react';
import Navbar from './Navbar';
import piclogin from '../pictures/piclogin.png';
import './Register_login.css'
import Footer from './Footer';

function Register_login() {
  return (
    <>
      <Navbar /><br /><br />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* Image Column */}
          <div className="col-md-6 text-center">
            <img src={piclogin} alt="piclogin" className="img-fluid" />
          </div>
          {/* Form Column */}
          <div className="col-md-6">
            <div className="form-container">
              <h2 className="form-title mb-4 text-center">Create an Account</h2>
              <form>
                <div className="form-input">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" />
                </div>

                <div className="form-input">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>

                <div className="form-input">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary form-btn">Sign Up</button>
                </div>
              </form>
              <div className="form-link mt-3">
                <p>Already have an account? <a href='/login'>Login here</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Register_login;
