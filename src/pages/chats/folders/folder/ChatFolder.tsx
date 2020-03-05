import React from "react";
import s from './ChatFolder.module.css';

type ChatFoldersProps = {
    checkFolderId: () => void;
    checked: boolean;
    title: string;
    end: boolean;
}

const ChatFolder: React.FC<ChatFoldersProps> = ({checkFolderId, checked, title, end}) => {

    return (
        <span
            onClick={checkFolderId}
            style={{color: checked ? '#f95' : undefined, background: checked ? '#111' : undefined}}
            className={end ? s.end : s.chatFolder}
        >
            {title}
        </span>
    );
};

export default ChatFolder;
