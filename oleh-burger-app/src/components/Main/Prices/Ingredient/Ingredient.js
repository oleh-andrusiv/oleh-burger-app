import './Ingredient.css'

function Ingredient ({ingredients}) {
    return (
        <ul className='prices_ingredients'>
            {ingredients.map((element) => <li className='ingredient_icon' key={`Ingredient-icon #${ingredients.indexOf(element)}`}>{element.name}: {element.price}</li>)}
        </ul>
    );
}

export default Ingredient