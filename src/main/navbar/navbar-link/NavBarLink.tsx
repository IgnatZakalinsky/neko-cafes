import React from 'react';
import s from './NavBarLink.module.css';

type NavBarLinkProps = {
    checked: boolean;
    check: () => void;
    last: boolean;
    title: string;
}

const NavBarLink: React.FC<NavBarLinkProps> = ({check, checked, title, last}) => {

    return (
        <a
            style={{
                color: checked ? '#f95' : '#111',
                background: checked ? '#111' : undefined,
                marginRight: last ? 20 : undefined,
            }}
            className={s.link}
            onClick={check}
        >
            {title}
        </a>
    );
};

export default NavBarLink;
