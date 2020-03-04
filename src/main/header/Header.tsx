import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <img
                src={'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/84/84226265b403ae08d98bb4112886054e8f2699b8.jpg'}
                alt={'logo'}
                className={s.img}
            />

            <span className={s.title}>
                neko-cafes
            </span>

            <span className={s.menu}>
                menu
            </span>
        </div>
    );
};

export default Header;
