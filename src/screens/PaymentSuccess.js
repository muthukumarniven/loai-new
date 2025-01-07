import React, { useState, useRef } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import Video from '../assets/videos/founders-video.mp4';
import Images from '../assets/Images';

const PaymentSuccess = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);


    const handleVideoToggle = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };


    return (
        <div className='main-header-content'>
            <Header />
           <div className="banner-content-container p-0">
                <div className='u-photo-section-container bg-transparent mb-5'>
                    <div className='row'>
                        <div className='col-md-7 col-lg-5 col-sm-12 mx-auto'>
                            <div className='lets-go-container'>
                                <h1 style={{ color: "#00BB28" }} className='text-center'>Payment Successful</h1>
                                <h1 className='text-center mt-3'>Transaction has been successfully Completed</h1>
                                <p style={{ fontFamily: "Poppins-SemiBold", }} className='audio-video-text-content text-center'>Transcation ID:<Link className='mt-3 audio-video-text-content text-center text-decoration-none'>  123456789</Link></p>
                                <h1 style={{ fontSize: "24px" }} className='text-center mt-md-5 mt-sm-4 mt-4'>Video of my Son</h1>

                            </div>
                            <div className='d-flex align-items-center justify-content-center flex-wrap gap-4 mt-md-4  ' style={{ position: 'relative' }}>

                                <video
                                    ref={videoRef}
                                    className=''
                                    // height="750"
                                    style={{ maxHeight: "750px", height: "100%", maxWidth: "480px", width: "100%" }}
                                    poster={Images.poster}
                                    controls
                                    onPlay={() => setIsPlaying(true)}
                                    onPause={() => setIsPlaying(false)}
                                >
                                    <source src={Video} type="video/mp4" />
                                </video>

                                {!isPlaying && (
                                    <img
                                        src={Images.pause}
                                        alt="Pause"
                                        onClick={togglePlayPause}
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            cursor: 'pointer',
                                            zIndex: 1,
                                        }}
                                    />
                                )}
                                <Link><img
                                    src={Images.share}
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '80%',
                                        transform: 'translate(-50%, -50%)',
                                        cursor: 'pointer',
                                        zIndex: 1,
                                    }}
                                />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PaymentSuccess