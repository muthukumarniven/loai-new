import React, { useState, useRef } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import Video from '../assets/videos/founders-video.mp4';
import Input from '../components/Input';
import Images from '../assets/Images';
import Button from '../components/Button';
import VideoFile from '../assets/videos/founders-video.mp4';
import { useNavigate } from "react-router-dom"; // Import useNavigate



const Preview = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/billing-address");
    };
    return (

        <div className='main-header-content'>
            <Header />
            <div className="banner-content-container p-0">
                <div className='u-photo-section-container bg-transparent mb-5'>
                    <div className='row'>
                        <div className='col-md-7 col-lg-5 col-sm-12 mx-auto'>
                            <div className='lets-go-container'>
                                <h1 className='text-center'>You can preview part of your loved one video once. Please apply your promotional code if any and tap the BUY NOW button to get and own your full video</h1>
                            </div>

                            <div className='mt-5 d-flex flex-wrap align-items-center justify-content-xl-between justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-center gap-3 '>
                                <span className='first-holf-preview-content'>2 First half preview of video left</span>
                                <Link className='audio-video-text-content'> Cancel Video</Link>
                            </div>

                            <div className='d-flex flex-wrap gap-4 mt-4' style={{ position: 'relative' }}>
                                <video
                                    ref={videoRef}
                                    className='w-100'
                                    style={{ maxHeight: "750px", height: "100%" }}
                                    poster={Images.poster}
                                    controls
                                    onPlay={() => setIsPlaying(true)}
                                    onPause={() => setIsPlaying(false)}
                                >
                                    <source src={Video} type="video/mp4" />
                                </video>

                            </div>


                            <div>
                                <div className='mt-3 d-flex align-items-center justify-content-center flex-wrap'>
                                    <p className='audio-video-text-content mt-3'> Please enter your promotional code for the price of your custom video</p>
                                    <div className='d-flex align-items-center justify-content-center promotion-code-input-container w-100 mt-3'>
                                        <img src={Images.promotionCode} /><Input marginTop='0' backgroundColor='transparent' borderColor='transparent' placeholder='Promotional code' /><Link style={{ fontWeight: "900" }} className='audio-video-text-content text-black'>Apply</Link>
                                    </div>
                                    <Link style={{ fontWeight: "900" }} className='audio-video-text-content text-black mt-4'>Tap here for your custom price </Link>
                                    <Button onClick={handleNext} marginTop="20px" text="Buy Now" />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <Footer />

        </div>)
}

export default Preview