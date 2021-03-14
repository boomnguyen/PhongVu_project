import React from 'react';
import './Toolbar.scss';

import logo from '../../../assets/images/logo-full.svg'

const Toolbar = (props) => {
    return (
        <div className="header__toolbar">
            <div className="header__toolbar__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header__toolbar__search">
                <input type="text" placeholder="Nhập từ kháo cần tìm" />
                <div className="toolbar__search-wrap">
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="header__toolbar__item">
                <div className="toolbar__item-voucher">
                    <i className="fas fa-tag"></i>
                    <span className="toolbar__item-title">Khuyến mãi</span>
                </div>

                <div className="toolbar__item-order">
                    <i className="fas fa-clipboard-list"></i>
                    <span className="toolbar__item-title">Đơn hàng</span>
                </div>

                <div className="toolbar__item-login">
                    <i className="far fa-user-circle"></i>
                    <span className="toolbar__item-title">Đăng nhập</span>
                </div>

                <div className="toolbar__item-cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="toolbar__item-title">Giỏ hàng</span>
                </div>
            </div>
        </div>
    );
}

export default Toolbar;