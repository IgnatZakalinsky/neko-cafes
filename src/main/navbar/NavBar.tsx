import React, {useState} from 'react';
import s from './NavBar.module.css';

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

    return (
        <div className={s.navBar}>
            {navLinks.map((n, i) =>
                <span
                    key={'NavBar-key-' + i}
                    style={{
                        color: checked === n ? '#f95' : '#111',
                        background: checked === n ? '#111' : undefined,
                        marginRight: i === navLinks.length - 1 ? 20 : undefined,
                    }}
                    className={s.span}
                    onClick={() => check(n)}
                >
                    {n.title}
                </span>
            )}
        </div>
    );
};

export default NavBar;
