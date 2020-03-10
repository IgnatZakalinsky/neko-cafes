import React, {useState} from "react";
import s from './AddComment.module.css';

type AddCommentProps = {
    send: (message: string) => void;
}

const AddComment: React.FC<AddCommentProps> = ({send}) => {
    const [comment, setComment] = useState('');

    return (
        <div className={s.addComment}>
            <textarea className={s.textarea} onChange={e => setComment(e.currentTarget.value)}/>
            <button className={s.button} onClick={() => send(comment)}>send</button>
        </div>
    );
};

export default AddComment;
