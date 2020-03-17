import React, {useState} from "react";
import s from './AddComment.module.css';

type AddCommentProps = {
    send: (comment: string) => void;
}

const AddComment: React.FC<AddCommentProps> = ({send}) => {
    const [comment, setComment] = useState('');

    const sendCallback = () => {
        send(comment);
        setComment('');
    };

    return (
        <div className={s.addComment}>
            <textarea className={s.textarea} value={comment} onChange={e => setComment(e.currentTarget.value)}/>
            <button className={s.button} onClick={sendCallback}>send</button>
        </div>
    );
};

export default AddComment;
