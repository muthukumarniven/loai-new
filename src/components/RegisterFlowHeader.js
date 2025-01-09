import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Images from '../assets/Images';


const RegisterFlowHeader = () => {
    // const navi = useLocation();
    // const mobilePopupRef = useRef(null);
    return (
        <>
            <nav className="navbar navbar-expand-xl bg-body-tertiary shadow-sm">
                <div className="container-fluid px-xl-5 px-3">
                    <Link  to="/" className="navbar-brand loai-web-logo d-sm-block d-none" href="#"><img src={Images.loaiLogo} /></Link>
                    <Link  to="/" className="navbar-brand loai-web-logo d-sm-none d-block" href="#"><img style={{ width: "100%", height: "100%", maxWidth: "50px", maxHeight: "50px" }} src={Images.logoSm} /></Link>
                    <div className="d-flex align-items-center gap-md-2 gap-1">
                        <button className="navbar-toggler border-0 header-navbar-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon navbar-s-icon"></span>
                        </button>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default RegisterFlowHeader