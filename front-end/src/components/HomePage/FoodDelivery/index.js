import React, { Component } from 'react'
import FoodDeliveryImg from '../../../imgSrc/homepage/foodDelivery.png';
import './index.css'

export class FoodDelivery extends Component {
    render() {
        return (
            <div className='food-delivery-container'>
                <div className='food-delivery-img-container'>
                    <img className='food-delivery-img' src={FoodDeliveryImg} alt='foodDelivery' />
                </div>
                <div className='food-delivery-heading-container'>
                    <h1 className='food-delivery-heading'>Fastest Home Food Delivery !!</h1>
                </div>
                <div className='hangout-sevices-container'>
                    <div className='delivery-icon-container'>
                        <div className='delivery-icon'>
                            <i className="bi bi-clock"></i>
                        </div>
                        <p>Delivery within 30 minutes</p>
                    </div>
                    <div className='delivery-icon-container'>
                        <div className='delivery-icon'>
                            <i className="bi bi-tag"></i>
                        </div>
                        <p>Best offers & prices</p>
                    </div>
                    <div className='delivery-icon-container'>
                        <div className='delivery-icon'>
                            <i className="bi bi-cart3"></i>
                        </div>
                        <p>Online Service available</p>
                    </div>
                    <div className='more-about-us-btn-container'>
                        <button className='food-delivery-order-btn' type='button'>Order Now</button>
                    </div>
                </div>

                
                <div className='food-delivery-text-container-large'>
                    <div className='food-delivery-heading-container-large'>
                        <h1 className='food-delivery-heading-large'>Fastest Home Food Delivery !!</h1>
                    </div>
                    <div className='hangout-sevices-container-large'>
                        <div className='delivery-icon-container'>
                            <div className='delivery-icon'>
                                <i className="bi bi-clock"></i>
                            </div>
                            <p>Delivery within 30 minutes</p>
                        </div>
                        <div className='delivery-icon-container'>
                            <div className='delivery-icon'>
                                <i className="bi bi-tag"></i>
                            </div>
                            <p>Best offers & prices</p>
                        </div>
                        <div className='delivery-icon-container'>
                            <div className='delivery-icon'>
                                <i className="bi bi-cart3"></i>
                            </div>
                            <p>Online Service available</p>
                        </div>
                        <div className='more-about-us-btn-container'>
                            <button className='food-delivery-order-btn' type='button'>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FoodDelivery