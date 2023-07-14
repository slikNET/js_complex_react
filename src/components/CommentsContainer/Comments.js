import React, {createContext, useEffect, useState} from 'react';

import CommentForm from "./CommentForm/CommentForm";
import CommentItem from "./CommentItem/CommentItem";

export const CommentsContext = createContext(null);
const Comments = () => {
    console.log('render Comments');

    const [comments, setComments] = useState();


    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then((comment) => {
                setComments(comment);
            })
    }, [])

    return (
        <div>
            <CommentsContext.Provider value={[comments, setComments]}>
                <CommentForm />
            </CommentsContext.Provider>

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