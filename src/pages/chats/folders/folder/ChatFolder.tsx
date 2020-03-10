import React from "react";
import s from './ChatFolder.module.css';
import {NavLink} from "react-router-dom";
import {CHATS_PATH} from "../../../../main/routes/Routes";

type ChatFoldersProps = {
    checkFolderId: () => void;
    checked: boolean;
    title: string;
    end: boolean;
}

const ChatFolder: React.FC<ChatFoldersProps> = ({checkFolderId, checked, title, end}) => {

    return (
        <NavLink to={CHATS_PATH}
            onClick={checkFolderId}
            style={{color: checked ? '#f95' : undefined, background: checked ? '#111' : undefined}}
            className={end ? s.end : s.chatFolder}
        >
            {title}
            <span className={s.button}>/\</span>
        </NavLink>
    );
};

export default ChatFolder;
