import './Control.css'

import bacon from './bacon.svg'
import cheese from './cheese.svg'
import ham from './ham.svg'
import salad from './salad.svg'
import pickle from './pickle.svg'


function Control () {
    return (
        <div className='control'>
            <h2 className='control_header'>Burger builder</h2>
            <ul className='control_panel'>
                <li className='control_item'>
                    <button className='control_btn btn'>-</button>
                    <span className='control_count'>0</span>
                    <button className='control_btn btn'>+</button>
                    <img className='control_icon' src={bacon} alt='bacon-icon' />
                </li>
                <li className='control_item'>
                    <button className='control_btn btn'>-</button>
                    <span className='control_count'>0</span>
                    <button className='control_btn btn'>+</button>
                    <img className='control_icon' src={cheese} alt='cheese-icon' />
                </li>
                <li className='control_item'>
                    <button className='control_btn btn'>-</button>
                    <span className='control_count'>0</span>
                    <button className='control_btn btn'>+</button>
                    <img className='control_icon' src={ham} alt='ham-icon' />
                </li>
                <li className='control_item'>
                    <button className='control_btn btn'>-</button>
                    <span className='control_count'>0</span>
                    <button className='control_btn btn'>+</button>
                    <img className='control_icon' src={salad} alt='salad-icon' />
                </li>
                <li className='control_item'>
                    <button className='control_btn btn'>-</button>
                    <span className='control_count'>0</span>
                    <button className='control_btn btn'>+</button>
                    <img className='control_icon' src={pickle} alt='pickle-icon' />
                </li>
            </ul>
        </div>
    )
}

export default Control