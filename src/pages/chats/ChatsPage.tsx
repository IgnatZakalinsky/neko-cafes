import React from "react";
import s from './Chats.module.css';
import ChatFolders from "./folders/ChatFolders";
import Messages from "./messages/Messages";
import {useLocation} from "react-router-dom";
import Chats from "./chats/Chats";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../main/store/store";
import {setChatId} from "./bll/chartActionCreators";

export const CHECK_CHAT = 'check chat';
export const ADD_NEW = 'add new'; // chat/folder/else...

type ChatsProps = {

}

const ChatsPage: React.FC<ChatsProps> = () => {
    const {checkedFolderId, checkedChatId} = useSelector((store: AppStoreType) => store.chats);
    const dispatch = useDispatch();

    // get info from url
    const location = useLocation();
    const path = location.pathname.split('/');
    if (path[2] !== checkedChatId && checkedFolderId !== ADD_NEW) dispatch(setChatId(path[2]));

    // if adding new
    if (checkedFolderId === ADD_NEW && checkedChatId !== '0') dispatch(setChatId('0'));

    return (
        <div className={s.chats}>
            <ChatFolders/>

            <Chats/>

            <Messages/>
        </div>
    )
};

export default ChatsPage;
