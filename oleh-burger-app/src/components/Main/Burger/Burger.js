import './Burger.css';
import Constructor from './Constructor/Constructor';

function Burger ({ingredients, ingredientsInBurger, burgerPrice}) {
    return (
        <div className='burger'>
            <h2 className='burger_header'>{`Burger price: ${burgerPrice} ₴`}</h2>
            <button className='burger_checkout btn'>Checkout</button>
            <Constructor 
                ingredients={ingredients}
                ingredientsInBurger={ingredientsInBurger}    
            />
        </div>
    )
}

export default Burger