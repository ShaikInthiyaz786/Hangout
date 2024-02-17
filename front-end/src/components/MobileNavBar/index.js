import {Link} from 'react-router-dom'

import React, { Component } from 'react'
import './index.css'

export default class MobileNavBar extends Component {
  render() {
    return (
      <div className='mobile-navbar-container'>
        <Link to="/">
        <button type='button' className='mobile-navbar-icon-container'>
          <i className="bi bi-house-door-fill"></i>
        </button>
        </Link>
        <Link to="/About">
        <button type='button' className='mobile-navbar-icon-container'>
        <i className="bi bi-cart3"></i>
        </button>
        </Link>
        <Link to="/Menu">
        <button type='button' className='mobile-navbar-icon-container'>
        <i className="bi bi-menu-up"></i>
        </button>
        </Link>
        <button type='button' className='mobile-navbar-icon-container'>
        <i className="bi bi-person-heart"></i>
        </button>
        <button type='button' className='mobile-navbar-icon-container'>
        <i className="bi bi-person-circle"></i>
        </button>
      </div>
    )
  }
}
