import React from "react";
import s from './ChatFolders.module.css';
import ChatFolder from "./folder/ChatFolder";
import {ADD_FOLDER} from "../Chats";

type ChatFoldersProps = {
    checkFolderId: (folderId: string) => void;
    checkedFolderId: string;
}

const ChatFolders: React.FC<ChatFoldersProps> = ({checkFolderId, checkedFolderId}) => {
    const folders = [
        {_id: '0', title: 'def'},
        {_id: '1', title: 'fun'},
        {_id: '2', title: 'ls'},
        {_id: '3', title: 'work'},
        {_id: ADD_FOLDER, title: ADD_FOLDER},
    ];

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
