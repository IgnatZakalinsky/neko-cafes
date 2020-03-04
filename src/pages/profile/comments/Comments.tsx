import React from 'react';
import s from './Comments.module.css';

const Comments = () => {
    const comments = [
        {_id: 1, comment: 'nya! :3'},
        {_id: 2, comment: 'thnx!!!'},
        {_id: 3, comment: '=^_^='},
    ];

    const mappedComments = comments.map(c => <div key={c._id} className={s.comment}>{c.comment}</div>);

    return (
        <div>
            comments:
            {mappedComments}
        </div>
    );
};

export default Comments;
