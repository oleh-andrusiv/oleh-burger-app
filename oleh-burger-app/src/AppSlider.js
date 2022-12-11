import './AppSlider.css';
import slider from './uaf.jpeg';

function AppSlider () {
    return (
        <div className="App-slider">
        <img src={slider} className="App-slider_img" alt="Full width banner" />
        </div>
    );
}

export default AppSlider