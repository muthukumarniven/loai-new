import React from 'react'
import Images from '../assets/Images'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer d-flex align-items-center justify-content-center py-xl-5 py-md-5 py-sm-4 py-4 mt-auto">
            <div>
                <ul className='d-flex list-unstyled gap-xl-5 gap-md-4 gap-sm-3 gap-3 flex-wrap flex-wrap d-flex align-items-center justify-content-center footer-list-content '>
                    <Link to="/about" >About</Link>
                    <li><a href='#!'>How it Works</a></li>
                    <Link to="/sample-videos" > Sample Videos </Link>
                    <Link to="/support" > Support </Link>
                    <li><a href='#!'>Privacy Policy</a></li>
                    <li><a href='#!'>Terms & Condition</a></li>
                </ul>
                <ul className='d-flex list-unstyled gap-xl-5 gap-md-4 gap-sm-3 gap-3  flex-wrap d-flex align-items-center justify-content-center social-media-list-items pt-xl-4 pt-md-4 pt-sm-4 pt-4'>
                    <li><a className='app-download-platform' href='#!'><img src={Images.appStore} alt="appStore" /></a></li>
                    <li><a className='social-media-icon' href='#!'><img src={Images.facebook} alt="facebook" /></a></li>
                    <li><a className='social-media-icon' href='#!'><img src={Images.instagram} alt="instagram" /></a></li>
                    <li><a className='social-media-icon' href='#!'><img src={Images.youtube} alt="youtube" /></a></li>
                    <li><a className='social-media-icon' href='#!'><img src={Images.tiktok} alt="tiktok" /></a></li>
                    <li><a className='social-media-icon' href='#!'><img src={Images.x} alt="x" /></a></li>
                    <li><a className='social-media-icon' href='#!'><img src={Images.linkdin} alt="linkdin" /></a></li>
                    <li><a className='app-download-platform' href='#!'><img src={Images.googlePlay} alt="googlePlay" /></a></li>
                </ul>
                <div className='copy-rights-content d-flex align-items-center justify-content-center flex-wrap gap-3 pt-xl-4 pt-md-4 pt-sm-4 pt-4'>
                    <img src={Images.logo} alt="linkdin" />
                    <p>© All rights reserved.</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer