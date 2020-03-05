import React from 'react';
import s from './Header.module.css';
import Logo from "./logo/Logo";
import Title from "./title/Title";
import Menu from './menu/Menu';

type HeaderProps = {
    setShowNavBar: () => void;
}

const Header: React.FC<HeaderProps> = ({setShowNavBar}) => {
    return (
        <div className={s.header}>
            <Logo/>

            <Title/>

            <Menu setShowNavBar={setShowNavBar}/>
        </div>
    );
};

export default Header;
