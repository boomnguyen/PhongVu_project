import React from 'react';
import './SaleProductItem.scss'

import CardProductBigSize from '../../../../components/CardProduct/CardProductBigSize';
import cardBigSize1 from '../../../../assets/images/cart_product/cart_product_big_size/asus-1.jpg'
import cardBigSize2 from '../../../../assets/images/cart_product/cart_product_big_size/asus-2.jpg'
import cardBigSize3 from '../../../../assets/images/cart_product/cart_product_big_size/asus-3.jpg'
import cardBigSize4 from '../../../../assets/images/cart_product/cart_product_big_size/asus-4.jpg'

const SaleproductItem = () => {
    return (
        <div className="sale_product-item">
            <CardProductBigSize url={cardBigSize1} />
            <CardProductBigSize url={cardBigSize2} />
            <CardProductBigSize url={cardBigSize3} />
            <CardProductBigSize url={cardBigSize4} />
        </div>
    )
}

export default SaleproductItem
