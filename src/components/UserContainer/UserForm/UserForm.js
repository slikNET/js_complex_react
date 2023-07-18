import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {apiService} from "../../../services/apiService";

const UserForm = ({props}) => {
    console.log('render UserForm');

    const [users, setUsers] = props;
    const [saving, setSaving] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const createUser = (user) => {
        setSaving(true);

        apiService.createUser(user, users, setUsers, setSaving)

        reset();
    }

    return (
        <form className={'form'} action={'#'} onSubmit={handleSubmit(createUser)}>
            <input type="text" {...register('name', {
                required: 'Empty field!'
            })}/>
            {errors.name && <span>{errors.name.message}</span>}
            <br/>

            <input type="text" {...register('username', {
                required: 'Empty field!'
            })}/>
            {errors.username && <span>{errors.username.message}</span>}
            <br/>

            <input type="email" {...register('email', {
                required: 'Empty field!',
                pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: 'Please enter a valid email'
                }
            })}/>
            {errors.email && <span>{errors.email.message}</span>}
            <br/>

            <input type="tel" {...register('phone', {
                required: 'Empty field!'
            })}/>
            {errors.phone && <span>{errors.phone.message}</span>}
            <br/>

            <button disabled={saving}>Create New User</button>
        </form>
    );
};

export default UserForm;