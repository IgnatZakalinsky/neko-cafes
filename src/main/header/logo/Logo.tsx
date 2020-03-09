import React from 'react';
import s from './Logo.module.css';
import logo from './logo.jpg';
import {NavLink} from "react-router-dom";
import {MAP_PATH} from "../../routes/Routes";

type LogoProps = {

}

const Logo: React.FC<LogoProps> = () => {
    return (
        <NavLink to={MAP_PATH}>
            <img src={logo} alt={'logo'} className={s.img}/>
        </NavLink>
    );
};

export default Logo;
