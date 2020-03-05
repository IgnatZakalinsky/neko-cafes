import React, {useState} from "react";
import s from './Chats.module.css';
import ChatFolders from "./folders/ChatFolders";
import Messages from "./messages/Messages";
import {useLocation, useHistory} from "react-router-dom";
import Chats from "./chats/Chats";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../main/store/store";
import {CHATS_PATH} from "../../main/routes/Routes";

export const CHECK_CHAT = 'check chat';
export const ADD_FOLDER = 'add new';

type ChatsProps = {
    closeNavBar: () => void;
}

const ChatsPage: React.FC<ChatsProps> = ({closeNavBar}) => {
    const {chats, chatFolders, messages} = useSelector((store: AppStoreType) => store.chats);
    const [checkedFolderId, checkFolderId] = useState('0');
    const [checkedChatId, checkChatId] = useState('0');

    // get info from url
    const location = useLocation();
    const path = location.pathname.split('/');
    if (path[2] !== checkedChatId && checkedFolderId !== ADD_FOLDER) checkChatId(path[2]);

    // if adding new folder
    const history = useHistory();
    if (checkedFolderId === ADD_FOLDER && checkedChatId !== '0') {
        checkChatId('0');
        history.push(CHATS_PATH);
    }

    // logic for unchecked chat
    const checkedChat = chats.find(c => c._id === checkedChatId);

    return (
        <div className={s.chats} onClick={closeNavBar}>
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
            />
        </div>
    )
};

export default ChatsPage;
