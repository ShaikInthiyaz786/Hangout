import React, { Component } from 'react'
import logo from '../../../imgSrc/menuBg/hangoutLogo.jpg';
import './index.css'

class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
                <div className='footer-left-container'>
                    <div className='footer-logo-container'>
                        <img className='footer-logo' src={logo} alt='logo' />
                        <h1 className='footer-company-name'>Hangout</h1>
                    </div>
                    <div className='footer-social-media-icons-container'>
                            <div className='footer-social-media-icon'>
                                <i className="bi bi-twitter-x"></i>
                            </div>
                            <div className='footer-social-media-icon'>
                            <i className="bi bi-facebook"></i>
                            </div>
                            <div className='footer-social-media-icon'>
                            <i className="bi bi-whatsapp"></i>
                            </div>
                            <div className='footer-social-media-icon'>
                            <i className="bi bi-instagram"></i>
                            </div>
                    </div>
                    <div className='hangout-count'>
                        <h1 className='count'>0+</h1>
                        <h1 className='count'>Registered Riders</h1>
                        <hr/>
                        <h1 className='count'>0+</h1>
                        <h1 className='count'>Registered Riders</h1>
                        <hr/>
                        <h1 className='count'>0+</h1>
                        <h1 className='count'>Registered Riders</h1>
                    </div>
                </div>
                <div className='footer-middile-container'>
                    <h1 className='footer-middle-heading'>Pages</h1>
                    <p>Home</p>
                    <p>About</p>
                    <p>Menu</p>
                    <p>Donations</p>
                    <p>Profile</p>
                    <p>Orders</p>
                </div>
                <div className='footer-right-container'>
                    <h1 className='footer-right-heading'>Follow us on Instagram</h1>
                    <div className='footer-img-container'> 
                        <img className='footer-img' src='https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0' alt='food'/>
                        <img className='footer-img' src='https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0' alt='food'/>
                        <img className='footer-img' src='https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0' alt='food'/>
                        <img className='footer-img' src='https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0' alt='food'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer