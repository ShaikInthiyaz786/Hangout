import React from 'react'
import './index.css';
import carousel1 from '../../../imgSrc/homepage/carousel1.png';
import Carousel from 'react-bootstrap/Carousel'

const CarouselItem = () => {
  return (
    <div>
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={1000000}>

        <img
          className="d-block w-100 carousel-image"
          src={carousel1}
          alt="First slide"
        />

        <Carousel.Caption>
          <div className='carousel-caption'>
          <h1 className='carousel-heading'>"From Our kitchen To your Doorsteps"</h1>
          <div className='buttons-container'>
            <button className='watch-btn' type='button'>Watch Now</button>
            <button className='explore-btn' type='button'>Explore Menu</button>
          </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10}>
        <img
          className="d-block w-100 carousel-image"
          src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDExfHx8ZW58MHx8fHx8"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className='carousel-caption'>
        <h1 className='carousel-heading'>"From Our kitchen To your Doorsteps"</h1>
        <div className='buttons-container'>
            <button className='watch-btn' type='button'>Watch Now</button>
            <button className='explore-btn' type='button'>Explore Menu</button>
          </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10}>
        <img
          className="d-block w-100 carousel-image"
          src='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
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

export default CarouselItem