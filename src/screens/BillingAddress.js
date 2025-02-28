import React, { useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Images from '../assets/Images'
import PaymentTabHeader from '../components/PaymentTabHeader'
import Input from '../components/Input'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom"; // Import useNavigate


const BillingAddress = () => {
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");

    const handleChange = (e) => {
        setCity(e.target.value);
    };
    const navigate = useNavigate();
    const handleNext = () => {
        navigate("/promocode");
    };

    return (
        <div className='main-header-content'>
            <Header />
            <PaymentTabHeader />

            <div className="banner-content-container">
                <div className='u-photo-section-container mb-5'>
                    <div className='lets-go-container'>
                        <h1 className='text-center'>Billing Address</h1>
                    </div>

                    <div className='row'>
                        <div className='col-md-7 col-lg-5 col-sm-12 mx-auto'>
                            <div className='p-md-4 p-sm-3 p-2 rounded-2 mt-4' style={{ border: "1px solid #E6E7EC", }}>
                                <div className='d-flex gap-2 flex-column'>
                                    <label className='audio-video-text-content' For="fullname">Full Name</label>
                                    <Input id="fullname" marginTop='0' placeholder='Enter Full Name' />
                                </div>
                                <div className='d-flex gap-2 flex-column mt-4'>
                                    <label className='audio-video-text-content' For="addressline-1">Address Line 1</label>
                                    <Input id="addressline-1" marginTop='0' placeholder='Enter Address Line 1' />
                                </div>
                                <div className="billing-city-selector d-flex flex-column gap-2">
                                    <label htmlFor="city" className="city-label audio-video-text-content">
                                        Country or Region
                                    </label>
                                    <select
                                        id="city"
                                        value={city}
                                        onChange={handleChange}
                                        className="billing-city-dropdown"
                                    >
                                        <option value="" disabled>
                                            Choose a city
                                        </option>
                                        <option value="australia">Australia</option>
                                        <option value="america">America</option>
                                        <option value="albania">Albania</option>
                                        <option value="bangladesh">Bangladesh</option>
                                        <option value="england">England</option>
                                        <option value="japan">Japan</option>
                                        <option value="india">India</option>
                                    </select>

                                    {/* {city && <p className="billing-city-output">You selected: {city}</p>} */}
                                </div>

                                <div className='d-flex gap-2 flex-column mt-4'>
                                    <label className='audio-video-text-content' For="addressline-2">Address Line 2 (Optional)</label>
                                    <Input id="addressline-2" marginTop='0' placeholder='Enter Address Line 2' />
                                </div>
                                <div className='d-flex gap-2 flex-column mt-4'>
                                    <label className='audio-video-text-content' For="city">City</label>
                                    <Input id="city" marginTop='0' placeholder='Enter Your City' />
                                </div>
                                <div className='d-flex gap-2 flex-column mt-4'>
                                    <label className='audio-video-text-content' For="zip-code">Zip Code</label>
                                    <Input id="zip-code" marginTop='0' placeholder='Enter Your Zip Code' />
                                </div>
                                <div className='d-flex gap-2 flex-column mt-4'>
                                    <label className='audio-video-text-content' For="state">State</label>
                                    <Input id="state" marginTop='0' placeholder='Enter Your State' />
                                </div>

                                <div style={{ width: "100%", marginTop: "20px" }}>
                                    <PhoneInput
                                        country={"us"}
                                        value={phone}
                                        onChange={(value) => setPhone(value)}
                                        inputStyle={{
                                            width: "100%",
                                            height: "49px",
                                            padding: "10px 10px 10px 50px",
                                            fontSize: "12px",
                                            border: "1px solid #E9EAF0",
                                            borderRadius: "4px",
                                            fontFamily: "Poppins-Regular",
                                        }}
                                        buttonStyle={{
                                            backgroundColor: "#fff",
                                            border: "1px solid #E9EAF0",
                                            borderRadius: "4px 0 0 4px",
                                        }}
                                        dropdownStyle={{
                                            fontFamily: "Poppins-Regular",
                                        }}
                                        placeholder="Enter Phone Number"
                                    />
                                </div>
                                <Button onClick={handleNext} marginTop="20px" text="Continue" />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BillingAddress