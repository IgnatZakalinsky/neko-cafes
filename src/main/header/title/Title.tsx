import React from 'react';
import s from './Title.module.css';

type TitleProps = {

}

const Title: React.FC<TitleProps> = () => {
    return (
        <span className={s.title}>
            neko-cafes
        </span>
    );
};

export default Title;
