import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SubHeader from '../components/SubHeader'
import Images from '../assets/Images'



const transactions = [
    { id: 123456, name: 'Video of my Son', date: '17 Sep 2023 10:34 AM', amount: 'USD 49.99' },
    { id: 123456, name: 'Video of my Son', date: '17 Sep 2023 10:34 AM', amount: 'USD 49.99' },
    { id: 123456, name: 'Video of my Son', date: '17 Sep 2023 10:34 AM', amount: 'USD 49.99' },
    { id: 123456, name: 'Video of my Son', date: '17 Sep 2023 10:34 AM', amount: 'USD 49.99' },
    { id: 123456, name: 'Video of my Son', date: '17 Sep 2023 10:34 AM', amount: 'USD 49.99' },
    { id: 123456, name: 'Video of my Son', date: '17 Sep 2023 10:34 AM', amount: 'USD 49.99' }
];

const TranscationHistory = () => {


    return (
        <div className='main-header-content'>
            <Header />
            <SubHeader
                title="Transaction History"
                breadcrumbLinks={{
                    home: "Home",
                    current: "Transaction History",
                }}
            />
            <div className="banner-content-container mt-5 mb-5">

                <div className='row table-header-conatiner'>
                    <div className="col-lg-8 col-md-7 col-sm-12 w-100 table-h-conatiner">

                        <table className="table">
                            {/* Table Header */}
                            <thead>
                                <tr className="table-transaction-h">
                                    <th className='audio-video-text-content p-3' scope="col">Name</th>
                                    <th className='audio-video-text-content p-3' scope="col">Date</th>
                                    <th className='audio-video-text-content p-3' scope="col">Amount</th>
                                    <th className='audio-video-text-content p-3 text-center' scope="col">Status</th>
                                    <th className='audio-video-text-content p-3 text-center' scope="col">Action</th>
                                </tr>
                            </thead>
                            {/* Table Body */}
                            <tbody>
                                {transactions.map((transaction, index) => (
                                    <tr
                                        key={transaction.id}
                                        className={index % 2 === 0 ? "transaction-table-data" : "transaction-table"}
                                    >
                                        <td className="block-content p-3">
                                            <a href="#!" className="country-content-text text-decoration-none">{transaction.name}</a>
                                        </td>
                                        <td className="block-content p-3">
                                            <a
                                                style={{ color: "#000", fontWeight: 900 }}
                                                href="#!"
                                                className="audio-video-text-content text-decoration-none"
                                            >
                                                {transaction.id}
                                            </a>
                                        </td>
                                        <td className="amount-content p-3">
                                            <a className='country-content-text text-decoration-none' href="#!">
                                                {transaction.date}
                                            </a>
                                        </td>
                                        <td className="succeeded-content text-center p-3">
                                            <a
                                                style={{ color: "#000", fontWeight: 900 }}
                                                className='audio-video-text-content text-decoration-none'
                                                href="#!"
                                            >
                                                {transaction.amount}
                                            </a>
                                        </td>
                                        <td className="details-content text-center p-3">
                                            <a
                                                style={{ color: "#007BFF", fontWeight: 600 }}
                                                className='audio-video-text-content text-decoration-none'
                                                href="#!"
                                            >
                                                <img src={Images.download} alt="download" /> Download
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>





                        <div className='d-flex align-items-center justify-content-center mt-4'>
                            <nav aria-label="Page navigation">
                                <ul className="pagination pagination-custom">
                                    <li className="page-item">
                                        <button className="page-link">&lt;</button>
                                    </li>

                                    <li className="page-item active">
                                        <button className="page-link">1</button>
                                    </li>
                                    <li className="page-item">
                                        <button className="page-link">2</button>
                                    </li>
                                    <li className="page-item">
                                        <button className="page-link">3</button>
                                    </li>
                                    <li className="page-item disabled">
                                        <button className="page-link">...</button>
                                    </li>
                                    <li className="page-item">
                                        <button className="page-link">10</button>
                                    </li>

                                    <li className="page-item">
                                        <button className="page-link">&gt;</button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default TranscationHistory