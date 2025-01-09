import React, { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
import Images from '../assets/Images'
import Button from '../components/Button';
import TabHeader from '../components/TabHeader';
import { useNavigate } from "react-router-dom"; 


const CreateVideo = () => {
    const [fileName, setFileName] = useState(null);
    const navigate = useNavigate(); 


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image")) {
            setFileName(file);
        } else {
            alert("Please select a valid image file.");
        }
    };


    const handleNext = () => {
        navigate("/input-text"); 
    };
    return (
        <div className='main-header-content'>
            <Header />
            <TabHeader />

            <div className="banner-content-container">
                <div className='u-photo-section-container mb-5'>
                    <div className='lets-go-container'>

                        <h1>Upload a Photo of your Loved One </h1>
                        <div className='mt-4'>
                            <div className='count-content-text d-flex align-items-center'>
                                <span className=' d-flex align-items-center justify-content-center'>1</span>
                                <p className='mb-0'>Upload a clear high definition photo of your Loved One front facing from the shoulders up. (Crop as needed).</p>
                            </div>
                            <div className='count-content-text d-flex align-items-center mt-4'>
                                <span className=' d-flex align-items-center justify-content-center'>2</span>
                                <p className='mb-0'>The lips must be showing for the best results.</p>
                            </div>
                            <div className='count-content-text d-flex align-items-center mt-4'>
                                <span className=' d-flex align-items-center justify-content-center'>3</span>
                                <p className='mb-0'>The higher the quality of the photo and the larger the image file the better the custom Video of your Loved Ones will turn out!  </p>
                            </div>
                        </div>

                        <label
                            className="upload-pic-container d-flex align-items-center justify-content-center flex-column"
                            htmlFor="uploadPicInput"
                        >
                            <input
                                type="file"
                                id="uploadPicInput"
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                                accept="image/*"
                            />
                            <div className="d-flex align-items-center justify-content-center flex-column">
                                {!fileName ? (
                                    <>
                                        <p>Click Here</p>
                                        <img src={Images.upload} alt="Upload" />
                                        <p>to upload photo</p>
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src={URL.createObjectURL(fileName)}
                                            alt="Uploaded"
                                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                        />
                                        <p className='mt-3 text-center' style={{ color: "#306C36" }}>Selected file: {fileName.name}</p>
                                    </>
                                )}
                            </div>
                        </label>

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

export default CreateVideo