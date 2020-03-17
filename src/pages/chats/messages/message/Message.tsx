import React from "react";
import s from './Message.module.css';
import moment from "moment";

type MessageProps = {
    message: string;
}

const Message: React.FC<MessageProps> = ({message}) => {
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
                <div className={s.p}>{message}</div>
                <div className={s.time}>{moment().format('HH:mm')}</div>
            </div>
        </div>
    );
};

export default Message;
