import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SubHeader from '../components/SubHeader'

const About = () => {
    return (
        <div className='main-header-content'>
            <Header />
            <SubHeader
                title="About"
                breadcrumbLinks={{
                    home: "Home",
                    current: "About",
                }}
            />
            <div className="banner-content-container mt-5">
                <div className='u-photo-section-container mb-5'>
                    <div className='lets-go-container'>
                        <h1>Our mission is to virtually bring back your Loved Ones!
                        </h1>
                        <p className='audio-video-text-content mt-3'>We believe that being able to create a video of your Loved Ones who have passed away will bring comfort and help with the grieving process. Now with the LovedOnes.AI app that is possible.</p>
                        <p className='audio-video-text-content mt-3'>You may have lost a loved one physically but with the help of the LovedOnes.ai app, we will bring them back for you virtually!</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About