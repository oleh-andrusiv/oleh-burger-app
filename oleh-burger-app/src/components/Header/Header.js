import logo from './logo.svg'
import './Header.css'

function Header() {
    const menuItems = ['Home', 'Orders', 'FAQ']
    return (
      <div className='header-wrap wraper'>
        <div className="header container">
          <div className='header_logo'>
            <img src={logo} className="header_logo_img" alt="logo" />
          </div>
          <p className="header_text">
            Burger Builder App
          </p>
          <div className="header_nav">
            {menuItems.map((page) => (<a className="header_link" href="#">{page}</a>))}
          </div>
        </div>
      </div>
    );
  }

  export default Header