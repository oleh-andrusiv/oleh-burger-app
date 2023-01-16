import './Locations.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Locations = ({ city, address, index }) => {

    switch (city) {
        case 'if': 
            city = "Ivano-Frankivs'k"
        break;
        case 'lviv': 
            city = "Lviv"
        break;
        case 'kyiv': 
            city = "Kyiv"
        break;
        default: console.log('Some new city added.')
    }

    return (
        <li className={`contacts_location_${index} constacts_location`}>
            <LocationOnIcon alt={city} sx='height: 50px'/>
            <div className='constacts_location_info'>
                <span className='constacts_location_header'>{city}</span>
                <span>{address}</span>
            </div>
        </li>
    )
}

export default Locations