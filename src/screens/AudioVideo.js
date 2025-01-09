import React, { useState } from 'react';
import Header from '../components/Header'
import TabHeader from '../components/TabHeader'
import Images from '../assets/Images'
import Button from '../components/Button';
import Footer from '../components/Footer';
import Select from 'react-select';
import { useNavigate } from "react-router-dom"; // Import useNavigate


const AudioVideo = () => {
    const [fileName, setFileName] = useState(null);
    const [showPreview, setShowPreview] = useState(false);
    const [modal, setModal] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAccent, setSelectedAccent] = useState(null);
    const [selectedAge, setSelectedAge] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && (file.type.startsWith("audio") || file.type.startsWith("video"))) {
            setFileName(file);
        } else {
            alert("Please select a valid audio or video file.");
        }
    };

    const handlePreviewClose = () => {
        setShowPreview(false);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    const accentOptions = [
        { value: 'australian', label: 'Australian' },
        { value: 'american', label: 'American' },
        { value: 'british', label: 'British' },
        { value: 'indian', label: 'Indian' },
    ];

    const ageOptions = [
        { value: 'young', label: 'Young' },
        { value: 'old', label: 'Old' },
        { value: 'middle_aged', label: 'Middle Aged' },
    ];

    const genderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ];



    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/preview");
    };



    return (

        <div className='main-header-content'>
            <Header />
            <TabHeader />
            <div className="banner-content-container">
                <div className='u-photo-section-container mb-5'>
                    <div className='lets-go-container'>

                        <h1>Upload an Audio or Video file of your LovedOne’s voice to have the text spoken in the LovedOne’s Voice.</h1>
                        <p className='audio-video-text-content mt-3'>(No worries if you don’t have an audio or video file. We have plenty of voices to choose from below!)</p>
                        <p className='audio-video-text-content mt-4'>The files must be:</p>
                        <div className='mt-4'>
                            <div className='count-content-text d-flex align-items-center'>
                                <span className=' d-flex align-items-center justify-content-center'>1</span>
                                <p className='mb-0'>Clear without static or background noise.</p>
                            </div>
                            <div className='count-content-text d-flex align-items-center mt-4'>
                                <span className=' d-flex align-items-center justify-content-center'>2</span>
                                <p className='mb-0'>Not less than five seconds or more than two minutes long.</p>
                            </div>
                            <div className='count-content-text d-flex align-items-center mt-4'>
                                <span className=' d-flex align-items-center justify-content-center'>3</span>
                                <p className='mb-0'>Only your Loved One should be speaking, this will ensure a more accurate voice clone of your Loved One.</p>
                            </div>

                        </div>
                        <>
                            <label
                                className="upload-pic-container d-flex align-items-center justify-content-center flex-column"
                                htmlFor="uploadPicInput"
                            >
                                <input
                                    type="file"
                                    id="uploadPicInput"
                                    style={{ display: "none" }}
                                    onChange={handleFileChange}
                                    accept="audio/*,video/*"
                                />
                                <div className="d-flex align-items-center justify-content-center flex-column">
                                    {!fileName && <p>Click Here</p>}

                                    <img
                                        src={fileName ? Images.selectAudioVideo : Images.upload}
                                        alt="Audio or Video"
                                        style={{ width: "45px", height: "45px", objectFit: "cover", marginBottom: "10px" }}
                                    />

                                    {!fileName ? (
                                        <p>Upload Audio or Video File</p>
                                    ) : (
                                        <>
                                            <p className="mt-3 text-center" style={{ color: "#306C36" }}>
                                                {fileName.name}
                                            </p>
                                        </>
                                    )}
                                </div>
                            </label>
                            <div className='d-flex align-items-center justify-content-end'>
                                <button
                                    type="button"
                                    className="btn btn-link p-0 mt-2"
                                    onClick={() => setShowPreview(true)}
                                    style={{ color: "#007BFF", textDecoration: "underline" }}
                                >
                                    Preview
                                </button>
                            </div>
                            {showPreview && (
                                <div className="popup-overlay popup-audio-video-conatiner">
                                    <div className="popup-content popup-audio-video-preview " >
                                        <button
                                            className="close-btn popup-closeButton popup-preview-close-btn"
                                            onClick={handlePreviewClose}
                                        >
                                            &times;
                                        </button>
                                        
                                        {fileName.type.startsWith("audio") && (
                                            <audio
                                                controls
                                                src={URL.createObjectURL(fileName)}
                                                style={{ width: "100%" }}
                                            >
                                                Your browser does not support the audio element.
                                            </audio>
                                        )}
                                        {fileName.type.startsWith("video") && (
                                            <video 
                                                controls
                                                src={URL.createObjectURL(fileName)}
                                                style={{ width: "100%",maxWidth:"400px",height:"100%",maxHeight:"400px" }}
                                            >
                                                Your browser does not support the video element.
                                            </video>
                                        )}
                                        <p className='mb-0'>This is your video preview</p>
                                    </div>
                                </div>
                            )}
                        </>

                        <div className='d-flex align-items-center justify-content-between gap-md-4 gap-sm-2 gap-2 mt-5'>
                            <Button onClick={handleNext} width='50%' text="Submit" />
                            <p style={{ fontWeight: 900 }} className='audio-video-text-content mb-0'>OR</p>
                            <button className="btn-modal choose-btn-content" onClick={handleOpenModal}>
                                Choose a Voice
                            </button>
                        </div>
                        {isModalOpen && (
                            <div className="modal-overlay choose-btn-popup-header">
                                <div className="modal-content choose-btn-popup-container">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div className='lets-go-container'>
                                            <h1>Choose a Voice</h1>
                                        </div>
                                        <button className="btn-close choose-btn-popup-close" onClick={handleCloseModal}> </button>
                                    </div>

                                    <div className='d-flex align-items-center justify-content-between flex-wrap mt-4'>

                                        <div style={{ position: 'relative', marginBottom: '20px', maxWidth: '220px', width: "100%", }}>
                                            <Select
                                                options={accentOptions}
                                                value={selectedAccent}
                                                onChange={setSelectedAccent}
                                                placeholder="Choose an Accent"
                                                styles={customStyles}
                                            />
                                            <img
                                                src={Images.chooseAccent}
                                                alt="Accent Icon"
                                                style={liststyle}
                                            />
                                        </div>
                                        <div style={{ position: 'relative', marginBottom: '20px', maxWidth: '220px', width: "100%" }}>
                                            <Select
                                                options={ageOptions}
                                                value={selectedAge}
                                                onChange={setSelectedAge}
                                                placeholder="Choose Age"
                                                styles={customStyles}
                                            />
                                            <img
                                                src={Images.age}
                                                alt="Age Icon"
                                                style={liststyle}
                                            />
                                        </div>
                                        <div style={{ position: 'relative', marginBottom: '20px', maxWidth: '220px', width: "100%" }}>
                                            <Select
                                                options={genderOptions}
                                                value={selectedGender}
                                                onChange={setSelectedGender}
                                                placeholder="Choose Gender"
                                                styles={customStyles}
                                            />
                                            <img
                                                src={Images.gender}  // Image for gender dropdown
                                                alt="Gender Icon"
                                                style={liststyle}
                                            />
                                        </div>
                                    </div>
                                    <p style={{ color: "#7D7D7D" }} className='audio-video-text-content text-start'>* Voices Powered by ElevenLabs</p>
                                    <div className='popup-scroller-conatiner' style={{ height: "400px" }}>
                                        <a href='#!' className="d-flex align-items-center justify-content-between audio-video-play-option text-decoration-none text-black">
                                            <div className="d-flex flex-column gap-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <p className="mb-0 audio-video-text-content">Robert</p>
                                                    <img src={Images.male} alt="Male Icon" />
                                                </div>
                                                <p style={{ color: "#7d7d7d" }} className="audio-video-text-content mb-0 text-start">Male | Young | American</p>
                                            </div>
                                            <img src={Images.playButton} alt="Play Button" />
                                        </a>
                                        <a href='#!' className="d-flex align-items-center justify-content-between audio-video-play-option mt-4 text-decoration-none text-black">
                                            <div className="d-flex flex-column gap-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <p className="mb-0 audio-video-text-content">Robert</p>
                                                    <img src={Images.male} alt="Male Icon" />
                                                </div>
                                                <p style={{ color: "#7d7d7d" }} className="audio-video-text-content mb-0 text-start">Male | Young | American</p>
                                            </div>
                                            <img src={Images.playButton} alt="Play Button" />
                                        </a>
                                        <a href='#!' className="d-flex align-items-center justify-content-between audio-video-play-option mt-4 text-decoration-none text-black">
                                            <div className="d-flex flex-column gap-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <p className="mb-0 audio-video-text-content">Robert</p>
                                                    <img src={Images.male} alt="Male Icon" />
                                                </div>
                                                <p style={{ color: "#7d7d7d" }} className="audio-video-text-content mb-0 text-start">Male | Young | American</p>
                                            </div>
                                            <img src={Images.playButton} alt="Play Button" />
                                        </a>
                                        <a href='#!' className="d-flex align-items-center justify-content-between audio-video-play-option mt-4 text-decoration-none text-black">
                                            <div className="d-flex flex-column gap-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <p className="mb-0 audio-video-text-content">Robert</p>
                                                    <img src={Images.male} alt="Male Icon" />
                                                </div>
                                                <p style={{ color: "#7d7d7d" }} className="audio-video-text-content mb-0 text-start">Male | Young | American</p>
                                            </div>
                                            <img src={Images.playButton} alt="Play Button" />
                                        </a>
                                        <a href='#!' className="d-flex align-items-center justify-content-between audio-video-play-option mt-4 text-decoration-none text-black">
                                            <div className="d-flex flex-column gap-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <p className="mb-0 audio-video-text-content">Robert</p>
                                                    <img src={Images.male} alt="Male Icon" />
                                                </div>
                                                <p style={{ color: "#7d7d7d" }} className="audio-video-text-content mb-0 text-start">Male | Young | American</p>
                                            </div>
                                            <img src={Images.playButton} alt="Play Button" />
                                        </a>
                                        <a href='#!' className="d-flex align-items-center justify-content-between audio-video-play-option mt-4 text-decoration-none text-black">
                                            <div className="d-flex flex-column gap-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <p className="mb-0 audio-video-text-content">Robert</p>
                                                    <img src={Images.male} alt="Male Icon" />
                                                </div>
                                                <p style={{ color: "#7d7d7d" }} className="audio-video-text-content mb-0 text-start">Male | Young | American</p>
                                            </div>
                                            <img src={Images.playButton} alt="Play Button" />
                                        </a>
                                        <a href='#!' className="d-flex align-items-center justify-content-between audio-video-play-option mt-4 text-decoration-none text-black">
                                            <div className="d-flex flex-column gap-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <p className="mb-0 audio-video-text-content">Robert</p>
                                                    <img src={Images.male} alt="Male Icon" />
                                                </div>
                                                <p style={{ color: "#7d7d7d" }} className="audio-video-text-content mb-0 text-start">Male | Young | American</p>
                                            </div>
                                            <img src={Images.playButton} alt="Play Button" />
                                        </a>
                                    </div>
                                    <Button onClick={handleNext} marginTop={"20px"} text="Submit" />
                                </div>
                            </div>
                        )}
                        <div className='d-flex align-items-center justify-content-center flex-column mt-5'>
                            <p className='audio-video-text-content '>No worries if you don’t have an audio or video file, we have plenty of voices to choose from.</p>
                            <p style={{ color: "#7D7D7D" }} className='audio-video-text-content'>* Voices Powered by ElevenLabs</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

const liststyle = {
    position: 'absolute',
    top: '14px',
    left: '19px',
    width: '22px',
    height: '22px',


}
const customStyles = {
    control: (base) => ({
        ...base,
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ddd',
        boxShadow: 'none',
        borderRadius: '25px',
        padding: '5px',
        backgroundColor: '#f7f8fa',

    }),
    valueContainer: (base) => ({
        ...base,
        paddingLeft: '50px',
    }),
    placeholder: (base) => ({
        ...base,
        fontSize: '16px',
        color: '#333',
    }),
    dropdownIndicator: (base) => ({
        ...base,
        color: '#333',
    }),
    singleValue: (base) => ({
        ...base,
        fontSize: '16px',
        color: '#333',
    }),
};


export default AudioVideo