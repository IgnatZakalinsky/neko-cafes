import React from "react";
import Message from "./message/Message";
import s from './Messages.module.css';
import {CHECK_CHAT} from "../ChatsPage";
import {MessageType} from "../bll/chatsState";

type MessagesProps = {
    checkedChatId: string;
    chatName: string;
    messages: MessageType[];
}

const Messages: React.FC<MessagesProps> = ({checkedChatId, chatName, messages}) => {

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
