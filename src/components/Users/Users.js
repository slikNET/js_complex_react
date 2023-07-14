import React, {useEffect, useState} from 'react';
import UserForm from "./UserForm/UserForm";
import User from "./User/User";

const Users = () => {
    console.log('render Users');

    const [users, setUsers] = useState();

    useEffect(()=> {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((users) => {
                setUsers(users);
                // users?.map(user => console.log(user))
            })
    }, [])

    return (
        <div>
           <UserForm/>

            {users?.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;