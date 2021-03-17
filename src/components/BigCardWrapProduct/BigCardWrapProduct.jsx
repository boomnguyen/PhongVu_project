import React from 'react';
import CardProductSmall from '../CardProduct/CardProductSmall/CardProductSmall';
import './BigCardWrapProduct.scss'

const BigCardWrapProduct = () => {
    return (
        <div className="main__bigCardWrapProduct">
            <div className="bigCardWrapProduct-name">
                <h4>LAPTOP - MACBOOK</h4>
                <p>Xem tất cả <i class="fas fa-chevron-right"></i></p>
            </div>
            <div className="bigCardWrapProduct-product-item">
                <div className="wrap-img">
                    <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/24/20210224_621a7320-ab2f-4c19-844f-767b374c59df.jpg" alt="" />
                </div>
                <div className="wrap-product-small">
                    <CardProductSmall />
                    <CardProductSmall />
                    <CardProductSmall />
                    <CardProductSmall />
                </div>
            </div>
        </div>
    )
}

export default BigCardWrapProduct
