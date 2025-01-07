import React from 'react'
import Images from '../assets/Images'
import { Link } from 'react-router-dom';


const SubHeader = ({ title, breadcrumbLinks }) => {
    return (
        <div className="container-fluid p-0">
            <div className="checkout-header d-flex flex-column align-items-center justify-content-between">
                <h3 className="checkout-text">{title}</h3>
                <div className="checkout-container">
                    <Link to="/" className="billing-a-text" href="#!">{breadcrumbLinks.home}</Link>
                    <img src={Images.splash} alt="slash" />
                    <a className="check-text" href="#!">{breadcrumbLinks.current}</a>
                </div>
            </div>
        </div>
    )
}

export default SubHeader