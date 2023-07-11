import React from 'react';

import Company from "../Company/Company";
import UserDetails from "../UserDetails/UserDetails";
import UserAddress from "../UserAddress/UserAddress";

const User = ({user, getPostInfo}) => {
    return (
        <div className={'user-item'}>
            <UserDetails user={user}/>
            <UserAddress address={user?.address}/>
            <Company company={user?.company}/>
            <div className={'user-btm'}>
                <button onClick={() => getPostInfo(user.id)}>Show Posts</button>
            </div>
        </div>
    );
};

export default User;