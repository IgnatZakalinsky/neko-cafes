import React from "react";
import Message from "./message/Message";
import s from './Messages.module.css';
import {CHECK_CHAT} from "../ChatsPage";
import AddMessage from "../add-message/AddMessage";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../main/store/store";
import {ChatType} from "../bll/chatsState";
import {addMessage} from "../bll/chartActionCreators";

type MessagesProps = {

}

const Messages: React.FC<MessagesProps> = () => {
    const {messages, checkedChatId, chats} = useSelector((store: AppStoreType) => store.chats);
    const dispatch = useDispatch();

    const checkedChat: ChatType | undefined = chats.find(c => c._id === checkedChatId);
    const chatName = checkedChat ? checkedChat.title : CHECK_CHAT;

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

                <AddMessage send={(message) => dispatch(addMessage(message))}/>
            </>
            }
        </div>
    );
};

export default Messages;
