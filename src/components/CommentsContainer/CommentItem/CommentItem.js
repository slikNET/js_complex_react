import React from 'react';

const CommentItem = ({comment}) => {
    console.log('render Comment Item');

    const {postId, id, name, email, body} = comment;

    return (
        <div>
            <p>ID: {id}</p>
            <p>POST ID: {postId}</p>
            <p>NAME: {name}</p>
            <p>EMAIL: {email}</p>
            <p>COMMENT: {body}</p>
            <hr/>
        </div>
    );
};

export default CommentItem;