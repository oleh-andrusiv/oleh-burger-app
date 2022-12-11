import logo from './logo.svg';
import './AppHeader.css'

function AppHeader() {
    return (
      <div className="App-header">
        <img src={logo} className="App-header_logo" alt="logo" />
        <p className="App-header_text">
          Help to UAF
        </p>
        <div className="App-header_nav">
          <a
            className="App-header_link"
            href="https://savelife.in.ua/projects/military/mobilni-kompleksy-sposterezhennya/"
            target="_blank"
            rel="noopener noreferrer"
          >
          Donate
          </a>
          <a
            className="App-header_link"
            href="https://savelife.in.ua/projects/military/mobilni-kompleksy-sposterezhennya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project
          </a>
          <a
            className="App-header_link"
            href="https://savelife.in.ua/projects/military/mobilni-kompleksy-sposterezhennya/"
            target="_blank"
            rel="noopener noreferrer"
          >
          About
          </a>
          <a
            className="App-header_link"
            href="https://savelife.in.ua/materials/"
            target="_blank"
            rel="noopener noreferrer"
          >
          Materials
          </a>
        </div>
      </div>
    );
  }

  export default AppHeader