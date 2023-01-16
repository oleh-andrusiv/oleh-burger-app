import Prices from './Prices/Prices';
import Burger from './Burger/Burger';
import Control from './Control/Control'

import {useState, useEffect} from 'react';
import axios from "axios";

import './Main.css';

function Main () {

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
    
    const clickedElem = event.target.getAttribute('btntype');
    
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
        <div className='main-wrap wraper'>
            <div className='main container'>
                <h1 className='main_header'>Make your own perfect burger and order it just in 2 steps.</h1>
                <Prices 
                    ingredients={ingredients}
                    loader={loader}
                    />
                <Burger 
                    ingredients={ingredients}
                    ingredientsInBurger={ingredientsInBurger}
                    burgerPrice={burgerPrice}
                    showCheckoutModal={showCheckoutModal}
                    modalOpen={modalOpen}
                    ingredientsQuantity={ingredientsQuantity}
                    loader={loader}
                    sendOrderData={sendOrderData}
                    // colectOrderInfo={colectOrderInfo}
                    orderSaved={orderSaved}
                    formOpen={formOpen}
                />
                <Control 
                    ingredients={ingredients}
                    ingredientsQuantity={ingredientsQuantity}
                    updateBurger={changeBurgerIngredients}
                    clearBurger={clearBurger}
                    loader={loader}
                />
            </div>
        </div>
    );
}

export default Main