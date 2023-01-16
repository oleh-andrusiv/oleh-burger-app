import logo from './logo.svg'
import './Header.css'

import MenuItem from './MenuItem/MenuItem'

import { NavLink } from 'react-router-dom';

const Header = () => {
    const menuItems = ['Home', 'Orders', 'Contacts', 'FAQ']
    return (
      <div className='header-wrap wraper'>
        <div className="header container">
          <NavLink className='header_logo' to={'/'}>
              <img src={logo} className="header_logo_img" alt="logo" />
          </NavLink>
          <p className="header_text">
            Burger Builder App
          </p>
          <ul className="header_nav">
            {menuItems.map((page) => 
              <MenuItem 
                key={'menu-item_' + page} 
                page={page} 
              />
            )}
          </ul>
        </div>
      </div>
    );
  }

  export default Header