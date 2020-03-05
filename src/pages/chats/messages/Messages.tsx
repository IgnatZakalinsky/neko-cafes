import React from "react";
import Message from "./message/Message";
import s from './Messages.module.css';
import {CHECK_CHAT} from "../Chats";

type MessagesProps = {
    checkedChatId: string;
    chatName: string;
}

const Messages: React.FC<MessagesProps> = ({checkedChatId, chatName}) => {
    const messages = [
        {_id: '0', message: 'hi Minsk!', chatId: '1'},
        {_id: '1', message: 'hi', chatId: '1'},
        {_id: '2', message: '=^_^=', chatId: '2'},
        {_id: '3', message: 'BIG MAK!', chatId: '3'},
        {_id: '4', message: 'Just DO it!', chatId: '4'},
        {_id: '5', message: 'hi!', chatId: '5'},
        {_id: '6', message: 'what is your name?', chatId: '5'},
    ];

    const filteredMappedMessages = messages.filter(m => m.chatId === checkedChatId)
        .map(m => (
            <Message key={m._id} message={m.message}/>
        ));

    return (
        <div>
            <div className={s.br}/>
            <div className={s.chat}>
                {chatName}
            </div>
            {chatName !== CHECK_CHAT &&
            <>
                messages:
                <div>
                    {filteredMappedMessages}
                </div>
            </>
            }
        </div>
    );
};

export default Messages;
