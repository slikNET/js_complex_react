import React from 'react';

const UserDetails = ({user}) => {
    return (
        <div className={'user-details'}>
            <h3>{user.username} <small>(ID: {user.id})</small></h3>
            {user?.email && <p>Email: <strong>{user.email}</strong></p>}
            {user?.phone && <p>Phone: <strong>{user.phone}</strong></p>}
            {user?.website && <p>Website: <strong>{user.website}</strong></p>}
        </div>
    );
};

export default UserDetails;