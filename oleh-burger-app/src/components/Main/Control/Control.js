import './Control.css'

import SingleControl from './SingleControl/SingleControl'

function Control ({ingredients, updateBurger, burgerIngredients}) {
    return (
        <div className='control' onClick={updateBurger}>
            <h2 className='control_header'>Burger builder</h2>
            <ul className='control_panel'>
            {ingredients.map((element) => 
                <SingleControl quantity={burgerIngredients[element.name]} key={element.name} ingredient={element.name} />
            )}
            </ul>
        </div>
    )
}

export default Control