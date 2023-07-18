import React from 'react';

const CommentItem = ({comment}) => {
    console.log('render User Item');

    const {id, name, email, body} = comment;

    return (
        <div>
            <p>ID: {id}</p>
            <p>NAME: {name}</p>
            <p>EMAIL: {email}</p>
            <p>BODY: {body}</p>
            <hr/>
        </div>
    );
};

export default CommentItem;