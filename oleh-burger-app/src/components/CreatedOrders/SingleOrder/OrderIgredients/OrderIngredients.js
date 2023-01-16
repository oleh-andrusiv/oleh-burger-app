import './OrderIngredients.css'

const isNumber = (value) => {
   return typeof value === 'number' && isFinite(value);
}

const OrderIngredients = ({ ingredient, quantity }) => {

    return (
        <li className="created-orders_order-products">
            <img src={require(`../../../Main/Control/${!isNumber(+ingredient) ? ingredient : "meat" }.svg`)} className='created-orders_order-products_icon' alt={'created-orders'+ingredient}></img>
            <span>{quantity}</span>
        </li>
    )
}

export default OrderIngredients