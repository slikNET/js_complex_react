import React from 'react';

const User = ({user}) => {
    console.log('render User Item');

    const {id, name, email} = user;

    return (
        <div>
            <p>ID: {id}</p>
            <p>NAME: {name}</p>
            <p>EMAIL: {email}</p>
            <hr/>
        </div>
    );
};

export default User;