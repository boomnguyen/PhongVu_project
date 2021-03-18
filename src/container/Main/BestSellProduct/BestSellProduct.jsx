import React from 'react';
import CartProductBigSize from '../../../components/CardProduct/CardProductBigSize/CardProductBigSize';
import './BestSellProduct.scss'

const BestSellProduct = () => {
    return (
        <div className="main__bestSellProduct">
            <div className="besSellProduct-wrap-name">
                <h4>Sản phẩm bán chạy</h4>
                <p>Xem tất cả <i className="fas fa-chevron-right"></i></p>
            </div>
            <div className="besSellProduct-wrap-product">
                <CartProductBigSize url={'https://lh3.googleusercontent.com/BIK2lOSb8d5KGAf-XXYj4IHYKjuSSBx9eKoiKlU6hzPCQQoUByctytD7XhMhBEV4tRzebv6FAkd4v-FwkClI6xN8_17y4_fu=w500-rw'} />
                <CartProductBigSize url={'https://lh3.googleusercontent.com/BIK2lOSb8d5KGAf-XXYj4IHYKjuSSBx9eKoiKlU6hzPCQQoUByctytD7XhMhBEV4tRzebv6FAkd4v-FwkClI6xN8_17y4_fu=w500-rw'} />
                <CartProductBigSize url={'https://lh3.googleusercontent.com/BIK2lOSb8d5KGAf-XXYj4IHYKjuSSBx9eKoiKlU6hzPCQQoUByctytD7XhMhBEV4tRzebv6FAkd4v-FwkClI6xN8_17y4_fu=w500-rw'} />
                <CartProductBigSize url={'https://lh3.googleusercontent.com/BIK2lOSb8d5KGAf-XXYj4IHYKjuSSBx9eKoiKlU6hzPCQQoUByctytD7XhMhBEV4tRzebv6FAkd4v-FwkClI6xN8_17y4_fu=w500-rw'} />
                <CartProductBigSize url={'https://lh3.googleusercontent.com/BIK2lOSb8d5KGAf-XXYj4IHYKjuSSBx9eKoiKlU6hzPCQQoUByctytD7XhMhBEV4tRzebv6FAkd4v-FwkClI6xN8_17y4_fu=w500-rw'} />
            </div>
        </div>
    )
}

export default BestSellProduct
