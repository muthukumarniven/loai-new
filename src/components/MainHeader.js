import React, { useState, useRef, useEffect } from 'react';
import Images from '../assets/Images'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button';

const MainHeader = () => {
    const navi = useLocation();
    const mobilePopupRef = useRef(null);

    return (
        <>
            <nav className="navbar navbar-expand-xl bg-body-tertiary shadow-sm">
                <div className="container-fluid px-xl-5 px-3">
                    <a className="navbar-brand loai-web-logo d-sm-block d-none" href="#"><img src={Images.loaiLogo} /></a>
                    <a className="navbar-brand loai-web-logo d-sm-none d-block" href="#"><img style={{ width: "100%", height: "100%", maxWidth: "50px", maxHeight: "50px" }} src={Images.logoSm} /></a>

                    <div className="d-flex align-items-center gap-md-2 gap-1">


                        <div className="nav-item d-xl-none d-block" ref={mobilePopupRef}>
                            <Link
                                className="nav-link text-black d-flex gap-2 text-decoration-none"
                                to=""
                                style={{ fontFamily: navi.pathname === "/create-video" ? "Inter-Bold" : "Inter-Regular" }}
                            >
                                Sign In
                            </Link>
                        </div>
                        <div className="nav-item popup-avatar-content d-xl-none d-block">
                            <Button padding='12px 22px' text="Sign up" />
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
                                        to="/main-home"
                                        style={{ fontFamily: navi.pathname === "/main-home" ? "Inter-Bold" : "Inter-Regular" }}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link text-black d-flex gap-2 text-decoration-none"
                                        to=""
                                        style={{ fontFamily: navi.pathname === "" ? "Inter-Bold" : "Inter-Regular" }}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link text-black d-flex gap-2 text-decoration-none"
                                        to=""
                                        style={{ fontFamily: navi.pathname === "/create-video" ? "Inter-Bold" : "Inter-Regular" }}
                                    >
                                        How it Works
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link text-black d-flex gap-2 text-decoration-none" to="" style={{ fontFamily: navi.pathname === "" ? "Inter-Bold" : "Inter-Regular" }}>Sample Videos</Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link text-black d-flex gap-2 text-decoration-none"
                                        to=""
                                        style={{ fontFamily: navi.pathname === "/create-video" ? "Inter-Bold" : "Inter-Regular" }}
                                    >
                                        Support
                                    </Link></li>
                                <li className='d-xl-block d-none'>
                                    <Link
                                        className="nav-link text-black d-flex gap-2 text-decoration-none"
                                        to=""
                                        style={{ fontFamily: navi.pathname === "/create-video" ? "Inter-Bold" : "Inter-Regular" }}
                                    >
                                        Sign In
                                    </Link>
                                </li>
                                <li className='d-xl-block d-none'>
                                    <Button padding='12px 22px' text="Sign up" />
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default MainHeader