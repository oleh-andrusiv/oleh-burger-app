import Ingredient from './Ingredient/Ingredient';
import './Prices.css';

function Prices (ingredients) {
  const ingreds = ingredients.ingreds;
  return (
    <div className='prices'>
      <h2 className='prices_header'>Our prices</h2>
      <Ingredient ingreds={ingreds}/>
    </div>
  );
}

export default Prices