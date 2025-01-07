import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SubHeader from '../components/SubHeader'
import Video from '../assets/videos/founders-video.mp4';


const SampleVideos = () => {
    return (
        <div className='main-header-content'>

            <Header />
            <SubHeader
                title="Sample Videos"
                breadcrumbLinks={{
                    home: "Home",
                    current: "Sample Videos",
                }}
            />

            <div className="banner-content-container mt-5 mb-5">
                <div className='d-flex flex-wrap align-items-center justify-content-center gap-4'>
                    <video className='avaor-card-img' width="350" height="350" controls >
                        <source src={Video} type="video/mp4" />
                    </video>
                    <video className='avaor-card-img' width="350" height="350" controls >
                        <source src={Video} type="video/mp4" />
                    </video>
                </div>
            </div>
            <Footer />
        </div>











    )
}

export default SampleVideos