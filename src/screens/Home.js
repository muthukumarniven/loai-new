import React, { useEffect } from 'react';
import Images from '../assets/Images'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Video from '../assets/videos/founders-video.mp4';
import { useNavigate } from "react-router-dom"; // Import useNavigate


const Home = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/create-video");
    };

    return (
        <div className='main-header-content'>
            <Header />
            
            <div className="banner-container">
                <div className="banner-img-container">
                    <img src={Images.banner} alt="Banner" />
                </div>
                <div className="banner-content-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner-text-content">
                                <h1>
                                    <a href="#!">Create custom videos of your LovedOnes who have passed away</a>
                                </h1>
                                <button onClick={handleNext} className="create-video-btn mt-3" type="button">
                                    +Create your video
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='banner-content-container mt-5'>
                <div className='lets-go-container'>
                    <h1 style={{ fontSize: "24px" }} >Create a video of your Loved Ones who have passed away, it is as simple as:</h1>
                    <div className='mt-4'>
                        <div className='count-content-text d-flex align-items-center'>
                            <span className=' d-flex align-items-center justify-content-center'>1</span>
                            <p className='mb-0'>Upload your LovedOne’s photo front facing from the shoulders up.</p>
                        </div>
                        <div className='count-content-text d-flex align-items-center mt-4'>
                            <span className=' d-flex align-items-center justify-content-center'>2</span>
                            <p className='mb-0'>Submit your <b>Text for the Video,</b>  of what your LovedOnes will say.</p>
                        </div>
                        <div className='count-content-text d-flex align-items-center mt-4'>
                            <span className=' d-flex align-items-center justify-content-center'>3</span>
                            <p className='mb-0'>Upload an <b> Audio or Video </b> file of your LovedOne’s voice to have the <b> text spoken in the LovedOne’s  Voice.</b></p>
                        </div>
                        <div className='count-content-text d-flex align-items-center mt-4'>
                            <p className='mb-0'> <b> NO WORRIES </b> if you don’t have an Audio or Video File of the LovedOne’s voice, there are <b> many voices to choose from!</b></p>
                        </div>
                    </div>
                </div>



                <div className='lets-go-container mt-5'>
                    <h1>My Videos</h1>
                    <div className='d-flex flex-wrap gap-4  mt-4'>
                        <div class="card avaor-card-img border-0">
                            <div className='p-3'>
                                <img src={Images.avator} class="card-img-top create-video-container" alt="..." />
                                <span class="delete-image-content"><img src={Images.conformDelete} alt="Delete"/></span>
                                <div class="card-body created-video-text p-0 mt-3">
                                    <h6 class="card-text">Video of my Son</h6>
                                    <p className='mb-0'>Created Nov 17, 2023</p>
                                </div>
                            </div>
                        </div>
                        <div class="card avaor-card-img border-0">
                            <div className='p-3'>
                                <img src={Images.bg} class="card-img-top create-video-container" alt="..." />
                                <span class="delete-image-content"><img src={Images.conformDelete} alt="Delete"/></span>
                                <div class="card-body created-video-text p-0 mt-3">
                                    <h6 class="card-text">Video of my Son</h6>
                                    <p className='mb-0'>Created Nov 17, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lets-go-container my-5'>
                    <h1>Sample Videos</h1>
                    <div className='d-flex flex-wrap gap-4 mt-4'>
                        <video className='avaor-card-img' height="350" controls >
                            <source src={Video} type="video/mp4" />
                        </video>
                        <video className='avaor-card-img' height="350" controls >
                            <source src={Video} type="video/mp4" />
                        </video>
                    </div>
                </div>

            </div>
            <Footer />

        </div>
    )
}
export default Home
