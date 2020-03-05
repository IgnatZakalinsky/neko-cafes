import React from 'react';
import s from './NavBarLink.module.css';
import {NavLink} from "react-router-dom";

type NavBarLinkProps = {
    checked: boolean;
    check: () => void;
    last: boolean;
    title: string;
    to: string;
}

const NavBarLink: React.FC<NavBarLinkProps> = ({check, checked, title, last, to}) => {

    return (
        <NavLink
            to={to}
            style={{
                color: checked ? '#f95' : '#111',
                background: checked ? '#111' : undefined,
                marginRight: last ? 20 : undefined,
            }}
            className={s.link}
            activeClassName={s.active}
            onClick={check}
        >
            {title}
        </NavLink>
    );
};

export default NavBarLink;
