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
      ingredientAddingOrder: [],
      burgerCreator: {},
      orderPrice: "1.00",
    }
  }

  componentDidMount = async () => {
    try {
      const { data } = await axios.get(
        "https://burger-api-xcwp.onrender.com/ingredients"
      );

      const quantities = data.reduce(
        (acc, curr) => ({ [curr.name]: 0, ...acc }),
        {}
      );

      this.setState({
        ingredients: data,
        burgerCreator: quantities,
      });
    } catch (error) {
      console.log(error);
    }
  };

  findIngredientPrice = (ingredient) => {
    return this.state.ingredients.find(
      (price) => price.name === ingredient
    ).price;
  };

  handleChangeBurgerIngredientQuantity = (event) => {
    event.preventDefault();
    const actionClicked = event.target.getAttribute('action');
    const ingredientClicked = event.target.getAttribute('ing');

    if (event.target.classList.contains('control_btn')) {
      const ingredientPrice = this.findIngredientPrice(ingredientClicked);
      this.setState((prevState) => {
        const copyBurgerCreator = { ...prevState.burgerCreator };
        const copyIngredientAddingOrder = [
          ...prevState.ingredientAddingOrder,
        ];

        let newPrice = +prevState.orderPrice;

        if (actionClicked === "decrement") {
          if (copyBurgerCreator[ingredientClicked] > 0) {
            newPrice -= +ingredientPrice;

            const index =
              copyIngredientAddingOrder.lastIndexOf(
                ingredientClicked
              );

            copyIngredientAddingOrder.splice(index, 1);

            copyBurgerCreator[ingredientClicked]--;
          }
        }
        if (actionClicked === "increment") {
          if (
            copyBurgerCreator[ingredientClicked] < 5 &&
            copyIngredientAddingOrder.length < 10
          ) {
            newPrice += +ingredientPrice;
            copyIngredientAddingOrder.push(ingredientClicked);
            copyBurgerCreator[ingredientClicked]++;
          }
        }

        return {
          ...prevState,
          ingredientAddingOrder: copyIngredientAddingOrder,
          burgerCreator: copyBurgerCreator,
          orderPrice: newPrice.toFixed(2),
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
          updateBurger={this.handleChangeBurgerIngredientQuantity}
          burgerIngredients={this.state.burgerCreator}
          ingredientAddingOrder={this.state.ingredientAddingOrder}
          totalPrice={this.state.orderPrice}
          />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);