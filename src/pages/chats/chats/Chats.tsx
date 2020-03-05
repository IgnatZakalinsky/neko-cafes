import React from "react";
import Chat from "./chat/Chat";
import {ChatType} from "../bll/chatsState";

type ChatsProps = {
    chats: ChatType[];
    checkedFolderId: string;
    checkChatId: (chatId: string) => void;
    checkedChatId: string
}

const Chats: React.FC<ChatsProps> = (
    {chats, checkChatId, checkedFolderId, checkedChatId}
) => {

    const filteredMappedChats = chats.filter(c => c.folderId === checkedFolderId)
        .map(c => (
            <Chat
                key={c._id}
                title={c.title}
                checkChatId={() => checkChatId(c._id)}
                checked={checkedChatId === c._id}
                _id={c._id}
            />
        ));

    return (
        <div>
            chats:
            {filteredMappedChats}
        </div>
    );
};

export default Chats;
