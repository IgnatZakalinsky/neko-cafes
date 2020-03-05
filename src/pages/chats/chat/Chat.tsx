import React from "react";
import s from './Chat.module.css';

type ChatProps = {
    title: string;
}

const Chat: React.FC<ChatProps> = ({title}) => {
    return (
        <div className={s.chat}>
            <span>{title}</span>
            <span>/\</span>
        </div>
    );
};

export default Chat;
