import './Constructor.css'

import topBun from './top-bun.png'
import bottomBun from './bottom-bun.png'

function Constructor () {
    return (
        <div className='constructor'>
            <img className='top-bun' src={topBun} alt='Burger top bun.'></img>
            <p className='start-construction-text'>Please, start by adding products...</p>
            <img className='bottom-bun' src={bottomBun} alt='Burger bottom bun.'></img>
        </div>
    )
}

export default Constructor