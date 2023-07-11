import React from 'react';

const UserAddress = ({address}) => {
    return (
        <div className={'user-address'}>
            <h3>User Address:</h3>
            <p>
                {address?.street && <span>Street: <strong>{address.street}</strong>, </span>}
                {address?.suite && <span>Suite: <strong>{address.suite}</strong>, </span>}
                {address?.city && <span>City: <strong>{address.city}</strong></span>}
            </p>
        </div>
    );
};

export default UserAddress;