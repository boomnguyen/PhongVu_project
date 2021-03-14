import React from 'react';

import './SaleProduct.scss'
import CardProductBigSize from '../../../components/CardProduct/CardProductBigSize';
import cardBigSize1 from '../../../assets/images/cart_product/cart_product_big_size/asus-1.jpg'
import cardBigSize2 from '../../../assets/images/cart_product/cart_product_big_size/asus-2.jpg'
import cardBigSize3 from '../../../assets/images/cart_product/cart_product_big_size/asus-3.jpg'
import cardBigSize4 from '../../../assets/images/cart_product/cart_product_big_size/asus-4.jpg'

const SaleProduct = () => {
    return (
        <div className="main__sale_product">
            <CardProductBigSize url={cardBigSize1} />
            <CardProductBigSize url={cardBigSize2} />
            <CardProductBigSize url={cardBigSize3} />
            <CardProductBigSize url={cardBigSize4} />
        </div>
    )
}

export default SaleProduct
