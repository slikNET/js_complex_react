import React, {createContext, useEffect, useState} from 'react';

import UserForm from "./UserForm/UserForm";
import User from "./User/User";
export const UsersContext = createContext(null);
const Users = () => {
    console.log('render Users');

    const [users, setUsers] = useState();


    useEffect(()=> {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((users) => {
                setUsers(users);
            })
    }, [])

    return (
        <div>
            <UsersContext.Provider value={[users, setUsers]}>
                <UserForm/>
            </UsersContext.Provider>

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