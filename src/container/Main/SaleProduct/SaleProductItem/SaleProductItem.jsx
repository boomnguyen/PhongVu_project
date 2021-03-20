import React from 'react';
import './SaleProductItem.scss'

import db from '../../../../db.json';
import CardProductBigSize from '../../../../components/CardProduct/CardProductBigSize/CardProductBigSize';
import cardBigSize1 from '../../../../assets/images/cart_product/cart_product_big_size/asus-1.jpg'
import cardBigSize2 from '../../../../assets/images/cart_product/cart_product_big_size/asus-2.jpg'
import cardBigSize3 from '../../../../assets/images/cart_product/cart_product_big_size/asus-3.jpg'
import cardBigSize4 from '../../../../assets/images/cart_product/cart_product_big_size/asus-4.jpg'

const SaleproductItem = (props) => {
    const arr = db.laptops.slice(0, 4)
    console.log(arr);

    return (
        <div className="sale_product-item">
            {
                arr.map(product => {
                    return <CardProductBigSize
                        url={product.image}
                        urlGift={product.gift}
                        name={product.name}
                        price={product.price}
                        discountPrice={product.discountPrice}
                    />
                })
            }

        </div>
    )
}

export default SaleproductItem
