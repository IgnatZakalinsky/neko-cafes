import React from 'react';
import s from './Logo.module.css';

type LogoProps = {

}

const Logo: React.FC<LogoProps> = () => {
    return (
        <img
            src={'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/84/84226265b403ae08d98bb4112886054e8f2699b8.jpg'}
            alt={'logo'}
            className={s.img}
        />

    );
};

export default Logo;
