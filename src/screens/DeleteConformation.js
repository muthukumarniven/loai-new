import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Images from '../assets/Images'
import Button from '../components/Button'

const DeleteConformation = () => {

    return (
        <div className='main-header-content'>
            <Header />
            <div className="banner-content-container mt-5 mb-5">
                <div className=''>
                    <div className='lets-go-container d-flex flex-column align-items-center justify-content-center gap-4'>
                        <img src={Images.deleteConformation} />
                        <h1 style={{ fontSize: "24px" }}>Delete your account</h1>
                        <p className='delete-description text-center'>"Are you sure? Your account and all your data will be <br /> deleted, once you delete your account all your data will <br /> be permanently deleted, including all your videos"</p>
                    </div>

                    <div className='row'>
                        <div className='col-lg-4 col-md-6 m-md-auto col-sm-7 m-sm-auto col-12 m-lg-auto'>
                            <div className='d-flex align-items-center justify-content-between gap-md-4 gap-sm-2 gap-2'>
                                <button className="btn-modal choose-btn-content rounded-5" >
                                Keep Account
                                </button>
                                <Button borderRadius='40px' width='50%' text="Yes Delete" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DeleteConformation