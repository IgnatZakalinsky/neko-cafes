export type ProfileStateType = {
    profileInfo: ProfileInfoType;
    comments: CommentType[];

};

export const profileInitialState: ProfileStateType = {
    profileInfo: {
        name: 'Neko Nyakus',
        avatar: 'https://i.pinimg.com/236x/d5/5d/13/d55d13b20b736ae5901218587af9c535.jpg',

    },
    comments: [
        {_id: '1', comment: 'nya! :3'},
        {_id: '2', comment: 'thnx!!!'},
        {_id: '3', comment: '=^_^='},

    ],

};

export type ProfileInfoType = {
    name: string;
    avatar: string;

}

export type CommentType = {
    _id: string;
    comment: string;

}
