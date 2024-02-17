import React, { Component } from 'react'
import './index.css'

export class AboutHangout extends Component {
    render() {
        return (
            <div className='about-hangout-container'>
                <div className='motherLove'>
                    
                </div>
                <div className='discription-container'>
                    <div className='discription-text'>
                        <h1 className='we-provide-heading'>We provide healthy food for your family.</h1>
                        <p className='about-hangout-discription'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate <br /> <br/>
                            At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                        <div className='more-about-us-btn-container'>
                            <button className='more-about-us-btn' type='button'>More About Us</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutHangout