import React from 'react'
import Header from '../components/Header'
import TabHeader from '../components/TabHeader'
import Input from '../components/Input'
import Button from '../components/Button'
import Footer from '../components/Footer'
import { useNavigate } from "react-router-dom"; // Import useNavigate

const InputText = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleNext = () => {
        navigate("/audio-video"); // Navigate to the "Next" screen
    };
    return (
        <div className='main-header-content'>
            <Header />
            <TabHeader />
            <div className="banner-content-container">
                <div className='u-photo-section-container mb-5'>
                    <div className='lets-go-container'>
                        <h1 className='text-center'>Input the text your Loved one will say in your video</h1>
                        <Input />
                        <h1 className='mt-4 mb-0'>Feel free to enter the text in the language of your choice</h1>
                        <p className='country-content-text mt-3 mb-0'>English, Japanese, Chinese, German, Hindi, French, Korean, Portuguese, Italian, Spanish, Indonesian, Dutch, Turkish, Filipino, Polish, Swedish, Bulgarian, Romanian, Arabic, Czech, Greek, Finnish, Croatian, Malay, Slovak, Danish, Tamil, Ukrainian, Russian, Vietnamese, Norwegian, Hungarian, Chinese Traditional</p>
                        <h1 className='mt-4 mb-0'>Please enter 100 to 800 Characters</h1>
                        <textarea
                            rows="4"
                            cols="50"
                            name="comment"
                            form="usrform"
                            placeholder="Enter your Text.."
                            className='input-text-comment-content'
                        />
                        <div className='d-flex align-items-center justify-content-end max-text-content '>
                            <p className='mb-0'>0/800</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-end mt-4'>
                            <Button onClick={handleNext} width="170px" text="Next" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default InputText
