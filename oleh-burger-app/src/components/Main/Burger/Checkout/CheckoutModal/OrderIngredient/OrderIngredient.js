import './OrderIngredient.css'

const OrderIngredient = ({ quantity, ingredient }) => {
    return (
        <li className='checkout-modal_ingredient'>
          <img src={require(`../../../../Control/${ingredient}.svg`)} className='control_icon' alt={ingredient}></img>
          <span>{quantity}</span>
      </li>
    )
}

export default OrderIngredient