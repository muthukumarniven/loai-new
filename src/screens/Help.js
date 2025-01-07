import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SubHeader from '../components/SubHeader'
import Images from '../assets/Images'

const Help = () => {
    return (
        <div className='main-header-content'>
            <Header />
            <SubHeader
                title="Help"
                breadcrumbLinks={{
                    home: "Home",
                    current: "Help",
                }}
            />


            <div className="banner-content-container mt-5 mb-5">
                <div className='row d-flex align-items-center justify-content-between flex-md-row flex-column-reverse '>
                    <div className='col-md-6 col-12 mt-md-0 mt-5'>
                        <div className='lets-go-container'>
                            <h1>Upload Photo</h1>
                            <p style={{ lineHeight: "32px" }} className='audio-video-text-content mt-3'>Upload a clear high definition photo or image of your Loved One, for the best results a front-facing one and their lips must be showing.  The higher the quality of the photo and the larger the image file the better the Custom Video of your Loved One will turn out.</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-12 d-flex align-items-center justify-content-md-end justify-content-center'>
                        <img src={Images.uploadPhotoHelp} alt="Banner" />
                    </div>
                </div>
                <div className='row d-flex align-items-center justify-content-between mt-5'>
                    <div className='col-md-6 col-12 d-flex align-items-center justify-content-md-start justify-content-center'>
                        <img src={Images.submitText} alt="Banner" />
                    </div>
                    <div className='col-md-6 col-12 mt-md-0 mt-5'>
                        <div className='lets-go-container'>
                            <h1>Submit Text to Video</h1>
                            <p style={{ lineHeight: "32px" }} className='audio-video-text-content mt-3'>Type what you would like your Loved One to say in your custom video [100 to 800 characters]. An example of that would be “I miss you so very much and I am so proud of you, I'll keep watching over you, I love you with all my heart!”</p>
                        </div>
                    </div>

                </div>
                <div className='row d-flex align-items-center justify-content-between mt-5 flex-md-row flex-column-reverse'>
                    <div className='col-md-6 col-12 mt-md-0 mt-5'>
                        <div className='lets-go-container'>
                            <h1>Upload Audio or Video File</h1>
                            <p style={{ lineHeight: "32px" }} className='audio-video-text-content mt-3'>Upload an audio or video file of your Loved One speaking so that the text will be spoken in the Loved One's voice. The Audio or Video file needs to be not less than 30 seconds.</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-12 d-flex align-items-center justify-content-md-end justify-content-center'>
                        <img src={Images.uploadAudioVideo} alt="Banner" />
                    </div>
                </div>
                <div className='row d-flex align-items-center justify-content-between mt-5'>
                    <div className='col-md-6 col-12 d-flex align-items-center justify-content-md-start justify-content-center'>
                        <img src={Images.voice} alt="Banner" />
                    </div>
                    <div className='col-md-6 col-12 mt-md-0 mt-5'>
                        <div className='lets-go-container'>
                            <h1>Choose a Voice </h1>
                            <p style={{ lineHeight: "32px" }} className='audio-video-text-content mt-3'>If you do not have an audio or video file of your Loved One's voice, no worries, we have many voices for you to choose from.</p>
                            <p style={{ lineHeight: "32px" }} className='audio-video-text-content mt-3'>It's as simple as choosing an accent, a gender, and age, and a list of voices will be displayed for you to choose from.</p>
                            <p style={{ lineHeight: "32px" }} className='audio-video-text-content mt-3'>* Voices Powered by ElevenLabs</p>
                       
                        </div>
                    </div>

                </div>
                <div className='row d-flex align-items-center justify-content-between mt-5 flex-md-row flex-column-reverse'>
                    <div className='col-md-6 col-12 mt-md-0 mt-5'>
                        <div className='lets-go-container'>
                            <h1>Create Your LovedOne’s Custom Video</h1>
                            <p style={{ lineHeight: "32px" }} className='audio-video-text-content mt-3'>Click on Submit to create your LovedOne's custom video. You will have up to five previews of the custom LovedOne's video, with the option of either cancel or buy the video.</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-12 d-flex align-items-center justify-content-md-end justify-content-center'>
                        <img src={Images.customVideo} alt="Banner" />
                    </div>
                </div>
                <div className='row d-flex align-items-center justify-content-between mt-5'>
                    <div className='col-md-6 col-12 d-flex align-items-center justify-content-md-start justify-content-center'>
                        <img src={Images.shareHelp} alt="Banner" />
                    </div>
                    <div className='col-md-6 col-12 mt-md-0 mt-5'>
                        <div className='lets-go-container'>
                            <h1>View, Download and  Share Your LovedOne’s  Video</h1>
                            <p style={{ lineHeight: "32px" }} className='audio-video-text-content mt-3'>View, Download and Share your LovedOne’s videos with all your friends and family and on all your Social Media Platforms!</p>
                        </div>
                    </div>

                </div>
            </div>




            <Footer />
        </div>
    )
}

export default Help