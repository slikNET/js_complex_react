import React, {useEffect, useState} from 'react';

import UserForm from "./UserForm/UserForm";
import User from "./User/User";

import {apiService} from "../../services/apiService";
const Users = () => {
    console.log('render Users');

    const [users, setUsers] = useState();

    useEffect(()=> {
        apiService.getUsers(setUsers)
    }, [])

    return (
        <div className={'app-users'}>
            <UserForm props={[users, setUsers]}/>

            {users?.map(user => {
                //  CHANGE jsonplaceholder DEFAULT IDs
                //  In order to allow multiple creations of users
                user.id = user.id + Date.now();

                return <User key={user.id} user={user}/>
            })}
        </div>
    );
};

export default Users;