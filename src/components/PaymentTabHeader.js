import React, { useEffect, useState } from "react";
import Images from '../assets/Images'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const PaymentTabHeader = () => {
    const navi = useLocation()
    console.log(navi.pathname);

    return (
        <div className=' banner-content-container mt-5'>
            <div className='d-flex align-items-center justify-content-between tab-header-section '>
                <div
                    className={navi.pathname === "/billing-address" ? 'active-tab-container' : 'unactive-tab-container'}
                >
                    <Link className="nav-link d-flex gap-2 text-decoration-none" to="/billing-address">
                        <img
                            src={navi.pathname === "/billing-address" ? Images.billingAddressActive : Images.billingAddress}
                            alt="billing-address"
                        />
                        Billing Address
                    </Link>
                </div>

                <div
                    className={navi.pathname === "/promocode" ? 'active-tab-container' : 'unactive-tab-container'}
                >
                    <Link className="nav-link d-flex gap-2 text-decoration-none" to="/promocode">
                        <img
                            src={navi.pathname === "/promocode" ? Images.promoActive : Images.promo}
                            alt="Input Text"
                        />
                       Promotion Code
                    </Link>
                </div>
                <div
                    className={navi.pathname === "/payment-method" ? 'active-tab-container' : 'unactive-tab-container'}
                >
                    <Link className="nav-link d-flex gap-2 text-decoration-none" to="/payment-method">
                        <img
                            src={navi.pathname === "/payment-method" ? Images.paymentActive : Images.payment}
                            alt="Input Text"
                        />
                        Payment Method
                    </Link>
                </div>


            </div>
        </div >
    )
}

export default PaymentTabHeader