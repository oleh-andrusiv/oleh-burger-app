import Ingredient from './Ingredient/Ingredient';
import Loader from '../Loader/Loader'

import './Prices.css';

function Prices ({ingredients, loader}) {
  if (!loader) {
    return (
      <div className='prices'>
        <h2 className='prices_header'>Our prices</h2>
        <Ingredient ingredients={ingredients}/>
      </div>
    );
  }

  if (loader) {
    return (
      <div className='prices'>
        <Loader />
      </div>
    )  
  }
}

export default Prices