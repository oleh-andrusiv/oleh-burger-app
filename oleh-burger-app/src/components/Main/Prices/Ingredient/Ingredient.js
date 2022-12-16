import './Ingredient.css'

function Ingredient (ingredients) {
    const ingred = ingredients.ingreds;

    return (
        <ul className='prices_ingredients'>
            {ingred.map((element) => <li className='ingredient_item' key={`Ingredient #${ingred.indexOf(element)}`}>{element.name}: {element.price}</li>)}
        </ul>
    );
}

export default Ingredient