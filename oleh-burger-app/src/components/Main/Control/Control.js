import Loader from '../Loader/Loader'
import SingleControl from './SingleControl/SingleControl'

import './Control.css'

function Control ({ ingredients, updateBurger, ingredientsQuantity, clearBurger }) {
    if (ingredients !== null) {
        return (
            <div className='control' onClick={updateBurger}>
                <h2 className='control_header'>Burger builder</h2>
                <ul className='control_panel'>
                {ingredients.map((element) => 
                    <SingleControl quantity={ingredientsQuantity[element.name]} key={element.name} ingredient={element.name} />
                )}
                </ul>
                <button className='control_burger-clearer' onClick={clearBurger}>Clear burger</button>
            </div>
    )} else {
        return (
            <div className='control'>
                <Loader />
            </div>
        )  
    }
}

export default Control