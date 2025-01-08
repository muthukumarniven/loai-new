import React, { useState, useRef } from 'react';
import MainHeader from '../components/MainHeader'
import Images from '../assets/Images'
import { Link } from 'react-router-dom';
import Video from '../assets/videos/founders-video.mp4';
import Footer from '../components/Footer';

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

        <div className='main-header-content'>
        <div className='main-home-header'>
            <MainHeader />
            <div className='main-banner-header'>
                <div className='container'>
                    <div className='row flex-md-row flex-column-reverse'>
                        <div className='col-md-6 col-12 mt-md-0 mt-4'>
                            <div className='lets-go-container'>
                                <h1 style={{ fontSize: "36px", letterSpacing: "-.02em" }} >Create Timeless Memories, Videos of your Loved Ones Who have passed away bringing their voices and legacy back to life!</h1>
                                <p style={{ fontSize: "16px" }} className='audio-video-text-content mt-md-5 mt-3'>Experience feelings of Comfort, Healing, Connection and many more other Emotional Wellness benefits...</p>
                            </div>
                            <div className='mt-md-5 mt-3'>
                                <div style={{ padding: "32px" }} className='d-flex align-items-start gap-3 bg-white'>
                                    <img
                                        src={Images.tick}
                                        alt="Gender Icon" />
                                    <div className='lets-go-container'>
                                        <h1 className='mb-0' style={{ fontSize: "16px", }} >Upload a Photo for a Personalized Video</h1>
                                        <p className='audio-video-text-content mt-3 mb-0'>Upload a high-quality front-facing photo from shoulders up with visible lips for the best video results.</p>
                                    </div>
                                </div>
                                <div style={{ padding: "32px" }} className='d-flex align-items-start gap-3 bg-white mt-4'>
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
                                        <Link href='#!'><img style={{ width: "276px", height: "83px" }} src={Images.appStore} alt="appStore" /></Link>
                                        <Link href='#!'><img style={{ width: "276px", height: "83px" }} src={Images.googlePlay} alt="googlePlay" /></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 '>

                            <div className='d-flex align-items-center justify-content-center flex-wrap gap-4' style={{ position: 'relative' }}>
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

            <div className='container mt-5'>
                <div className=' row g-4 g-lg-5'>
                    <div className='col-lg-8 col-xl-9 why-lovedone-header'>
                        <div className='lets-go-container p-4'>
                            <h1 style={{ fontSize: "36px", letterSpacing: "-.02em" }} >Why LovedOnes.ai?
                            </h1>
                            <p style={{ fontSize: "16px", color: "#828587" }} className='audio-video-text-content mt-4 mb-0'>Do you ever miss a loved one in your life who has passed away, a parent, a sibling, a spouse, a child, a relative, a partner, a friend, or any person you had an emotional connection with over the span of your life? When you do, are there words, expressions, or comments you wish you had heard or could have heard from them? You are not alone. Just about every person alive experiences such longing for those moments. It is known through several studies that being able to relive those moments with your Loved Ones that have passed away expressing what you wish they would say, or would have said, when they were alive brings you emotional wellness. Such emotional WELLNESS benefits can be accomplished with videos of sixty words or less in the image and voice of your loved ones who have passed away. The LovedOnes.ai mobile app enables you to accomplish such emotional wellness.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-xl-3'>
                        <div className='d-flex flex-wrap w-100'>
                            <video className=' w-100' height="350" controls >
                                <source src={Video} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>

            </div>





            <div className='main-banner-header mt-5'>
                <div className='container'>
                    <div className='lets-go-container'>
                        <h1 style={{ fontSize: "36px", }} >With the Loved Ones app you will experience many Emotional Wellness
                            benefits like:</h1>
                    </div>
                    <div className='d-flex flex-wrap gap-4 mt-4'>
                        <video className='avaor-card-img' height="350" controls >
                            <source src={Video} type="video/mp4" />
                        </video>
                        <video className='avaor-card-img' height="350" controls >
                            <source src={Video} type="video/mp4" />
                        </video>
                        <video className='avaor-card-img' height="350" controls >
                            <source src={Video} type="video/mp4" />
                        </video>
                        <video className='avaor-card-img' height="350" controls >
                            <source src={Video} type="video/mp4" />
                        </video>
                        <video className='avaor-card-img' height="350" controls >
                            <source src={Video} type="video/mp4" />
                        </video>
                        <video className='avaor-card-img' height="350" controls >
                            <source src={Video} type="video/mp4" />
                        </video>
                        <video className='avaor-card-img' height="350" controls >
                            <source src={Video} type="video/mp4" />
                        </video>
                        <video className='avaor-card-img' height="350" controls >
                            <source src={Video} type="video/mp4" />
                        </video>
                        <video className='avaor-card-img' height="350" controls >
                            <source src={Video} type="video/mp4" />
                        </video>
                        <video className='avaor-card-img' height="350" controls >
                            <source src={Video} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>



            <div className='container mt-5 mb-5'>
                <div className=' row g-4 g-lg-5 flex-md-row flex-column-reverse'>
                    <div className='col-md-6 col-12'>
                        <div className='d-flex flex-wrap gap-4 mt-4'>
                            <video className='w-100' height="350" controls >
                                <source src={Video} type="video/mp4" />
                            </video>
                        </div>

                    </div>
                    <div className='col-md-6 col-12  d-flex flex-column align-items-center justify-content-center'>
                        <div className='lets-go-container'>
                            <h1 style={{fontSize:"42px"}}>Founders Vision
                            </h1>
                            <p className='audio-video-text-content mt-3'>The Founders vision is to create a platform where people can preserve and relive memories of their loved ones through personalized videos. The goal is to bring comfort and connection by recreating their voices and stories.</p>
                        </div>
                    </div>
                </div></div>
              

        </div>
        <Footer/>
        </div>
    )
}

export default MainHome