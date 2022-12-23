import Loader from '../Loader/Loader'

import './Control.css'

import SingleControl from './SingleControl/SingleControl'

function Control ({ ingredients, updateBurger, ingredientsQuantity, clearBurger, loader }) {
    if (!loader) {
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
    )} 
    
    if (loader) {
        return (
            <div className='control'>
                <Loader />
            </div>
        )  
    }
}

export default Control