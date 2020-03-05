import React from "react";
import s from './ChatFolders.module.css';
import ChatFolder from "./folder/ChatFolder";
import {ChatFoldersType} from "../bll/chatsState";

type ChatFoldersProps = {
    checkFolderId: (folderId: string) => void;
    checkedFolderId: string;
    folders: ChatFoldersType[];
}

const ChatFolders: React.FC<ChatFoldersProps> = ({checkFolderId, checkedFolderId, folders}) => {

    const mappedFolders = folders.map((f, i) => (
        <ChatFolder
            key={f._id}
            checkFolderId={() => checkFolderId(f._id)}
            checked={checkedFolderId === f._id}
            title={f.title}
            end={i === folders.length - 1}
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
