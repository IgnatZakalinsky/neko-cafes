import {profileInitialState, ProfileStateType} from "./profileState";

export const profileReducer = (state = profileInitialState, action: any): ProfileStateType => {
    switch (action.type) {


        default: return state;
    }
};
