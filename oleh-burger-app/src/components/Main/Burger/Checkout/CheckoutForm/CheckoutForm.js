import './CheckoutForm.css'

const CheckoutForm = ({ ingredientsInBurger, burgerPrice, formOpen }) => {
    return (
        <div className={`checkout-form ${formOpen}`}>
            <button className='checkout-form_exit'>Close</button>
            <h3 className='checkout-form_header'>To be continued...</h3>
        </div>
    )
};

export default CheckoutForm