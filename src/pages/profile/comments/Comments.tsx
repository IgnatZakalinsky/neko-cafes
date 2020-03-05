import React from 'react';
import s from './Comments.module.css';
import Comment from "./comment/Comment";
import {CommentType} from "../bll/profileState";

type CommentsProps = {
    comments: CommentType[]
}

const Comments: React.FC<CommentsProps> = ({comments}) => {

    const mappedComments = comments.map(c => <Comment key={c._id} comment={c.comment}/>);

    return (
        <div className={s.comments}>
            comments:
            {mappedComments}
        </div>
    );
};

export default Comments;
