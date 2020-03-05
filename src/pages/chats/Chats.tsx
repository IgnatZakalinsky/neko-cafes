import React, {useState} from "react";
import s from './Chats.module.css'
import Chat from "./chat/Chat";
import ChatFolders from "./folders/ChatFolders";
import Messages from "./messages/Messages";

export const CHECK_CHAT = 'check chat';

type ChatsProps = {
    closeNavBar: () => void;
}

const Chats: React.FC<ChatsProps> = ({closeNavBar}) => {
    const chats = [
        {_id: '1', title: 'Minsk', folderId: '0'},
        {_id: '2', title: 'Nya', folderId: '1'},
        {_id: '3', title: "McDonald's", folderId: '1'},
        {_id: '6', title: "hz", folderId: '1'},
        {_id: '7', title: "porno", folderId: '1'},
        {_id: '8', title: "anime", folderId: '1'},
        {_id: '9', title: "hentai", folderId: '1'},
        {_id: '4', title: "it-incubator", folderId: '3'},
        {_id: '5', title: "Neko Nyakus", folderId: '2'},
    ];
    const [checkedFolderId, checkFolderId] = useState('0');
    const [checkedChatId, checkChatId] = useState('0');

    const filteredMappedChats = chats.filter(c => c.folderId === checkedFolderId)
        .map(c => (
            <Chat key={c._id} title={c.title} checkChatId={() => checkChatId(c._id)} checked={checkedChatId === c._id}/>
        ));

    // if adding new folder
    if (checkedFolderId === '4' && checkedChatId !== '0') checkChatId('0');

    const checkedChat = chats.find(c => c._id === checkedChatId);

    return (
        <div className={s.chats} onClick={closeNavBar}>
            <ChatFolders checkFolderId={checkFolderId} checkedFolderId={checkedFolderId}/>

            chats:
            {filteredMappedChats}

            <Messages checkedChatId={checkedChatId} chatName={checkedChat ? checkedChat.title : CHECK_CHAT}/>
        </div>
    )
};

export default Chats;
