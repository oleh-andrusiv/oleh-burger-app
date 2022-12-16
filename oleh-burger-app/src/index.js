import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ingredients: [
        {name: 'bacon', price: '1.2'},
        {name: 'cheese', price: '0.75'},
        {name: 'ham', price: '1.5' },
        {name: 'salad', price: '2.2'},
        {name: 'pickle', price: '0.5'},
      ]
    }
  }
  render() {
    return (
      <div className="app-wraper"> 
        <Header />  
        <Main ingreds={this.state.ingredients}/>
      </div>
    );
  }

}

// function App() {

//   const 

//   
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);