import React, {useState} from "react";
import s from './AddMessage.module.css';

type AddMessageProps = {
    send: (message: string) => void;
}

const AddMessage: React.FC<AddMessageProps> = ({send}) => {
    const [message, setMessage] = useState('');

    const sendCallback = () => {
        send(message);
        setMessage('');
    };

    return (
        <div className={s.addComment}>
            <textarea className={s.textarea} value={message} onChange={e => setMessage(e.currentTarget.value)}/>
            <button className={s.button} onClick={sendCallback}>send</button>
        </div>
    );
};

export default AddMessage;
