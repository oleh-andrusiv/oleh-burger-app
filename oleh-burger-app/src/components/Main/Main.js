import Prices from './Prices/Prices';
import Burger from './Burger/Burger';
import Control from './Control/Control'


import './Main.css';

function Main (ingredients) {
    const ingreds = ingredients.ingreds;
    return (
        <div className='main-wrap wraper'>
            <div className='main container'>
                <h1 className='main_header'>Make your own perfect burger and order it just in 2 steps.</h1>
                <Prices ingreds={ingreds}/>
                <Burger />
                <Control />
            </div>
        </div>
    );
}

export default Main