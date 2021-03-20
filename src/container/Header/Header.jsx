import React from 'react';
import './Header.scss'

import BannerAds from './BannerAds/BannerAds';
import Contact from './Contact/Contact';
import Toolbar from './Toolbar/Toolbar';

const Header = (props) => {
    return (
        <div className="header">
            <BannerAds />
            <Contact />
            {props.isShowToolbar ? <Toolbar /> : null}
        </div>
    );
}

export default Header;