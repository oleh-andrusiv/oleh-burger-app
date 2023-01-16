import CheckoutModal from "./CheckoutModal/CheckoutModal";
import './Checkout.css'

const Checkout = ({ 
    ingredients, 
    ingredientsQuantity, 
    burgerPrice, 
    showCheckoutModal, 
    modalOpen, 
    loader, 
    sendOrderData,
    colectOrderInfo,
    orderSaved,
    formOpen
    }) => {

    return (
        <div onClick={showCheckoutModal} className="burger_checkout">
            <CheckoutModal
            burgerPrice={burgerPrice}
            modalOpen={modalOpen}
            ingredientsQuantity={ingredientsQuantity}
            ingredients={ingredients}
            loader={loader}
            sendOrderData={sendOrderData}
            colectOrderInfo={colectOrderInfo}
            orderSaved={orderSaved}
            formOpen={formOpen}
            />
            <button className='burger_checkout_btn' btntype='burger_checkout_btn'>Checkout</button>
        </div>
    );
};

export default Checkout;