import React from 'react';

import './users.scss';

import User from "./User/User";

const Users = ({users, getPostInfo}) => {
    return (
        <div className={'user-wrap'}>
            {users?.map((user) => <User key={user.id} user={user} getPostInfo={getPostInfo}/> )}
        </div>
    );
};

export default Users;