import React from 'react';
import './GiftCard.scss'

const GiftCard = (props) => {
    return (
        <div className="card_product-gift">
            <span>QUÀ TẶNG</span>
            <img className="gift-img" src={props.url} alt="" />
        </div>
    )
}

export default GiftCard
