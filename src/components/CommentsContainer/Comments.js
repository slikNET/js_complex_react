import React, {createContext, useEffect, useState} from 'react';

import CommentForm from "./CommentForm/CommentForm";
import CommentItem from "./CommentItem/CommentItem";

import {apiService} from "../../services/apiService";
const Comments = () => {
    console.log('render Comments');

    const [comments, setComments] = useState();

    useEffect(()=> {
        apiService.getComment(setComments)
    }, [])

    return (
        <div className={'app-comments'}>
            <CommentForm props={[comments, setComments]}/>

            {comments?.map(comment => {
                //  CHANGE jsonplaceholder DEFAULT IDs
                //  In order to allow multiple creations of comments
                comment.id = comment.id + Date.now();

                return <CommentItem key={comment.id} comment={comment}/>
            })}
        </div>
    );
};

export default Comments;