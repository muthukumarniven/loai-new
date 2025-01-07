import React, { useState } from 'react';
import Header from '../components/Header'
import Images from '../assets/Images'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


const MyVideos = () => {

    return (
        <div className='main-header-content'>
            <Header />
            <div className='banner-content-container mt-5 mb-5'>
                    <div className='d-flex flex-wrap gap-4'>
                        <Link className='card avaor-card-img border-0 text-decoration-none' to="/create-video" >
                                <div
                                    className="upload-pic-container d-flex align-items-center justify-content-center flex-column mt-0 h-100"
                                >
                                    <div className="d-flex align-items-center justify-content-center flex-column">
                                        <img src={Images.CreateVideo} alt="Upload" />
                                        <p className='mt-3'>+ Create Video</p>
                                    </div>
                                </div>
                        </Link>
                        <Link className='card avaor-card-img border-0 text-decoration-none'  to="/indivitual-screen" >
                            <div className='p-3'>
                                <img src={Images.avator} class="card-img-top create-video-container" alt="..." />
                                <span class="delete-image-content"><img src={Images.conformDelete} alt="Delete"/></span>
                                <div class="card-body created-video-text p-0 mt-3">
                                    <h6 class="card-text">Video of my Son</h6>
                                    <p className='mb-0'>Created Nov 17, 2023</p>
                                </div>
                            </div>
                        </Link>
                        <Link className='card avaor-card-img border-0 text-decoration-none'  to="/indivitual-screen" >
                            <div className='p-3'>
                                <img src={Images.avator} class="card-img-top create-video-container" alt="..." />
                                <span class="delete-image-content"><img src={Images.conformDelete} alt="Delete"/></span>

                                <div class="card-body created-video-text p-0 mt-3">
                                    <h6 class="card-text">Video of my Son</h6>
                                    <p className='mb-0'>Created Nov 17, 2023</p>
                                </div>
                            </div>
                        </Link>
                       
                       
                      
                    </div>
            </div>

            <Footer/>

        </div>
    )
}

export default MyVideos