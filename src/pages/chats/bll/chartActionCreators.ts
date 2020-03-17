export const SET_FOLDER_ID = 'chats/SET_FOLDER_ID';
export const SET_CHAT_ID = 'chats/SET_CHAT_ID';

type setFolderIdType = {
    type: typeof SET_FOLDER_ID;
    folderId: string;
}
type setChatIdType = {
    type: typeof SET_CHAT_ID;
    chatId: string;
}

export type chatActions = setFolderIdType | setChatIdType;

export const setFolderId = (folderId: string): setFolderIdType => ({
    type: SET_FOLDER_ID,
    folderId,
});
export const setChatId = (chatId: string): setChatIdType => ({
    type: SET_CHAT_ID,
    chatId,
});
