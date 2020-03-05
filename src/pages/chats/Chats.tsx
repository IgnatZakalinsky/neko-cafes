import React, {useState} from "react";
import s from './Chats.module.css'
import Chat from "./chat/Chat";
import ChatFolders from "./folders/ChatFolders";

type ChatsProps = {
    closeNavBar: () => void;
}

const Chats: React.FC<ChatsProps> = ({closeNavBar}) => {
    const chats = [
        {_id: '1', title: 'Minsk', folderId: '0'},
        {_id: '2', title: 'Nya', folderId: '1'},
        {_id: '3', title: "McDonald's", folderId: '1'},
        {_id: '3', title: "it-incubator", folderId: '3'},
        {_id: '3', title: "Neko Nyakus", folderId: '2'},
    ];
    const [checkedFolderId, checkFolderId] = useState('0');

    const filteredMappedChats = chats.filter(c => c.folderId === checkedFolderId)
        .map(c => (
            <Chat key={c._id} title={c.title}/>
        ));

    return (
        <div className={s.chats} onClick={closeNavBar}>
            <ChatFolders checkFolderId={checkFolderId} checkedFolderId={checkedFolderId}/>

            chats:
            {filteredMappedChats}
        </div>
    )
};

export default Chats;
