import React from "react";
import Chat from "./chat/Chat";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../main/store/store";
import {setChatId} from "../bll/chartActionCreators";

type ChatsProps = {

}

const Chats: React.FC<ChatsProps> = () => {
    const {chats, checkedFolderId, checkedChatId} = useSelector((store: AppStoreType) => store.chats);
    const dispatch = useDispatch();

    const filteredMappedChats = chats.filter(c => c.folderId === checkedFolderId)
        .map(c => (
            <Chat
                key={c._id}
                title={c.title}
                checkChatId={() => dispatch(setChatId(c._id))}
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
