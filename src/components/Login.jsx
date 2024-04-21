import React from 'react';
import Navbar from './Navbar';
import loginImage from '../pictures/login-pic.png'; // Import your login image

function Login() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center vh-100">
                    <div className="col-md-5">
                        <img src={loginImage} alt="Login" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-5">
                        <div className="p-4 rounded shadow">
                            <h2 className="mb-4 text-center">Login</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" />
                                </div>

                                <div className="form-check mb-3">
                                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                </div>

                                <button type="submit" className="btn btn-primary w-100 mb-3">Sign In</button>
                            </form>
                            <div className="text-center">
                                <a href="/forgot-password">Forgot Password?</a>
                            </div>
                            <div className="mt-3 text-center">
                                Don't have an account? <a href="/Register_Login">Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
