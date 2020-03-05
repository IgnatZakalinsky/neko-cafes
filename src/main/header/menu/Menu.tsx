import React from 'react';
import s from './Menu.module.css';

type MenuProps = {
    setShowNavBar: () => void;
}

const Menu: React.FC<MenuProps> = ({setShowNavBar}) => {
    return (
        <button className={s.menu} onClick={setShowNavBar}>
            menu
        </button>
    );
};

export default Menu;
