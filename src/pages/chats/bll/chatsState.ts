import {ADD_NEW} from "../ChatsPage";

export type ChatsStateType = {
    chats: ChatType[];
    chatFolders: ChatFoldersType[];
    messages: MessageType[];

};

export const chatsInitialState: ChatsStateType = {
    chats: [
        {_id: '1', title: 'Minsk', folderId: '0'},
        {_id: '2', title: 'Nya', folderId: '1'},
        {_id: '3', title: "McDonald's", folderId: '1'},
        {_id: '6', title: "hz", folderId: '1'},
        {_id: '7', title: "porno", folderId: '1'},
        {_id: '8', title: "anime", folderId: '1'},
        {_id: '9', title: "hentai", folderId: '1'},
        {_id: '4', title: "it-incubator", folderId: '3'},
        {_id: '5', title: "Neko Nyakus", folderId: '2'},
    ],
    chatFolders: [
        {_id: '0', title: 'def'},
        {_id: '1', title: 'fun'},
        {_id: '2', title: 'ls'},
        {_id: '3', title: 'work'},
        {_id: ADD_NEW, title: ADD_NEW},
    ],
    messages: [
        {_id: '0', message: 'hi Minsk!', chatId: '1'},
        {_id: '1', message: 'hi', chatId: '1'},
        {_id: '2', message: '=^_^=', chatId: '2'},
        {_id: '3', message: 'BIG MAK!', chatId: '3'},
        {_id: '4', message: 'Just DO it!', chatId: '4'},
        {_id: '5', message: 'hi!', chatId: '5'},
        {_id: '6', message: 'what is your name?', chatId: '5'},
        {_id: '7', message: 'test xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', chatId: '8'},
        {_id: '8', message: 'testx testx testx testx testx testx testx testx testx testx testx testx ', chatId: '8'},
    ],

};

export type ChatType = {
    _id: string;
    title: string;
    folderId: string;

}

export type ChatFoldersType = {
    _id: string;
    title: string;

}

export type MessageType = {
    _id: string;
    message: string;
    chatId: string;

}
