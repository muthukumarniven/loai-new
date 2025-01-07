import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PaymentTabHeader from '../components/PaymentTabHeader'
import Input from '../components/Input'
import Button from '../components/Button'
import Images from '../assets/Images'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate


const PromoCode = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/payment-method"); 
    };
    return (
        <div className='main-header-content'>
            <Header />
            <PaymentTabHeader />

            <div className="banner-content-container">
                <div className='u-photo-section-container mb-5'>
                    <div className='row'>
                        <div className='col-md-7 col-lg-5 col-sm-12 mx-auto'>
                            <div className='p-md-4 p-sm-3 p-2 rounded-2' style={{border:"1px solid #E6E7EC",}}>
                                <div className='lets-go-container'>
                                    <h1>Order Summary </h1>
                                    <h1 className='mt-3'>Custom Video of your Loved One </h1>
                                    <p style={{ color: "#7D7D7D" }} className='audio-video-text-content mt-3'>Only $19.99 / per video</p>
                                </div>
                                <div className='d-flex gap-2 flex-column mt-4'>
                                    <label className='audio-video-text-content' For="promocode">Enter Your Promotion Code</label>
                                    <div className='d-flex gap-3'>
                                        <Input id="promocode" marginTop='0' placeholder='Enter Code' />
                                        <Button backgroundColor='#fff' border="2px solid #007BFF" color='#007BFF' width='40%' text="Apply" />
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p className='audio-video-text-content'>Subtotal</p>
                                        <p style={{ fontWeight: "900", fontFamily: "Poppins-Bold" }} className='audio-video-text-content mb-0'>$19.99</p>
                                    </div>
                                    <div style={{ borderBottom: "1px solid #E6E7EC" }} className='d-flex align-items-center justify-content-between'>
                                        <p className='audio-video-text-content'>Tax(10%)</p>
                                        <p style={{ fontWeight: "900", fontFamily: "Poppins-Bold" }} className='audio-video-text-content mb-0'>$4.90</p>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between mt-2'>
                                        <p style={{ color: "#FF0000", fontWeight: "900", fontFamily: "Poppins-Bold" }} className='audio-video-text-content mb-0'>Total: </p>
                                        <p style={{ fontWeight: "900", color: "#FF0000", fontFamily: "Poppins-Bold" }} className='audio-video-text-content mb-0'>$24.89</p>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <p className='audio-video-text-content'>By continuing, you agree to LovedOnes.ai  <Link> Terms of Service</Link> and <Link> Privacy Policy</Link> </p>
                                <Button onClick={handleNext} text="Continue"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PromoCode