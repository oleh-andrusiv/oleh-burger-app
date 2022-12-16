import './Burger.css';
import Constructor from './Constructor/Constructor';

function Burger () {
    return (
        <div className='burger'>
            <h2 className='burger_header'>Burger price: 1.0 ₴</h2>
            <button className='burger_checkout btn'>Checkout</button>
            <Constructor />
        </div>
    )
}

export default Burger