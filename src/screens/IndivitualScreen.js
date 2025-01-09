import React, { useState, useRef } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import SubHeader from '../components/SubHeader'
import Images from '../assets/Images';
import Video from '../assets/videos/founders-video.mp4';
import { Link } from "react-router-dom";


const IndivitualScreen = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);



    return (

        <div className='main-header-content'>
            <Header />
            <SubHeader
                title="Video of my Son"
                breadcrumbLinks={{
                    home: "My Videos",
                    current: "Video of my Son",
                }}
            />

            <div className="banner-content-container mt-5 mb-5">

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

                </div>
            </div>




            <Footer />

        </div>
    )
}

export default IndivitualScreen