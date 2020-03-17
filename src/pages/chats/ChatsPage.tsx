import React, {useState} from "react";
import s from './Chats.module.css';
import ChatFolders from "./folders/ChatFolders";
import Messages from "./messages/Messages";
import {useLocation} from "react-router-dom";
import Chats from "./chats/Chats";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../main/store/store";
import {ChatType} from "./bll/chatsState";

export const CHECK_CHAT = 'check chat';
export const ADD_NEW = 'add new'; // chat/folder/else...

type ChatsProps = {

}

const ChatsPage: React.FC<ChatsProps> = () => {
    const {chats, chatFolders, messages} = useSelector((store: AppStoreType) => store.chats);

    const [checkedFolderId, checkFolderId] = useState('0'); // save in redux
    const [checkedChatId, checkChatId] = useState('0'); // save in redux

    // get info from url
    const location = useLocation();
    const path = location.pathname.split('/');
    if (path[2] !== checkedChatId && checkedFolderId !== ADD_NEW) checkChatId(path[2]);

    // if adding new
    if (checkedFolderId === ADD_NEW && checkedChatId !== '0') checkChatId('0');

    // logic for unchecked chat
    const checkedChat: ChatType | undefined = chats.find(c => c._id === checkedChatId);

    return (
        <div className={s.chats}>
            <ChatFolders checkFolderId={checkFolderId} checkedFolderId={checkedFolderId} folders={chatFolders}/>

            <Chats
                chats={chats}
                checkChatId={checkChatId}
                checkedChatId={checkedChatId}
                checkedFolderId={checkedFolderId}
            />

            <Messages
                checkedChatId={checkedChatId}
                chatName={checkedChat ? checkedChat.title : CHECK_CHAT}
                messages={messages}
                send={(message) => alert(message)}
            />
        </div>
    )
};

export default ChatsPage;
