import React from "react";
import s from './AddMessage.module.css';

const AddMessage = () => {
    return (
        <div className={s.addComment}>
            <textarea className={s.textarea}/>
            <button className={s.button}>send</button>
        </div>
    );
};

export default AddMessage;
