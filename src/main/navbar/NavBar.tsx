import React, {useState} from 'react';
import s from './NavBar.module.css';
import NavBarLink from "./navbar-link/NavBarLink";
import {CHATS_PATH, MAP_PATH, PROFILE_PATH} from "../routes/Routes";
import {useLocation} from 'react-router-dom';

const navLinks = [
    {title: 'Map(main)', to: MAP_PATH},
    // {title: 'Cafes in point'},
    {title: 'Chats', to: CHATS_PATH},
    {title: 'Profile', to: PROFILE_PATH},
    // {title: 'Cafe'},
    // {title: 'Orders'},
    // {title: 'Chat'},
];

const NavBar = () => {
    const [checked, check] = useState(navLinks[2]);
    const location = useLocation();
    if (location.pathname !== checked.to)
        check(navLinks.find(n => n.to === location.pathname) || navLinks[2]);

    const mappedNavLinks = navLinks.map((n, i) =>
        <NavBarLink
            key={'NavBar-key-' + i}
            check={() => check(n)}
            title={n.title}
            checked={checked === n}
            last={i === navLinks.length - 1}
            to={n.to}
        />
    );

    return (
        <div className={s.navBar}>
            {mappedNavLinks}
        </div>
    );
};

export default NavBar;
