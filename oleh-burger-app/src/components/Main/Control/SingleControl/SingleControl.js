import './SingleControl.css'

const SingleControl = ({ ingredient, updateBurger, quantity }) => {
    return (
      <li onClick={updateBurger} className='control_item'>
        <button action='decrement' ing={ingredient} className='control_btn'>-</button>
        <span>{quantity}</span>
        <button action='increment' ing={ingredient} className='control_btn'>+</button>
        <img src={require(`../${ingredient}.svg`)} className='control_icon' alt={ingredient}></img>
      </li>
    );
  };

  export default SingleControl