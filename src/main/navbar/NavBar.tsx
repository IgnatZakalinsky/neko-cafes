import React, {useState} from 'react';
import s from './NavBar.module.css';
import NavBarLink from "./navbar-link/NavBarLink";

const navLinks = [
    {title: 'Map(main)'},
    // {title: 'Cafes in point'},
    {title: 'Chats'},
    {title: 'Profile'},
    // {title: 'Cafe'},
    // {title: 'Orders'},
    // {title: 'Chat'},
];

const NavBar = () => {
    const [checked, check] = useState(navLinks[2]);

    const mappedNavLinks = navLinks.map((n, i) =>
        <NavBarLink
            key={'NavBar-key-' + i}
            check={() => check(n)}
            title={n.title}
            checked={checked === n}
            last={i === navLinks.length - 1}
        />
    );

    return (
        <div className={s.navBar}>
            {mappedNavLinks}
        </div>
    );
};

export default NavBar;
