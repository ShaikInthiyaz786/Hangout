import React from 'react'
import './index.css';
import Carousel from 'react-bootstrap/Carousel'

const TopDonars = () => {
  return (
    <div>
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={10000}>
        <img
          className="donar-img1"
          src="https://www.newdesire.org/uploads/5/4/4/3/54437349/s797958565885101961_p63_i1_w1020.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='carousel-heading'>"From Our kitchen To your Doorsteps"</h1>
          <div className='buttons-container'>
            <button className='watch-btn' type='button'>Watch Now</button>
            <button className='explore-btn' type='button'>Explore Menu</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 carousel-image"
          src="https://img.freepik.com/premium-photo/navy-blue-paper-textured-background_53876-149966.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 className='carousel-heading'>"From Our kitchen To your Doorsteps"</h1>
        <div className='buttons-container'>
            <button className='watch-btn' type='button'>Watch Now</button>
            <button className='explore-btn' type='button'>Explore Menu</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100000}>
        <img
          className="donar-img3"
          src='https://www.goodwillaz.org/wp-content/uploads/2018/04/5-15-1.jpg'
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 className='carousel-heading'>"From Our kitchen To your Doorsteps"</h1>
        <div className='buttons-container'>
            <button className='watch-btn' type='button'>Watch Now</button>
            <button className='explore-btn' type='button'>Explore Menu</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default TopDonars