import React from 'react';
import './BannerAdsBottom.scss'

import ProductItemAdsHorizontal from '../../../../components/ProductItemAds/ProductitemAdsHorizontal/ProductItemAdsHorizontal'
import imgAds1 from '../../../../assets/images/product_item/horizontal/main_product_item-adsHorizon-1.webp'
import imgAds2 from '../../../../assets/images/product_item/horizontal/main_product_item-adsHorizon-2.webp'
import imgAds3 from '../../../../assets/images/product_item/horizontal/main_product_item-adsHorizon-3.webp'
import imgAds4 from '../../../../assets/images/product_item/horizontal/main_product_item-adsHorizon-4.webp'

const BannerAdsBottom = () => {
    return (
        <div className="product__item-wrapAdsHorizontal">
            <ProductItemAdsHorizontal url={imgAds1} />
            <ProductItemAdsHorizontal url={imgAds2} />
            <ProductItemAdsHorizontal url={imgAds3} />
            <ProductItemAdsHorizontal url={imgAds4} />
        </div>
    )
}

export default BannerAdsBottom
