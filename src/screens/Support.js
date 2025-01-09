import React, { useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import SubHeader from '../components/SubHeader';
import Images from '../assets/Images'
import Input from '../components/Input'
import Button from "../components/Button";
import { useNavigate } from "react-router-dom"; // Import useNavigate



const Support = () => {
    const navigate = useNavigate(); // Initialize useNavigate



    const [fullName, setFullName] = useState('Robert');
    const [mailValue, setMailValue] = useState('rrmuthukumar007@gmail.com')
    const [countryCode, setCountryCode] = useState('+91');
    const [phoneCode, setPhoneCode] = useState('8656565655');
    const [message, setMessage] = useState('');
    const [isChecked, setIsChecked] = useState(false);


    const countryCodes = ['+91', '+1', '+44', '+81', '+61'];


    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const emailHandleChange = (e) => {
        setMailValue(e.target.value);
    }

    const phoneHandleChange = (e) => {
        setPhoneCode(e.target.value)
    }
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleNext = () => {
        navigate("/how-to-delete"); // Navigate to the "Next" screen
    };
    return (
        <div className='main-header-content'>
            <Header />

            <SubHeader
                title="Support"
                breadcrumbLinks={{
                    home: "Home",
                    current: "Support",
                }}
            />

            <div className="banner-content-container mt-5">
                <div className='u-photo-section-container mb-5'>
                    <div className='lets-go-container'>
                        <h1>Providing top notch service is extremely high on our priority list. We review every email and get back to you promptly.</h1>
                        <p className='audio-video-text-content mt-3'> We can be reached 24/7 at <span style={{ color: "#260BCA", fontWeight: "500" }}>support@lovedones.ai</span> </p>
                        <p className='audio-video-text-content mt-3'> Send a message We would love to hear from you!</p>
                    </div>

                    <div className='d-flex gap-2 flex-column mt-5'>
                        <label className='audio-video-text-content' htmlFor="fullName">Full Name<span style={{ color: "red" }}>*</span></label>
                        <Input onChange={handleFullNameChange} value={fullName} id="fullName" marginTop='0' />
                    </div>
                    <div className=" phoneCodeContainer d-flex gap-2 flex-column mt-4" >
                        <label htmlFor="phoneNumber" className=" audio-video-text-content">Phone Number<span style={{ color: "red" }}>*</span></label>
                        <div className="phoneCodeInputContainer">
                            <select
                                className="phoneCodeSelect"
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                            >
                                {countryCodes.map((code) => (
                                    <option key={code} value={code}>{code}</option>
                                ))}
                            </select>
                            <Input
                                type="tel"
                                id="phoneNumber"
                                onChange={phoneHandleChange} value={phoneCode}
                                placeholder="Enter your phone number"
                                // className="inputPhoneCode"
                                marginTop="0"
                                borderRadius="0"
                                border="0"
                            />
                        </div>
                    </div>
                    <div className='d-flex gap-2 flex-column mt-4'>
                        <label className='audio-video-text-content' htmlFor="email">Email Address<span style={{ color: "red" }}>*</span></label>
                        <Input onChange={emailHandleChange} value={mailValue} type="email" id="email" marginTop='0' placeholder='' />
                    </div>
                    <div className="messageContainer d-flex gap-2 flex-column mt-4">
                        <label className='audio-video-text-content' htmlFor="message">Message<span style={{ color: "red" }}>*</span></label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter Message"
                            className="messageInput"
                        />
                    </div>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-4 mt-4">
                        <Button onClick={handleNext} fontFamily="Poppins-Medium" maxWidth="290px" borderRadius="0" textDecoration="underline" border="1px solid #E9EAF0" color="#6E7485" backgroundColor="#F5F7FA" text="How to Delete Account?" />
                        <div className="captcha-box">
                            <div className="captcha-checkbox">
                                <input
                                    type="checkbox"
                                    id="captchaCheckbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                            </div>
                            <label htmlFor="captchaCheckbox" className="captcha-label">
                                I’m not a robot
                            </label>
                            <div className="captcha-logo">
                                <img
                                    src={Images.captcha}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end mt-4">
                        <Button width="170px" text="Submit" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Support