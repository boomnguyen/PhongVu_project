import React from 'react';

import './Main.scss'
import Banner from './Banner/Banner'
import BannerMenuLeft from './Banner/BannerMenuLeft/BannerMenuLeft';
import BannerAdsRight from './Banner/BannerAdsRight/BannerAdsRight';
import BannerAdsBottom from './Banner/BannerAdsBottom/BannerAdsBottom';
import SaleProduct from './SaleProduct/SaleProduct';
import BannerFullWidth from '../../components/BannerFullWidth/BannerFullWidth';
import ImgBannerFull1 from '../../assets/images/banner-full-width.webp'
import OutstandBrand from './OutstandBrand/OutstandBrand';

const Main = () => {
    return (
        <div className="main">
            <Banner>
                <BannerMenuLeft />
                <BannerAdsRight />
                <BannerAdsBottom />
            </Banner>
            <div style={{ width: '100%', height: '100px' }}></div>
            <SaleProduct />
            <BannerFullWidth url={ImgBannerFull1} />
            <OutstandBrand />
        </div>
    )
}

export default Main
