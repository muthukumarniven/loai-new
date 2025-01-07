import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SubHeader from '../components/SubHeader'
import Images from '../assets/Images'

const HowToDelete = () => {
    return (
        <div className='main-header-content'>
            <Header />
            <SubHeader
                title="How to Delete Account"
                breadcrumbLinks={{
                    home: "Home",
                    current: "How to Delete Account",
                }}
            />

            <div className="banner-content-container mt-5 mb-5">
                <div className='row'>
                    <div className='col-10 m-auto'>
                        <div className='row d-flex align-items-center justify-content-between '>
                            <div className='col-md-6 col-12 mt-md-0 d-flex align-items-center justify-content-md-start justify-content-center'>
                                <div className='lets-go-container text-md-start text-center'>
                                    <h1 style={{ fontSize: "24px" }}>Step 1</h1>
                                    <p style={{ lineHeight: "32px" }} className='audio-video-text-content mt-3'>Navigate to your profile page.</p>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 d-flex align-items-center justify-content-md-end justify-content-center'>
                                <img className='help-one-img' src={Images.stepOne} alt="Banner" />
                            </div>
                        </div>
                        <div className='row d-flex flex-wrap align-items-center justify-content-between mt-5 flex-md-row flex-column-reverse '>
                            <div className='col-md-6 col-12 d-flex align-items-center justify-content-md-start justify-content-center'>
                                <img className='help-one-img' src={Images.stepTwo} alt="Banner" />
                            </div>
                            <div className='col-md-6 col-12 mt-md-0 mt-5 d-flex align-items-center justify-content-md-start justify-content-center'>
                                <div className='lets-go-container text-md-start text-center'>
                                    <h1 style={{ fontSize: "24px" }}>Step 2</h1>
                                    <p style={{ lineHeight: "32px" }} className='audio-video-text-content mt-3'>Confirm the deletion by clicking "Delete Account" to permanently remove your account and all associated data from the platform.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default HowToDelete