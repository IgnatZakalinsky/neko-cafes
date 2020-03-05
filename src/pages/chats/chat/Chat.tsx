import React from "react";
import s from './Chat.module.css';
import {NavLink} from "react-router-dom";
import {CHATS_PATH} from "../../../main/routes/Routes";

type ChatProps = {
    title: string;
    checkChatId: () => void;
    checked: boolean;
    _id: string;
}

const Chat: React.FC<ChatProps> = ({title, checked, checkChatId, _id}) => {
    return (
        <NavLink to={CHATS_PATH + '/' + _id} className={checked ? s.checked : s.chat} onClick={checkChatId}>
            <span>{title}</span>
            <span>/\</span>
        </NavLink>
    );
};

export default Chat;
