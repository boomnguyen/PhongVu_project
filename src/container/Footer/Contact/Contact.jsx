import React from 'react';
import './Contact.scss'

const Contact = () => {
    return (
        <div className="footer__contact">
            <div className="footer__contact-methodPayment">
                <h4>Phương thức thanh toán</h4>
                <ul>
                    <li><i className="fas fa-qrcode"></i>QR Code</li>
                    <li><i className="fas fa-money-bill"></i>Tiền mặt</li>
                    <li><i className="far fa-clock"></i>Trả góp</li>
                    <li><i className="far fa-credit-card"></i>Internet Banking</li>
                </ul>
            </div>
            <div className="footer__contact-listPayment">
                <h4>Danh sách các ngân hàng thanh toán online</h4>
                <img src="https://phongvu.vn/media/wysiwyg/phongvu/phongvu_v3/banklist.jpg" alt="" />
            </div>
        </div>
    )
}

export default Contact
