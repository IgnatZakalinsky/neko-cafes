import React from "react";
import s from './Chat.module.css';

type ChatProps = {
    title: string;
    checkChatId: () => void;
    checked: boolean;
}

const Chat: React.FC<ChatProps> = ({title, checked, checkChatId}) => {
    return (
        <div className={checked ? s.checked : s.chat} onClick={checkChatId}>
            <span>{title}</span>
            <span>/\</span>
        </div>
    );
};

export default Chat;
