import Prices from './Prices/Prices';
import Burger from './Burger/Burger';
import Control from './Control/Control'


import './Main.css';

function Main ({
    ingredients, 
    ingredientsQuantity, 
    updateBurger, 
    ingredientsInBurger, 
    burgerPrice, 
    clearBurger, 
    showCheckoutForm, 
    formOpen,
    loader}) {
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
                    showCheckoutForm={showCheckoutForm}
                    formOpen={formOpen}
                />
                <Control 
                    ingredients={ingredients}
                    ingredientsQuantity={ingredientsQuantity}
                    updateBurger={updateBurger}
                    clearBurger={clearBurger}
                    loader={loader}
                />
            </div>
        </div>
    );
}

export default Main