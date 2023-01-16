import './MenuItem.css'

import { NavLink } from 'react-router-dom';

const MenuItem = ({ page }) => {
    return (
        <li>
            <NavLink 
                className={({ isActive }) => isActive ? "header_link header_link_active" : 'header_link'}
                to={page === 'Home' ? '/' : page}
            >
                {page}
            </NavLink>
        </li>
    );
}

export default MenuItem
