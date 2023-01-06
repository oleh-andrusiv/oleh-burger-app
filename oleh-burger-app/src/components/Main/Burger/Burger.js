import Constructor from './Constructor/Constructor';
import Checkout from './Checkout/Checkout';

import './Burger.css';

function Burger ({
    ingredients, 
    ingredientsQuantity, 
    ingredientsInBurger, 
    burgerPrice, 
    showCheckoutModal, 
    modalOpen, 
    loader, 
    sendOrderData,
    orderSaved,
    formOpen
    }) {
    return (
        <div className='burger'>
            <h2 className='burger_header'>{`Burger price: ${burgerPrice} ₴`}</h2>
            <Constructor 
                ingredients={ingredients}
                ingredientsInBurger={ingredientsInBurger}    
            />
            <Checkout
                burgerPrice={burgerPrice}
                showCheckoutModal={showCheckoutModal}
                modalOpen={modalOpen}
                ingredients={ingredients}
                loader={loader}
                ingredientsQuantity={ingredientsQuantity}
                sendOrderData={sendOrderData}
                orderSaved={orderSaved}
                formOpen={formOpen}
            />
        </div>
    )
}

export default Burger