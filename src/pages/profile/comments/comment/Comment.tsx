import React from 'react';
import s from './Comment.module.css';

type CommentProps = {
    comment: string
}

const Comment: React.FC<CommentProps> = ({comment}) => {
    return (
        <div className={s.comment}>
            {comment}
        </div>
    );
};

export default Comment;
