import Ingredient from './Ingredient/Ingredient';
import './Prices.css';

function Prices ({ingredients}) {
  return (
    <div className='prices'>
      <h2 className='prices_header'>Our prices</h2>
      <Ingredient ingredients={ingredients}/>
    </div>
  );
}

export default Prices