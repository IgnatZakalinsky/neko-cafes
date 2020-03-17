import {chatsInitialState, ChatsStateType} from "./chatsState";
import {ADD_MESSAGE, chatActions, SET_CHAT_ID, SET_FOLDER_ID} from "./chartActionCreators";

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
        case ADD_MESSAGE:
            const _id = nextId(state.messages);
            return {
                ...state,
                messages: [...state.messages, {_id, chatId: state.checkedChatId, message: action.message}],
            };


        default:
            return state;
    }
};

const nextId = (arr: any[]): string => {
    return Number(arr.reduce(
        (acc, el) => {
            if (Number(acc) < Number(el._id)) return el._id;
            else return acc;
        },
        '0'
    )) + 1 + '';
};
