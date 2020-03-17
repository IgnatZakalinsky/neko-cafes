import {chatsInitialState, ChatsStateType} from "./chatsState";
import {chatActions, SET_CHAT_ID, SET_FOLDER_ID} from "./chartActionCreators";

export const chatsReducer = (state = chatsInitialState, action: chatActions): ChatsStateType => {
    switch (action.type) {
        case SET_CHAT_ID:
            return {
                ...state,
                checkedChatId: action.chatId,
            };
        case SET_FOLDER_ID:
            return {
                ...state,
                checkedFolderId: action.folderId,
            };


        default:
            return state;
    }
};
