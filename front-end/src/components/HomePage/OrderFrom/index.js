import React, { Component } from 'react'
import lunchBox1 from '../../../imgSrc/homepage/home-lunch-box.png';
import lunchBox2 from '../../../imgSrc/homepage/hangout-lunch-box.png';
import './index.css'

class OrderFrom extends Component {
  render() {
    return (
      <>
        <h1 className='order-food-from-heading'>Order Food From</h1>
        <div className='order-food-from-container-small'>
          <div className='food-from-card'>
            <div className='food-from-card-content'>
            <h1 className='food-from-heading1'>HOME</h1>
            <h1 className='food-from-heading2'>LUNCH BOX</h1>
            <img className='lunch-box-small' alt='lunchBox1' src={lunchBox1} />
            <button className='order-from-btn' type='button'>Order Now</button>
          </div>
        </div>
      </div >
      <div className='order-food-from-container-small'>
          <div className='food-from-card'>
            <div className='food-from-card-content'>
            <h1 className='food-from-heading1'>Hangout</h1>
            <h1 className='food-from-heading2'>LUNCH BOX</h1>
            <img className='lunch-box-small' alt='lunchBox1' src={lunchBox2} />
            <button className='order-from-btn' type='button'>Order Now</button>
          </div>
        </div>
      </div >


        <div className='order-food-from-container-large'>

          <div className='order-from-bg-container'>
            <img alt='Lunch Box1' className='lunch-box' src={lunchBox1} />
            <img alt='Lunch Box2' className='lunch-box' src={lunchBox2} />
          </div>
        </div>
      </>
    )
  }
}

export default OrderFrom