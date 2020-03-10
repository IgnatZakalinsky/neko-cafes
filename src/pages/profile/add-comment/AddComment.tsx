import React from "react";
import s from './AddComment.module.css';

const AddComment = () => {
    return (
        <div className={s.addComment}>
            <textarea className={s.textarea}/>
            <button className={s.button}>send</button>
        </div>
    );
};

export default AddComment;
