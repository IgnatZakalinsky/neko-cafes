import {chatsInitialState, ChatsStateType} from "./chatsState";

export const chatsReducer = (state = chatsInitialState, action: any): ChatsStateType => {
    switch (action.type) {


        default: return state;
    }
};
