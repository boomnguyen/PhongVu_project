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
import BigCardWrapProduct from '../../components/BigCardWrapProduct/BigCardWrapProduct';
import ProductItemAdsHorizontal from '../../components/ProductItemAds/ProductitemAdsHorizontal/ProductItemAdsHorizontal';
import BestSellProduct from './BestSellProduct/BestSellProduct';
import ProductForU from './ProductForU/ProductForU';


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
            <div className="main__wrap-bigCardWrap">
                <BigCardWrapProduct />
                <BigCardWrapProduct />
            </div>
            <BannerFullWidth url={'https://lh3.googleusercontent.com/d5vzKrBxFEswNHhqJ9pWKpZvFc90_0tyjDNXjY3FpGzUVZWDt4n1YhXxjOxgu0kHFvqYOrfojaHBKYonMa9M3gF7r1YoYAWD=w1232-rw'} />
            <div className="main__wrap-bigCardWrap">
                <BigCardWrapProduct />
                <BigCardWrapProduct />
            </div>
            <div className="main__wrap-bigCardWrap">
                <BigCardWrapProduct />
                <BigCardWrapProduct />
            </div>
            <div className="main__wrap-productItemHorizontalBigger">
                <ProductItemAdsHorizontal url={'https://lh3.googleusercontent.com/TJVYcAYb3P_SwTUJiaKSycp5q1MHY4NbCb68ewM0pIfFCJLi9irNodzIBo1dTlt-FVnFx5EgpND7xrmTgGctyz_OPWz0TTI=w411-rw'} />
                <ProductItemAdsHorizontal url={'https://lh3.googleusercontent.com/UHTkZY7ZRMi2_SuSOlfz9vYZBx8FW07rZuqWpIMi9nZ0MawrMEhD_6h7mYal6a8TIGywt6D1e04EFVTHcWyvwdnVIEq1gwUVnA=w411-rw'} />
                <ProductItemAdsHorizontal url={'https://lh3.googleusercontent.com/I5k0upfhpdhDh6CpvAagvvZjBAuz39gUkzGXn9qyJ6Y9EI9NUoc_6ersAtgdbD0hVjVHd8rVqfRzQ8DV1mY-rLM57OSIxHE=w411-rw'} />
            </div>
            <BestSellProduct />
            <ProductForU />
        </div>
    )
}

export default Main
