import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './index.css';

import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ingredients: [],
      ingredientsInBurger: [],
      ingredientsQuantity: {},
      burgerPrice: "1.00",
    }
  }

  componentDidMount = async () => {
    try {
      const { data } = await axios.get(
        "https://burger-api-xcwp.onrender.com/ingredients"
      );

      const quantities = (array) => {
        const quantityObj = {};
        array.forEach((element) => {
          quantityObj[element.name] = 0
        })
        return quantityObj
      }

      this.setState({
        ingredients: data,
        ingredientsQuantity: quantities(data),
      });
    } catch (error) {
      console.log(error);
    }
  };

  findIngredientPrice = (ingredient) => {
    return this.state.ingredients.filter((elem) => elem.name === ingredient)[0].price
  }

  handleChangeBurgeringredientsQuantity = (event) => {
    event.preventDefault();

    const actionClicked = event.target.getAttribute('action');
    const ingredientClicked = event.target.getAttribute('ing');

    if (event.target.classList.contains('control_btn')) {

      const ingredientPrice = this.findIngredientPrice(ingredientClicked);
      this.setState((prevState) => {

        const newIngredientsQuantity = { ...prevState.ingredientsQuantity };
        const newIngredientsInBurger = [...prevState.ingredientsInBurger];

        let newPrice = +prevState.burgerPrice;

        if (actionClicked === "decrement") {
          if (newIngredientsQuantity[ingredientClicked] > 0) {
            newPrice -= +ingredientPrice;

            const index = newIngredientsInBurger.lastIndexOf(ingredientClicked)

            newIngredientsInBurger.splice(index, 1);

            newIngredientsQuantity[ingredientClicked]--;
          }
        }
        if (actionClicked === "increment") {
          if (
            newIngredientsQuantity[ingredientClicked] < 5 &&
            newIngredientsInBurger.length < 10
          ) {
            newPrice += +ingredientPrice;
            newIngredientsInBurger.push(ingredientClicked);
            newIngredientsQuantity[ingredientClicked]++;
          }
        }

        return {
          ...prevState,
          ingredientsInBurger: newIngredientsInBurger,
          ingredientsQuantity: newIngredientsQuantity,
          burgerPrice: newPrice.toFixed(2),
        };
      });
    }
  };

  render() {
    return (
      <div className="app-wraper"> 
        <Header />  
        <Main 
          ingredients={this.state.ingredients}
          updateBurger={this.handleChangeBurgeringredientsQuantity}
          ingredientsQuantity={this.state.ingredientsQuantity}
          ingredientsInBurger={this.state.ingredientsInBurger}
          burgerPrice={this.state.burgerPrice}
          />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);