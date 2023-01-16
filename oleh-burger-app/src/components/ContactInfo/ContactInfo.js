import './ContactInfo.css'
import PublicIcon from '@mui/icons-material/Public';
import MailIcon from '@mui/icons-material/Mail';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import Loader from '../Main/Loader/Loader'
import Locations from './Locations/Locations'

import {useState, useEffect} from 'react';
import axios from "axios";

const ContactInfo = () => {
    const loadContacts = async () => await axios.get("https://burger-api-xcwp.onrender.com/contact");

    const [email, setEmail] = useState('');
    const [fb, setFb] = useState('');
    const [inst, setInst] = useState('');
    const [locations, setLocations] = useState({});
    const [phone, setPhone] = useState('');
    const [web, setWeb] = useState('');
    const [worktime, setWorktime] = useState('');

    useEffect(() => {
        try {    
            loadContacts().then((response) => {
                const {email, fb, inst, locations, phone, web, worktime} = response.data[0];
                setEmail(email);
                setFb(fb);
                setInst(inst);
                setLocations(locations);
                setPhone(phone);
                setWeb(web);
                setWorktime(worktime);
          })
        } catch (error) {
          console.log(error);
        }
    },[])

    if (email !== '') {
        return (
            <div className='contacts container'>
                <h2>Contact us</h2>
                <div className='contacts_data'>
                    <ul className='contacts_data-main'>
                        <li className='contacts_web constacts-item'>
                            <PublicIcon alt='web' sx='height: 50px'/>
                            <div className='constacts-item_info'>
                                <span className='constacts-item_header'>Website</span> 
                                <a href={web}>{web}</a>
                            </div>
                        </li>
                        <li className='contacts_email constacts-item'>
                            <MailIcon alt='email' sx='height: 50px'/>
                            <div className='constacts-item_info'>
                                <span className='constacts-item_header'>Email</span>
                                <a href={`mailto:${email}`}>{email}</a>
                            </div>
                        </li>
                        <li className='contacts_phone constacts-item'>
                            <PermPhoneMsgIcon alt='phone' sx='height: 50px'/>                  
                            <div className='constacts-item_info'>
                                <span className='constacts-item_header'>Phone</span>
                                <a href={`tel:${phone}`}>{phone}</a>
                            </div>
                        </li>
                        <li className='contacts_worktime constacts-item'>
                            <AccessTimeIcon alt='worktime' sx='height: 50px'/>
                            <div className='constacts-item_info'>
                                <span className='constacts-item_header'>Worktime</span>
                                <span>{worktime}</span>
                            </div>
                        </li>
                        <li className='contacts_fb constacts-item'>
                            <FacebookIcon alt='fb' sx='height: 50px'/>
                            <div className='constacts-item_info'>
                                <span className='constacts-item_header'>Facebook</span>
                                <a href={fb}>{fb}</a>
                            </div>
                        </li>                   
                        <li className='contacts_inst constacts-item'>
                            <InstagramIcon alt='inst' sx='height: 50px'/>
                            <div className='constacts-item_info'>
                                <span className='constacts-item_header'>Instagram</span>
                                <a href={inst}>{inst}</a>
                            </div>
                        </li>
                    </ul>
                    <ul className='contacts_locations'>
                        {Object.entries(locations).map(([key, value], index) => 
                            <Locations key={'location in' + key} city={key} address={value} index={index}/>
                        )}
                    </ul>
                </div>
            </div>
        )
    }    
    if (email === '') {
        return (
            <div className='contacts_loader container'>
                <Loader />
            </div>    
        )
    }
}

export default ContactInfo