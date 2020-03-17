import React from "react";
import s from './ChatFolders.module.css';
import ChatFolder from "./folder/ChatFolder";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../main/store/store";
import {setFolderId} from "../bll/chartActionCreators";

type ChatFoldersProps = {

}

const ChatFolders: React.FC<ChatFoldersProps> = () => {
    const {chatFolders, checkedFolderId} = useSelector((store: AppStoreType) => store.chats);
    const dispatch = useDispatch();

    const mappedFolders = chatFolders.map((f, i) => (
        <ChatFolder
            key={f._id}
            checkFolderId={() => dispatch(setFolderId(f._id))}
            checked={checkedFolderId === f._id}
            title={f.title}
            end={i === chatFolders.length - 1}
        />
    ));

    return (
        <div>
            chat folders:
            <div className={s.chatFolders}>
                {mappedFolders}
            </div>
        </div>
    );
};

export default ChatFolders;
