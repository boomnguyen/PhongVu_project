import React from 'react'
import './Banner.scss'

import Carousel from 'react-bootstrap/Carousel'
import banner1 from '../../../assets/images/main__banner-1.webp'
import banner2 from '../../../assets/images/main__banner-2.webp'
import banner3 from '../../../assets/images/main__banner-3.webp'
import banner4 from '../../../assets/images/main__banner-4.webp'
import banner5 from '../../../assets/images/main__banner-5.webp'

const Banner = (props) => {
  return (
    <div className="main__banner">
      <Carousel fade interval={5000}>
        <Carousel.Item>
          <img
            className="d-block w-100 img-banner"
            src={banner1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-banner"
            src={banner2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-banner"
            src={banner3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-banner"
            src={banner4}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-banner"
            src={banner5}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {props.children}
    </div>
  )
}

export default Banner







