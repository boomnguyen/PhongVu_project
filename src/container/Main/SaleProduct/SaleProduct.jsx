import React from 'react';

import './SaleProduct.scss'
import SaleProductItem from './SaleProductItem/SaleProductItem';
import bgImg from '../../../assets/images/cart_product/cart_product_big_size/bg-cart-big-size.jpg'


const SaleProduct = () => {
    return (
        <div className="main__sale_product">
            <img src={bgImg} alt="" />
            <SaleProductItem />
        </div>
    )
}

export default SaleProduct
