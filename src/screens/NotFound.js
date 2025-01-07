import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Images from '../assets/Images'
import Button from '../components/Button'

const NotFound = () => {
    return (
        <div className='main-header-content'>
            <Header />
            <div className="banner-content-container mt-5 mb-5">
                <div className=''>
                    <div className='lets-go-container d-flex flex-column align-items-center justify-content-center gap-4'>
                        <h1 style={{ fontSize: "36px", fontWeight:900 }}>Page Not Found</h1>
                        <img className='not-found-img' src={Images.NotFound} />
                        <p style={{ color: "#77707F" }} className='delete-description text-center mb-0'>Sorry, the page you’re looking for does not exist or has been moved <br />
                            please go back to the Home page</p>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-lg-4 col-md-6 m-md-auto col-sm-7 m-sm-auto col-12 m-lg-auto'>
                            <div className='d-flex align-items-center justify-content-center gap-md-4 gap-sm-2 gap-2'>
                                <Button borderRadius='40px' width='50%' text="Go back Home" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound