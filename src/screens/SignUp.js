import React, { useState } from "react";
import MainHeader from '../components/MainHeader'
import Input from '../components/Input'
import { Link } from "react-router";
import Button from "../components/Button";
import Images from "../assets/Images";
import { useNavigate } from "react-router-dom"; // Import useNavigate


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate(); // Initialize useNavigate

    const handleNext = () => {
        navigate("/signup-verify"); // Navigate to the "Next" screen
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <MainHeader display='none' />
            <div style={{ height: "100vh" }} className="row w-100 m-0">
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <div style={{ maxWidth: "90%", width: "100%", maxWidth: "525px" }} className="banner-content-container">
                        <div className='u-photo-section-container mb-5 mt-md-5 mt-sm-4 mt-4'>
                            <div className='lets-go-container text-center'>
                                <h1 style={{ fontSize: "24px" }}>Sign Up to get started!
                                </h1>
                            </div>

                            <div className="d-flex flex-wrap gap-3 mt-md-5 mt-sm-4 mt-4">
                                <Link className="d-flex align-items-center justify-content-center gap-3 google-login-conatiner text-decoration-none w-100">
                                    <img src={Images.google} alt="download" />
                                    <p className="mb-0">Continue With Google</p>
                                </Link>

                                <Link className="d-flex align-items-center justify-content-center gap-3 google-login-conatiner text-decoration-none w-100">
                                    <img src={Images.facebookLogin} alt="download" />
                                    <p className="mb-0">Continue With Facebook</p>
                                </Link>
                                <Link className="d-flex align-items-center justify-content-center gap-3 google-login-conatiner text-decoration-none w-100">
                                    <img src={Images.apple} alt="download" />
                                    <p className="mb-0">Continue With Apple</p>
                                </Link>
                            </div>

                            <div class="text-center mt-4 or-container">
                                <div class="or-line"></div>
                                <span class="or-text">OR</span>
                                <div class="or-line"></div>
                            </div>
                            <div className='d-flex gap-2 flex-column mt-4'>
                                <label className='audio-video-text-content' htmlFor="email">Phone Number or Email <span style={{ color: "red" }}>*</span></label>
                                <Input type="email" id="email" marginTop='0' placeholder='Enter Phone Number or Email' />
                                <p className="country-content-text mb-0">e.g. +1******1234 or user@example.com</p>
                            </div>

                            <div className='d-flex gap-2 flex-column mt-4'>
                                <label className='audio-video-text-content' htmlFor="password">
                                    Password <span style={{ color: "red" }}>*</span>
                                </label>
                                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        marginTop='0'
                                        placeholder='Enter your password'
                                    />
                                    <i
                                        className={`far ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                                        style={{
                                            position: 'absolute',
                                            right: '10px',
                                            cursor: 'pointer',
                                            zIndex: 1,
                                        }}
                                        onClick={togglePasswordVisibility}
                                    ></i>
                                </div>
                            </div>
                            <p className="country-content-text mb-0 mt-3"> <span style={{ color: "red" }}>*</span> Password must have at least one capital letter, one number and one special character and be at least 8 characters long  (!#$%*)</p>

                            <div className="mt-3">
                                <span className="country-content-text">By continuing you agree to our<Link className="forgot-password-text"> Terms of Service</Link> and  <Link className="forgot-password-text">Privacy Policy.</Link></span>
                            </div>

                            <Button onClick={handleNext} marginTop="23px" text="Sign Up" />
                            <div className="mt-3">
                                <span className="account-details-text-content">Already have an account?<Link to="/signin" className="forgot-password-text text-decoration-none "> Sign In</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SignUp