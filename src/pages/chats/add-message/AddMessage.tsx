import React, {useState} from "react";
import s from './AddMessage.module.css';

type AddMessageProps = {
    send: (message: string) => void;
}

const AddMessage: React.FC<AddMessageProps> = ({send}) => {
    const [message, setMessage] = useState('');

    return (
        <div className={s.addComment}>
            <textarea className={s.textarea} onChange={e => setMessage(e.currentTarget.value)}/>
            <button className={s.button} onClick={() => send(message)}>send</button>
        </div>
    );
};

export default AddMessage;
