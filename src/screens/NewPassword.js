import React, { useState } from "react";
import Button from "../components/Button";
import Images from "../assets/Images";
import Input from '../components/Input'
import { Link } from "react-router";
import RegisterFlowHeader from '../components/RegisterFlowHeader';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'


const NewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/signin");
        toast.success("Password Changed")

    };
    return (
        <>
            <RegisterFlowHeader />
            <div style={{ height: "100vh" }} className="row w-100 m-0">
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <div style={{ maxWidth: "525px" }} className="banner-content-container">
                        <div style={{ borderRadius: "13px", boxShadow: "0 4px 25px 0 rgba(0,0,0,.1)" }} className='u-photo-section-container mb-5 mt-5'>
                            <div className='lets-go-container text-center mt-md-0 mt-sm-3 mt-4'>
                                <h1 style={{ fontSize: "24px" }}>Create a New Password
                                </h1>
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
                                        placeholder='Enter Password'
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
                            <div className='d-flex gap-2 flex-column mt-4'>
                                <label className='audio-video-text-content' htmlFor="password">
                                    Confirm Password <span style={{ color: "red" }}>*</span>
                                </label>
                                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                    <Input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id="password"
                                        marginTop='0'
                                        placeholder='Enter Confirm Password'
                                    />
                                    <i
                                        className={`far ${showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                                        style={{
                                            position: 'absolute',
                                            right: '10px',
                                            cursor: 'pointer',
                                            zIndex: 1,
                                        }}
                                        onClick={toggleConfirmPasswordVisibility}
                                    ></i>
                                </div>
                            </div>
                            <p className="country-content-text mb-0 mt-3"> <span style={{ color: "red" }}>*</span>  Password must have at least one capital letter, one number and one special character and be at least 8 characters long  (!#$%*)</p>

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

export default NewPassword