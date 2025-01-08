import React, { useState } from "react";
import MainHeader from '../components/MainHeader'
import Input from '../components/Input'

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <MainHeader display='none' />
            <div style={{ maxWidth: "525px" }} className="banner-content-container">
                <div className='u-photo-section-container mb-5'>
                    <div className='lets-go-container text-center'>
                        <h1>Sign Up to get started!
                        </h1>
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
                </div>
            </div>
        </>

    )
}

export default SignUp