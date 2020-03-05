import React from 'react';
import s from './Comments.module.css';
import Comment from "./comment/Comment";

const Comments = () => {
    const comments = [
        {_id: '1', comment: 'nya! :3'},
        {_id: '2', comment: 'thnx!!!'},
        {_id: '3', comment: '=^_^='},
    ];

    const mappedComments = comments.map(c => <Comment key={c._id} comment={c.comment}/>);

    return (
        <div className={s.comments}>
            comments:
            {mappedComments}
        </div>
    );
};

export default Comments;
