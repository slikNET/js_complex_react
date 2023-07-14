import React from 'react';

const User = ({user}) => {
    console.log('render User Item');

    const {id, name} = user;

    return (
        <div>
            <p>{'ID: ' + id}</p>
            <p>{'NAME: ' + name}</p>
            <hr/>
        </div>
    );
};

export default User;