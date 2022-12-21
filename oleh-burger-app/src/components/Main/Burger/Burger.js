import './Burger.css';
import Constructor from './Constructor/Constructor';

function Burger ({ingredients, ingredientAddingOrder, totalPrice}) {
    return (
        <div className='burger'>
            <h2 className='burger_header'>{`Burger price: ${totalPrice} ₴`}</h2>
            <button className='burger_checkout btn'>Checkout</button>
            <Constructor 
                ingredients={ingredients}
                ingredientAddingOrder={ingredientAddingOrder}    
            />
        </div>
    )
}

export default Burger