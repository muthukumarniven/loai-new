import React, { useState, useRef } from 'react';
import MainHeader from '../components/MainHeader'
import Images from '../assets/Images'
import { Link } from 'react-router-dom';
import Video from '../assets/videos/founders-video.mp4';

const MainHome = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <div className='main-home-header'>
            <MainHeader />
            <div className='main-banner-header'>
                <div className='container'>
                    <div className='row flex-md-row flex-column-reverse'>
                        <div className='col-md-6 col-12 mt-md-0 mt-4'>
                            <div className='lets-go-container'>
                                <h1 style={{ fontSize: "36px", letterSpacing: "-.02em" }} >Create Timeless Memories, Videos of your Loved Ones Who have passed away bringing their voices and legacy back to life!</h1>
                                <p style={{fontSize:"16px"}} className='audio-video-text-content mt-md-5 mt-3'>Experience feelings of Comfort, Healing, Connection and many more other Emotional Wellness benefits...</p>
                            </div>
                            <div className='mt-md-5 mt-3'>
                                <div style={{padding:"32px"}} className='d-flex align-items-start gap-3 bg-white'>
                                    <img
                                        src={Images.tick}
                                        alt="Gender Icon" />
                                    <div className='lets-go-container'>
                                        <h1 className='mb-0' style={{ fontSize: "16px", }} >Upload a Photo for a Personalized Video</h1>
                                        <p className='audio-video-text-content mt-3 mb-0'>Upload a high-quality front-facing photo from shoulders up with visible lips for the best video results.</p>
                                    </div>
                                </div>
                                <div style={{padding:"32px"}} className='d-flex align-items-start gap-3 bg-white mt-4'>
                                    <img
                                        src={Images.tick}
                                        alt="Gender Icon" />
                                    <div className='lets-go-container'>
                                        <h1 className='mb-0' style={{ fontSize: "16px", }} >Upload a Photo for a Personalized Video</h1>
                                        <p className='audio-video-text-content mt-3 mb-0'>Upload a high-quality front-facing photo from shoulders up with visible lips for the best video results.</p>
                                    </div>
                                </div>
                            </div>  
                            <div className='d-flex align-items-center justify-content-center get-app-container'>
                                <div className='lets-go-container'>
                                    <h1 className='mb-4 text-center fw-bolder' style={{ fontSize: "36px", lineHeight: "39px", }} >Get the App</h1>
                                    <div className='d-flex align-items-center justify-content-center flex-wrap gap-3'>
                                        <Link  href='#!'><img style={{width:"276px",height:"83px"}} src={Images.appStore} alt="appStore" /></Link>
                                        <Link  href='#!'><img style={{width:"276px",height:"83px"}} src={Images.googlePlay} alt="googlePlay" /></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 '>

                            <div className='d-flex align-items-center justify-content-center flex-wrap gap-4 mt-md-4  ' style={{ position: 'relative' }}>
                                <video
                                    ref={videoRef}
                                    className=''
                                    // height="750"
                                    style={{ maxHeight: "620px", height: "100%", maxWidth: "480px", width: "100%" }}
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
                            </div>

                            <div className='d-flex wellness-images'>
                                <img
                                    src={Images.bannerOne}
                                    alt="Gender Icon" />
                                <img
                                    src={Images.bannerTwo}
                                    alt="Gender Icon" />
                                <img
                                    src={Images.bannerThree}
                                    alt="Gender Icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHome