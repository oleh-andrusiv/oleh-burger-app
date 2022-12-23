import CheckoutForm from "./CheckoutForm/CheckoutForm";
import './Checkout.css'

const Checkout = ({ ingredientsInBurger, burgerPrice, showCheckoutForm, formOpen }) => {
    return (
        <div onClick={showCheckoutForm} className="burger_checkout">
            <CheckoutForm
            ingredientsInBurger={ingredientsInBurger}
            burgerPrice={burgerPrice}
            showCheckoutForm={showCheckoutForm}
            formOpen={formOpen}
            />
            <button className='burger_checkout_btn'>Checkout</button>
        </div>
    );
};

export default Checkout;