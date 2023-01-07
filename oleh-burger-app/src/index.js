import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Loader from './components/Main/Loader/Loader'

import './index.css';

import axios from "axios";

const App = () => {

  const loadPrices = async () => await axios.get("https://burger-api-xcwp.onrender.com/ingredients");
  const placeOrder = async (orderData) => await axios.post("https://burger-api-xcwp.onrender.com/orders", orderData);

  const [ingredients, setIngredients] = useState(null);
  const [loader, setLoader] = useState(false);
  const [ingredientsQuantity, setIngredientsQuantity] = useState({});
  const [ingredientsInBurger, setIngredientsInBurger] = useState([]);
  const [burgerPrice, setBurgerPrice] = useState('1.00');
  const [modalOpen, setModalOpen] = useState('modal-closed');
  const [orderSaved, setOrderSaved] = useState('');
  const [formOpen, setFormOpen] = useState('form-open')
  
  const quantities = (array) => {
    const quantityObj = {};
    array.forEach((element) => {
      quantityObj[element.name] = 0
    })
    return quantityObj
  }
  
  useEffect(() => {
    try {    
      loadPrices().then((response) => {
        setIngredients(response.data)
        setIngredientsQuantity(quantities(response.data))
      })
    } catch (error) {
      console.log(error);
    }
  },[])

  const findIngredientPrice = (ingredient) => {
    return ingredients.filter((elem) => elem.name === ingredient)[0].price
  }

  const changeBurgerIngredients = (event) => {
    event.preventDefault();
    
    const actionClicked = event.target.getAttribute('action');
    const ingredientClicked = event.target.getAttribute('ing');
    
    if (event.target.classList.contains('control_btn')) {

      const ingredientPrice = findIngredientPrice(ingredientClicked);
        
      const newIngredientsQuantity = ingredientsQuantity;
      const newIngredientsInBurger = ingredientsInBurger;

      let newPrice = +burgerPrice;
      
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

      setIngredientsInBurger(newIngredientsInBurger);
      setIngredientsQuantity(newIngredientsQuantity);
      setBurgerPrice(newPrice.toFixed(2));
          
    }
  };

  const clearBurger = () => {
    const emptyBurger = {};
    for (const ingredient in ingredientsQuantity) {
      emptyBurger[ingredient] = 0;
    }
    if (ingredientsInBurger.length !== 0) {
        setBurgerPrice("1.00");
        setIngredientsInBurger([]);
        setIngredientsQuantity(emptyBurger);
    }
  };

  const showCheckoutModal = (event) => {
    event.preventDefault();
    
    const clickedElem = event.target.getAttribute('checkoutBtnType');
    
    if (clickedElem === 'burger_checkout_btn' && burgerPrice !== '1.00') {
      setModalOpen('modal-open')
    }
    
    if (clickedElem === 'checkout-modal_exit') {
      setModalOpen('modal-closed')
      setFormOpen('form-open')
    }
  };
      
  const sendOrderData = (orderData) => {
    setLoader(true)

    try {
      placeOrder(orderData).then((response) => {
        console.log(response)
        setLoader(false)

        if (response.data === 'item saved to database') {
          setOrderSaved('Your order succesfully created.')
        }
      })

    } catch (error) {
      console.log(error);
    }

    setFormOpen('form-closed')
    clearBurger()
  };

    return (
      <div className="app-wraper"> 
        <Header />  
        <Main 
          ingredients={ingredients}
          updateBurger={changeBurgerIngredients}
          ingredientsQuantity={ingredientsQuantity}
          ingredientsInBurger={ingredientsInBurger}
          burgerPrice={burgerPrice}
          clearBurger={clearBurger}
          showCheckoutModal={showCheckoutModal}
          modalOpen={modalOpen}
          loader={loader}
          sendOrderData={sendOrderData}
          orderSaved={orderSaved}
          formOpen={formOpen}
          />
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);