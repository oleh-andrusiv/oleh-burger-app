import './Burger.css';
import Constructor from './Constructor/Constructor';
import Checkout from './Checkout/Checkout';

function Burger ({ingredients, ingredientsInBurger, burgerPrice, showCheckoutForm, formOpen}) {
    return (
        <div className='burger'>
            <h2 className='burger_header'>{`Burger price: ${burgerPrice} ₴`}</h2>
            <Constructor 
                ingredients={ingredients}
                ingredientsInBurger={ingredientsInBurger}    
            />
            <Checkout
                ingredientsInBurger={ingredientsInBurger}
                burgerPrice={burgerPrice}
                showCheckoutForm={showCheckoutForm}
                formOpen={formOpen}
            />
        </div>
    )
}

export default Burger