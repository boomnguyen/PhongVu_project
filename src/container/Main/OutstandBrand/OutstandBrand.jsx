import React from 'react';
import './OutstandBrand.scss'

import ProductItemAdsHorizontal from '../../../components/ProductItemAds/ProductitemAdsHorizontal/ProductItemAdsHorizontal'
import brandMsi from '../../../assets/images/outstand_brand/brand-msi.webp'
import brandHp from '../../../assets/images/outstand_brand/brand-hp.webp'
import brandLg from '../../../assets/images/outstand_brand/brand-lg.webp'
import brandLenovo from '../../../assets/images/outstand_brand/brand-lenovo.webp'

const OutstandBrand = () => {

    return (
        <div className="main__outstand_brand">
            <h4>Thương hiệu nổi bật</h4>
            <div className="main__outstand_brand-list">
                <ProductItemAdsHorizontal
                    url={brandMsi}
                    name="MSI"
                    desc="Made for Gamers and Creators" />
                <ProductItemAdsHorizontal
                    url={brandHp}
                    name="HP"
                    desc="Lễ hội máy tính HP - Ưu đãi cực phê" />
                <ProductItemAdsHorizontal
                    url={brandLg}
                    name="LG"
                    desc="Tháng LG quà mê ly" />
                <ProductItemAdsHorizontal
                    url={brandLenovo}
                    name="Lenovo"
                    desc="Laptop Chơi Game Thực Thụ" />
            </div>
        </div>
    )
}

export default OutstandBrand
