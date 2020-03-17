import React from 'react';
import s from './Comment.module.css';
import moment from "moment";

type CommentProps = {
    comment: string
}

const Comment: React.FC<CommentProps> = ({comment}) => {
    return (
        <div className={s.messageNew}>
            <img
                src={'https://i.pinimg.com/236x/d5/5d/13/d55d13b20b736ae5901218587af9c535.jpg'}
                alt="avatar"
                className={s.userPhoto}
            />

            <div className={s.triangle}/>
            <div className={s.mBody}>
                {'Name'}
                <div className={s.p}>{comment}</div>
                <div className={s.time}>{moment().format('HH:mm')}</div>
            </div>
        </div>
    );
};

export default Comment;
