import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PaymentTabHeader from '../components/PaymentTabHeader'
import Images from '../assets/Images'
import Input from '../components/Input' 
import { Link } from "react-router-dom"; 
import Button from '../components/Button' 
import { useNavigate } from "react-router-dom";  


const PaymentMethod = () => {
    const navigate = useNavigate(); 

    const handleNext = () => {
        navigate("/payment-success"); 
    };
 
    return (
        <div className='main-header-content'>
            <Header />
            <PaymentTabHeader />
            <div className="banner-content-container">
                <div className='u-photo-section-container mb-5'>
                    <div className='row'>
                        <div className='col-md-7 col-lg-5 col-sm-12 mx-auto'>
                            <div className='p-md-4 p-sm-3 p-2 rounded-2' style={{ border: "1px solid #E6E7EC", }}>

                                <div className='lets-go-container d-flex align-items-center justify-content-between flex-wrap gap-4'>
                                    <h1 className='text-center mb-0'>Credit/ Debit card</h1>
                                    <div className='d-flex gap-2 flex-wrap'>
                                        <img src={Images.visa} />
                                        <img src={Images.masterCard} />
                                        <img src={Images.americanExpress} />
                                        <img src={Images.discover} />
                                    </div>
                                </div>

                                <div style={{ borderBottom: "1px solid #E6E7EC" }} className='mt-4'>
                                    <p style={{ color: "#7D7D7D" }} className='audio-video-text-content'>Securely enter your credit or debit card details to complete your payment transaction</p>
                                </div>


                                <div className='mt-4'>
                                    <div className='d-flex gap-2 flex-column'>
                                        <label className='audio-video-text-content' For="card-name">Name</label>
                                        <Input id="card-name" marginTop='0' placeholder='Name on card' />
                                    </div>
                                    <div className='mt-4 d-flex flex-column gap-2'>
                                        <label className='audio-video-text-content' For="card-number">Card Number</label>
                                        <div style={{ border: "1px solid rgb(233, 234, 240)", borderRadius: "4px", padding: "0px 10px" }} className='d-flex align-items-center justify-content-center w-100'>
                                            <Input padding='0px' id='card-number' marginTop='0' backgroundColor='transparent' borderColor='transparent' placeholder='1234 1234 1234 1234' /><img src={Images.card} />
                                        </div>
                                    </div>

                                    <div className="row d-flex align-items-center justify-content-between flex-wrap">
                                        <div className="col-12 col-lg-6 d-flex gap-2 flex-column mt-4">
                                            <label className="audio-video-text-content" htmlFor="month-year">MM / YY</label>
                                            <Input id="month-year" marginTop="0" placeholder="MM / YY" />
                                        </div>
                                        <div className="col-12 col-lg-6 d-flex gap-2 flex-column mt-4">
                                            <label className="audio-video-text-content" htmlFor="security-code">CVC</label>
                                            <Input id="security-code" marginTop="0" placeholder="Security Code" />
                                        </div>
                                    </div>




                                    <Button onClick={handleNext}  marginTop="20px" text="Pay" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PaymentMethod