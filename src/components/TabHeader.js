import React, { useEffect, useState } from "react";
import Images from '../assets/Images'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const TabHeader = () => {

    const navi = useLocation()

    console.log(navi.pathname);
    

    return (
        <>
            <div className=' banner-content-container mt-5'>
                <div className='d-flex align-items-center justify-content-between tab-header-section '>
                    <div
                        className={navi.pathname === "/create-video" ? 'active-tab-container' : 'unactive-tab-container'}
                    >
                        <Link className="nav-link d-flex gap-2 text-decoration-none" to="/create-video">
                            <img
                                src={navi.pathname === "/create-video" ? Images.uploadPhotoActive : Images.uploadPhoto}
                                alt="Create Events"
                            />
                            Upload Photo
                        </Link>
                    </div>

                    <div
                        className={navi.pathname === "/input-text" ? 'active-tab-container' : 'unactive-tab-container'}
                    >
                        <Link className="nav-link d-flex gap-2 text-decoration-none" to="/input-text">
                            <img
                                src={navi.pathname === "/input-text" ? Images.inputTextActive : Images.inputText}
                                alt="Input Text"
                            />
                            Input Text
                        </Link>
                    </div>

                    <div
                        className={navi.pathname === "/audio-video" ? 'active-tab-container' : 'unactive-tab-container'}
                    >
                        <Link className="nav-link d-flex gap-2 text-decoration-none" to="/audio-video">
                            <img
                                src={navi.pathname === "/audio-video" ? Images.audioVideoActive : Images.audioVideo}
                                alt="Audio or Video"
                            />
                            Audio or Video
                        </Link>
                    </div>

                </div>
            </div >


        </>
    )
}

export default TabHeader