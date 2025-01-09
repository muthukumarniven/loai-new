import React, { useState, useRef, useEffect } from 'react';
import Images from '../assets/Images'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navi = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [showMobilePopup, setShowMobilePopup] = useState(false);
    const [showDesktopPopup, setShowDesktopPopup] = useState(false);
    const [showSignOutPopup, setShowSignOutPopup] = useState(false);

    const menuRef = useRef(null);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const mobilePopupRef = useRef(null);
    const desktopPopupRef = useRef(null);

    const toggleMobilePopup = () => setShowMobilePopup(!showMobilePopup);
    const toggleDesktopPopup = () => setShowDesktopPopup(!showDesktopPopup);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobilePopupRef.current && !mobilePopupRef.current.contains(event.target)) {
                setShowMobilePopup(false);
            }
            if (desktopPopupRef.current && !desktopPopupRef.current.contains(event.target)) {
                setShowDesktopPopup(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const toggleSignOutPopup = () => setShowSignOutPopup(!showSignOutPopup);

    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/main-home");
    };

    return (
        <>
            <nav className="navbar navbar-expand-xl bg-body-tertiary shadow-sm">
                <div className="container-fluid px-xl-5 px-3">
                    <Link to="/" className="navbar-brand loai-web-logo d-sm-block d-none" href="#"><img src={Images.loaiLogo} /></Link>
                    <Link to="/" className="navbar-brand loai-web-logo d-sm-none d-block" href="#"><img style={{ width: "100%", height: "100%", maxWidth: "50px", maxHeight: "50px" }} src={Images.logoSm} /></Link>
                    <div className="d-flex align-items-center gap-md-2 gap-1">
                        <div className="nav-item d-xl-none d-block" ref={mobilePopupRef}>
                            <Link className="nav-link" to="#" onClick={toggleMobilePopup}>
                                <img src={Images.notificationBell} alt="Notifications" />
                            </Link>
                            {showMobilePopup && (
                                <div className="notification-popup">
                                    <div className="notification-header">
                                        <h4>Notification</h4>
                                        <button className="notification-close" onClick={toggleMobilePopup}>×</button>
                                    </div>
                                    <div className='px-3'>
                                        <button className="notification-filter">This Week</button>
                                    </div>
                                    <div className="notification-items px-3">
                                        {[1, 2, 3, 4, 5].map((item, index) => (
                                            <div key={index} className="notification-item">
                                                <h5 style={{ fontSize: "14px" }}>Your LovedOnes.ai Video is Ready!</h5>
                                                <p className='audio-video-text-content'>‘2154’ video creation completed</p>
                                                <p className='audio-video-text-content'>1 min</p>
                                                <div className="notification-dot"></div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="notification-footer">
                                        <Link
                                            style={{ color: "#007BFF" }}
                                            className="audio-video-text-content"
                                            to="/notification"
                                            onClick={() => setShowMobilePopup(false)}
                                        >
                                            View all
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>


                        <div className="nav-item popup-avatar-content d-xl-none d-block">
                            <a className="nav-link profile-home" href="#" onClick={toggleMenu}>
                                <img src={Images.profile} alt="Profile Avatar" className="avatar-image" />
                            </a>
                            {isOpen && (
                                <div className="avatar-popup">
                                    <ul>
                                        <li>
                                            <Link className='text-decoration-none' to="/profile">

                                                <img src={Images.profileIcon} alt="Profile Icon" />
                                                <span className='profile-popup-list text-black' to="/profile">Profile</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link style={{ textDecoration: "none" }} to="/transcation-histoy">
                                                <img src={Images.transactionIcon} alt="Transaction Icon" />
                                                <span className='profile-popup-list text-dark'>Transaction History</span>
                                            </Link>
                                        </li>


                                        <li onClick={toggleSignOutPopup} style={{ cursor: 'pointer' }}>
                                            <img src={Images.signOutIcon} alt="Sign Out Icon" />
                                            <span className='profile-popup-list'>Sign out</span>
                                        </li>

                                        {showSignOutPopup && (
                                            <div className="signout-popup">
                                                <div className="popup-content d-flex flex-column gap-4">
                                                    <div className='lets-go-container'>
                                                        <h1>Are you sure you want to sign out?
                                                        </h1>
                                                    </div>
                                                    <div className='row'>
                                                        <div className=' col-md-12'>
                                                            <div className='d-flex align-items-center justify-content-between gap-md-4 gap-sm-2 gap-2'>
                                                                <button onClick={toggleSignOutPopup} className="btn-modal choose-btn-content rounded-5" >
                                                                    Cancel
                                                                </button>
                                                                <Button onClick={handleNext} borderRadius='40px' width='50%' text="Sign Out" />
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <button className="navbar-toggler border-0 header-navbar-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon navbar-s-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse align-items-start justify-content-end" id="navbarSupportedContent">
                        <div className="d-flex" role="search">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 header-nav-items gap-xl-2 gap-3 align-items-xl-center align-items-start flex-wrap">
                                <li>
                                    <Link
                                        className="nav-link text-black d-flex gap-2 text-decoration-none"
                                        to="/"
                                        style={{ fontFamily: navi.pathname === "/" ? "Inter-Bold" : "Inter-Regular" }} >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link text-black d-flex gap-2 text-decoration-none"
                                        to="/create-video"
                                        style={{ fontFamily: navi.pathname === "/create-video" ? "Inter-Bold" : "Inter-Regular" }}
                                    >
                                        Create a Video
                                    </Link></li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">How it Works</a>
                                </li>

                                <li>
                                    <Link className="nav-link text-black d-flex gap-2 text-decoration-none" to="/sample-videos" style={{ fontFamily: navi.pathname === "/sample-videos" ? "Inter-Bold" : "Inter-Regular" }}>Sample Videos</Link>
                                </li>
                                <li>
                                    <Link className="nav-link text-black d-flex gap-2 text-decoration-none" to="/my-videos" style={{ fontFamily: navi.pathname === "/my-videos" ? "Inter-Bold" : "Inter-Regular" }}>My Videos</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Help
                                    </a>
                                    <ul className="dropdown-menu p-3 ">
                                        <li>  <Link className="text-decoration-none" to="/help" ><img src={Images.help} alt="Notifications" /> Help </Link>
                                        </li>
                                        <li className="mt-3"><Link className="text-decoration-none" to="/support" > <img src={Images.support} alt="Notifications" /> Support </Link></li>
                                    </ul>
                                </li>


                                <li className="nav-item d-xl-block d-none" ref={desktopPopupRef}>
                                    <a className="nav-link" href="#" onClick={toggleDesktopPopup}>
                                        <img src={Images.notificationBell} alt="Notifications" />
                                    </a>
                                    {showDesktopPopup && (
                                        <div className="notification-popup">
                                            <div className="notification-header">
                                                <h4>Notification</h4>
                                                <button className="notification-close" onClick={toggleDesktopPopup}>×</button>
                                            </div>
                                            <div className='px-3'>
                                                <button className="notification-filter">This Week</button>
                                            </div>
                                            <div className="notification-items px-3">
                                                {[1, 2, 3, 4, 5].map((item, index) => (
                                                    <div key={index} className="notification-item">
                                                        <h5 style={{ fontSize: "14px" }}>Your LovedOnes.ai Video is Ready!</h5>
                                                        <p className='audio-video-text-content'>‘2154’ video creation completed</p>
                                                        <p className='audio-video-text-content'>1 min</p>
                                                        <div className="notification-dot"></div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="notification-footer">
                                                <Link
                                                    style={{ color: "#007BFF" }}
                                                    className="audio-video-text-content"
                                                    to="/notification"
                                                    onClick={() => setShowDesktopPopup(false)}
                                                >
                                                    View all
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </li>

                                <li className="nav-item popup-avatar-content d-xl-block d-none">
                                    <a className="nav-link profile-home" href="#" onClick={toggleMenu}>
                                        <img src={Images.profile} alt="Profile Avatar" className="avatar-image" />
                                    </a>
                                    {isOpen && (
                                        <div className="avatar-popup">
                                            <ul>
                                                <li>
                                                    <Link style={{ textDecoration: "none" }} to="/profile">
                                                        <img src={Images.profileIcon} alt="Profile Icon" />
                                                        <span className='profile-popup-list' to="/profile">Profile</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link style={{ textDecoration: "none" }} to="/transcation-histoy">
                                                        <img src={Images.transactionIcon} alt="Transaction Icon" />
                                                        <span className='profile-popup-list'>Transaction History</span>
                                                    </Link>
                                                </li>

                                                <li onClick={toggleSignOutPopup} style={{ cursor: 'pointer' }}>
                                                    <img src={Images.signOutIcon} alt="Sign Out Icon" />
                                                    <span className='profile-popup-list'>Sign out</span>
                                                </li>

                                                {/* Sign-out Confirmation Popup */}
                                                {showSignOutPopup && (
                                                    <div className="signout-popup">
                                                        <div className="popup-content d-flex flex-column gap-4">
                                                            <div className='lets-go-container'>
                                                                <h1>Are you sure you want to sign out?
                                                                </h1>
                                                            </div>

                                                            <div className='row'>
                                                                <div className=' col-md-12'>
                                                                    <div className='d-flex align-items-center justify-content-between gap-md-4 gap-sm-2 gap-2'>
                                                                        <button onClick={toggleSignOutPopup} className="btn-modal choose-btn-content rounded-5" >
                                                                            Cancel
                                                                        </button>
                                                                        <Button onClick={handleNext} borderRadius='40px' width='50%' text="Sign Out" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header