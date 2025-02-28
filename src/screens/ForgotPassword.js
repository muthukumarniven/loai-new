import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router";
import Button from "../components/Button";
import Input from '../components/Input'
import { useNavigate } from "react-router-dom";
import RegisterFlowHeader from '../components/RegisterFlowHeader';
import {toast} from 'react-toastify'


const ForgotPassword = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/forgot-verification");
        toast.success("Code send Succesfully")
    };



    return (
        <>

        <RegisterFlowHeader/>

            {/* <MainHeader display='none' /> */}
            <div style={{ height: "100vh" }} className="row w-100 m-0">
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <div style={{ maxWidth: "90%", width: "100%", maxWidth: "525px" }} className="banner-content-container">
                    <div style={{borderRadius:"13px", boxShadow:"0 4px 25px 0 rgba(0,0,0,.1)"}} className='u-photo-section-container mb-5 mt-5'>
                    <div className='lets-go-container text-center mt-md-0 mt-sm-3 mt-4'>
                                <h1 style={{ fontSize: "24px" }}>Forgot Password
                                </h1>
                            </div>

                            <div className='d-flex gap-2 flex-column mt-4'>
                                <label className='audio-video-text-content' htmlFor="email">Phone Number or Email <span style={{ color: "red" }}>*</span></label>
                                <Input type="email" id="email" marginTop='0' placeholder='Enter Phone Number or Email' />
                                <p className="country-content-text mb-0">e.g. +1******1234 or user@example.com</p>
                            </div>
                            <Button onClick={handleNext} marginTop="23px" text="Submit" />
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

export default ForgotPassword