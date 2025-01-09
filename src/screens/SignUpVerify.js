import React, { useRef, useEffect } from 'react';
import MainHeader from '../components/MainHeader';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import RegisterFlowHeader from '../components/RegisterFlowHeader';

const SignUpVerify = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleNext = () => {
        navigate("/home"); // Navigate to the "Next" screen
    };
    const inputRefs = useRef([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleInput = (e, index) => {
        const value = e.target.value;
        if (value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleBackspace = (e, index) => {
        if (e.key === "Backspace" && index > 0 && e.target.value === "") {
            inputRefs.current[index - 1].focus(); 
        }
    };

    return (
        <>
        <RegisterFlowHeader/>
        <div className="row w-100 m-0" style={{ height: "100vh" }}>
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <div
                        className="banner-content-container"
                        style={{ maxWidth: "525px", width: "100%" }}
                    >
                        <div className="u-photo-section-container mb-5 mt-5">
                            <div className="lets-go-container text-center mt-md-0 mt-sm-3 mt-4">
                                <h1 style={{ fontSize: "24px" }}>Verify Code</h1>
                                <p className="signup-verfy-mail mt-4">
                                    Code sent to xy****@gmail.com and +91*******530
                                </p>
                                <p className="spam-folder-inform-text">
                                    If the code is not available, please check the spam folder.
                                </p>
                            </div>

                            {/* Timer Section */}
                            <div className="verify-time-content d-flex align-items-center justify-content-center">
                                <p>01:57</p> {/* Replace with a dynamic timer if needed */}
                            </div>

                            {/* OTP Input Section */}
                            <div className="otp-inputs mt-4 mb-4" style={{ display: 'flex', gap: '10px' }}>
                                {Array.from({ length: 6 }, (_, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength="1"
                                        className="otp-input"
                                        ref={(el) => (inputRefs.current[index] = el)}
                                        onInput={(e) => handleInput(e, index)}
                                        onKeyDown={(e) => handleBackspace(e, index)}
                                        style={{
                                            width: '16.6%',
                                            height: '52px',
                                            textAlign: 'center',
                                            fontSize: '18px',
                                            border: '1px solid #ccc',
                                            borderRadius: '5px',
                                        }}
                                        aria-label={`OTP digit ${index + 1}`} // Accessibility improvement
                                    />
                                ))}
                            </div>

                            {/* Submit Button */}
                            <Button onClick={handleNext} text="Submit" />

                            {/* Resend Code Section */}
                            <div className="d-flex align-items-center justify-content-center mt-3">
                                <span className="receive-code">
                                    Didn’t receive code?{" "}
                                    <Link className="resend-code-text">Resend</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUpVerify;
