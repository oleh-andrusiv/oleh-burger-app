import './Constructor.css'

import topBun from './top-bun.png'
import bottomBun from './bottom-bun.png'

function Constructor ({ingredientAddingOrder}) {
    return (
        <div className='constructor'>
            <img className='top-bun' src={topBun} alt='Burger top bun.'></img>
            {!ingredientAddingOrder.length &&
                <p className='start-construction-text'>Please, start by adding products...</p>
            }
            {ingredientAddingOrder.map((product, index) => {
                return (
                    <img src={require(`./${product}.png`)} alt={product} key={product + index} className='ingredient' index={`el-${index}`}></img>
                );
            })}
            <img className='bottom-bun' src={bottomBun} alt='Burger bottom bun.'></img>
        </div>
    )
}

export default Constructor