import React from 'react';
import './BannerAds.scss'
import Carousel from 'react-bootstrap/Carousel'
import banner1 from '../../../assets/images/header__banner_1.PNG'
import banner2 from '../../../assets/images/header__banner_2.PNG'

const BannerAds = (props) => {

  const closeAds = () => {
    const closeEl = document.querySelector('.header__banner')
    console.log(closeEl);
    closeEl.setAttribute('style', 'display: none')
  }

  return (
    <div className="header__banner">
      <Carousel
        controls={false}
        indicators={false}
        interval={2000}
        fade>
        <Carousel.Item>
          <img
            className="banner1"
            src={banner1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="banner2"
            src={banner2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>

      <div id="mdiv" onClick={closeAds}>
        <div className="mdiv">
          <div className="md"></div>
        </div>
      </div>
    </div>
  );
}

export default BannerAds;