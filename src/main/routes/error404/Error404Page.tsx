import React from "react";
import s from './Error404Page.module.css';

type Error404PageProps = {

}

const Error404Page: React.FC<Error404PageProps> = () => {
    return (
        <div className={s.text}>
            404 page not found
        </div>
    );
};

export default Error404Page;
