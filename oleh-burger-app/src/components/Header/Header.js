import logo from './logo.svg'
import './Header.css'

function Header() {
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
            <a
              className="header_link"
              href="https://savelife.in.ua/"
            >
            Home
            </a>
            <a
              className="header_link"
              href="https://savelife.in.ua/"
            >
            Orders
            </a>
            <a
              className="header_link"
              href="https://savelife.in.ua/"
            >
            FAQ
            </a>
          </div>
        </div>
      </div>
    );
  }

  export default Header