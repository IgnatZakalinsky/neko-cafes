export const SET_FOLDER_ID = 'chats/SET_FOLDER_ID';
export const SET_CHAT_ID = 'chats/SET_CHAT_ID';
export const ADD_MESSAGE = 'chats/ADD_MESSAGE';

type setFolderIdType = {
    type: typeof SET_FOLDER_ID;
    folderId: string;
}
type setChatIdType = {
    type: typeof SET_CHAT_ID;
    chatId: string;
}
type addMessageType = {
    type: typeof ADD_MESSAGE;
    message: string;
}

export type chatActions = setFolderIdType | setChatIdType | addMessageType;

export const setFolderId = (folderId: string): setFolderIdType => ({
    type: SET_FOLDER_ID,
    folderId,
});
export const setChatId = (chatId: string): setChatIdType => ({
    type: SET_CHAT_ID,
    chatId,
});
export const addMessage = (message: string): addMessageType => ({
    type: ADD_MESSAGE,
    message,
});
