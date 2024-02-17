import {Link} from 'react-router-dom';

import { Component } from 'react'
import logo from '../.././imgSrc/menuBg/hangoutLogo.jpg';
import './index.css'


const navList = [
  { navId: 'Home', displayText: 'Home' },
  { navId: 'About', displayText: 'About' },
  { navId: 'Menu', displayText: 'Menu' },
  { navId: 'Donations', displayText: 'Donations' },
  { navId: 'Profile', displayText: 'Profile' },
  { navId: 'Orders', displayText: 'Orders' },
]


class NavBar extends Component {
  state = {
    isTrue: false,
    category: 'Home',
    score: 0,
    time: 60,
  }

  clickTab = navId => {
    this.setState({ category: navId })
  }


  render() {
    const { category} = this.state
    return (
      <div className="main-container">
        <nav className="nav-bar">
          <div className='nav-elements-container'>
            <div className='nav-logo-container'>
              <img
                src={logo}
                className="logo"
                alt="website logo"
              />
              <h1 className='nav-company-name'>Hangout</h1>
            </div>
              <ul className="nav-btn-container">
                {navList.map(eachValue => (
                  <li key={eachValue.navId}>
                    <Link to={(eachValue.displayText === "Home")? "/" : eachValue.displayText}>
                    <button
                      type="button"
                      className={`nav-btn ${
                        category === eachValue.navId ? 'nav-btn-highlight' : ''
                      }`}
                      onClick={() => this.clickTab(eachValue.navId)}
                    >
                     {eachValue.displayText}
                    </button>
                    </Link>
                  </li>
                ))}
                <li>
                <button className='nav-btn nav-btn-highlight nav-login-btn' type='button'>Login/SignIn</button>
                </li>
              </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default NavBar
