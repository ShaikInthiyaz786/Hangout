import React, { Component } from 'react'
import donations from '../../../imgSrc/homepage/donations.webp';
import donationLarge from '../../../imgSrc/donations/donationLarge.jpg';
import './index.css'

export class Donations extends Component {
  render() {
    return (
      <div className='donations-container'>
            <h1 className='donation-heading'>Food Donations</h1>
            <img className='donation1' alt="Donations" src={donations} />
            <img className='donation2' alt="Donations" src={donationLarge} />
      </div>
    )
  }
}

export default Donations