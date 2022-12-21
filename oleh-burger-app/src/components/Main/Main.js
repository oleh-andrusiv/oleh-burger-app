import Prices from './Prices/Prices';
import Burger from './Burger/Burger';
import Control from './Control/Control'


import './Main.css';

function Main ({ingredients, burgerIngredients, updateBurger, ingredientAddingOrder, totalPrice}) {
    return (
        <div className='main-wrap wraper'>
            <div className='main container'>
                <h1 className='main_header'>Make your own perfect burger and order it just in 2 steps.</h1>
                <Prices ingredients={ingredients}/>
                <Burger 
                    ingredients={ingredients}
                    ingredientAddingOrder={ingredientAddingOrder}
                    totalPrice={totalPrice}
                />
                <Control 
                    ingredients={ingredients}
                    burgerIngredients={burgerIngredients}
                    updateBurger={updateBurger}
                />
            </div>
        </div>
    );
}

export default Main