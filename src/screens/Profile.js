import React, { useState } from 'react';
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Footer from '../components/Footer'
import Images from '../assets/Images'
import Button from '../components/Button';
import Input from '../components/Input';
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Profile = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const [mailValue, setMailValue] = useState('rrmuthukumar007@gmail.com')
    const [fullName, setFullName] = useState('Robert');
    const [countryCode, setCountryCode] = useState('+91');
    const [phoneCode, setPhoneCode] = useState('8656565655');


    const countryCodes = ['+91', '+1', '+44', '+81', '+61'];


    const phoneHandleChange = (e) => {
        setPhoneCode(e.target.value)
    }

    const emailHandleChange = (e) => {
        setMailValue(e.target.value);
    }
    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const handleNext = () => {
        navigate("/delete-conformation"); // Navigate to the "Next" screen
    };

    return (
        <div className='main-header-content'>

            <Header />
            <SubHeader
                title="Profile"
                breadcrumbLinks={{
                    home: "Home",
                    current: "Profile",
                }}
            />
            <div className="banner-content-container mt-5">
                <div className='u-photo-section-container mb-5'>
                    <div className="profile-section">
                        {/* Profile Content */}
                        <div className="profile-details">
                            <img
                                src={Images.profile}
                                alt="Profile"
                                className="profile-image"
                            />
                            <div className="profile-info">
                                <h2 className="profile-name">Robert</h2>
                                <p className="profile-email">Xyz@gmail.com</p>
                            </div>
                        </div>
                        {/* Edit Button */}
                        <div className="profile-edit">
                            <Button width="130px" text="Edit" />
                        </div>
                    </div>
                    <div>
                        <div className='d-flex gap-2 flex-column mt-5'>
                            <label className='audio-video-text-content' htmlFor="fullName">Full Name</label>
                            <Input onChange={handleFullNameChange} value={fullName} id="fullName" marginTop='0' />
                        </div>
                        <div className=" phoneCodeContainer d-flex gap-2 flex-column mt-4" >
                            <label htmlFor="phoneNumber" className=" audio-video-text-content">Phone Number</label>
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
                            <label className='audio-video-text-content' htmlFor="email">Email Address</label>
                            <Input onChange={emailHandleChange} value={mailValue} type="email" id="email" marginTop='0' placeholder='' />
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mb-5'>
                    <Button onClick={handleNext} fontFamily="Poppins-Medium" maxWidth="290px" borderRadius="0" textDecoration="underline" border="1px solid #E9EAF0" color="#6E7485" backgroundColor="#ffffff" text="Delete Account?" />
                </div>
            </div>


            <Footer />


        </div>
    )
}

export default Profile