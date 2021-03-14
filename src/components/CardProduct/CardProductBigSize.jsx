import React, { Fragment, useState } from 'react';
import './CardProductBigSize.scss'

import ButtonContact from '../UI/buttonContact/ButtonContact'
import GiftCard from './GiftCard/GiftCard';
import gift1 from '../../assets/images/cart_product/cart_product_big_size/gift-balo.jpg'

const CartProductBigSize = (props) => {
    const [showBtn, setShowBtn] = useState(false)
    let price = null
    if (showBtn) {
        price = null
    } else {
        price = (
            <Fragment>
                <div className="card_big_size-newPrice">
                    <span className="newprice">26.990.000đ</span>
                    <i class="fas fa-truck"></i>
                </div>
                <div className="card_big_size-oldPrice">
                    <span className="oldPrice">28.990.000đ</span>
                    <span className="discount_percent">7%</span>
                </div>
            </Fragment>
        )
    }

    return (
        <div className="card_product_big_size">
            <div className="card_product_big_size-sub">
                <img className="card_product_big_size-img" src={props.url} alt="" />
                <span className="card_big_size-name">Laptop ASUS Vivobook E210MA GJ083T ( 11.6" HD/Intel Celeron N4020/4GB/128GB SSD/Windows 10 Home SL 64-bit/1kg)</span>
                <ButtonContact show={showBtn} />
                {price}
                <GiftCard url={gift1} />
            </div>
        </div>
    )
}

export default CartProductBigSize
