import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SubHeader from '../components/SubHeader'
import Images from '../assets/Images';

const Notification = () => {
    return (
        <div className='main-header-content'>
            <Header />
            <SubHeader
                title="Notification"
                breadcrumbLinks={{
                    home: "Home",
                    current: "Notification",
                }}
            />
            <div className="banner-content-container mt-5 mb-5">

                <div style={{ backgroundColor: "#fff" }} className="notification-item">
                    <h5 style={{ fontSize: "14px" }}>Your LovedOnes.ai Video is Ready!</h5>
                    <p className='audio-video-text-content'>‘2154’ video creation completed</p>
                    <p className='audio-video-text-content'>1 min</p>
                    <div className="notification-dot"></div>
                </div>
                <div style={{ backgroundColor: "#fff" }} className="notification-item">
                    <h5 style={{ fontSize: "14px" }}>Your LovedOnes.ai Video is Ready!</h5>
                    <p className='audio-video-text-content'>‘2154’ video creation completed</p>
                    <p className='audio-video-text-content'>1 min</p>
                    <div className="notification-dot"></div>
                </div>
                <div style={{ backgroundColor: "#fff" }} className="notification-item">
                    <h5 style={{ fontSize: "14px" }}>Your LovedOnes.ai Video is Ready!</h5>
                    <p className='audio-video-text-content'>‘2154’ video creation completed</p>
                    <p className='audio-video-text-content'>1 min</p>
                    <div className="notification-dot"></div>
                </div>
                <div style={{ backgroundColor: "#fff" }} className="notification-item">
                    <h5 style={{ fontSize: "14px" }}>Your LovedOnes.ai Video is Ready!</h5>
                    <p className='audio-video-text-content'>‘2154’ video creation completed</p>
                    <p className='audio-video-text-content'>1 min</p>
                    <div className="notification-dot"></div>
                </div>
                <div style={{ backgroundColor: "#fff" }} className="notification-item">
                    <h5 style={{ fontSize: "14px" }}>Your LovedOnes.ai Video is Ready!</h5>
                    <p className='audio-video-text-content'>‘2154’ video creation completed</p>
                    <p className='audio-video-text-content'>1 min</p>
                </div>
                <div style={{ backgroundColor: "#fff" }} className="notification-item">
                    <h5 style={{ fontSize: "14px" }}>Your LovedOnes.ai Video is Ready!</h5>
                    <p className='audio-video-text-content'>‘2154’ video creation completed</p>
                    <p className='audio-video-text-content'>1 min</p>
                </div>

            </div>




            <Footer />
        </div>
    )
}

export default Notification