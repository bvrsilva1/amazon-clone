import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='header'>
      {/*Link doesnt refresh the page*/}
      <Link to='/'>
        <img
          className='headerLogo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='Amazon'
        />
      </Link>
      <div className='headerSearch'>
        <input type='text' className='headerSearchInput' />
        <SearchIcon className='headerSearchIcon' />
      </div>

      <div className='headerLinks'>
        <Link to='/' className='headerLink'>
          <div className='headerOption'>
            <span className='headerOptionTop'>Hello Bruno</span>
            <span className='headerOptionBottom'>Sign In</span>
          </div>
        </Link>

        <Link to='/' className='headerLink'>
          <div className='headerOption'>
            <span className='headerOptionTop'>Returns</span>
            <span className='headerOptionBottom'>& Orders</span>
          </div>
        </Link>

        <Link to='/' className='headerLink'>
          <div className='headerOption'>
            <span className='headerOptionTop'>Your</span>
            <span className='headerOptionBottom'>Prime</span>
          </div>
        </Link>

        <Link to='/checkout' className='headerLink'>
          <div className='headerOptionBasket'>
            <ShoppingBasketIcon />
            <span className='headerOptionBottom headerBasketCount'>0</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
