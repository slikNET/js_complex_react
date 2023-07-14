import React, {useContext, useRef, useState} from 'react';

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

import {UsersContext} from "../Users";

const UserForm = () => {
    console.log('render UserForm');

    const [users, setUsers] = useContext(UsersContext);
    const formRef = {
        name: useRef(''),
        username: useRef(''),
        email: useRef(''),
        phone: useRef(''),
    }

    const [saving, setSaving] = useState(false);

    const createUser = () => {
        setSaving(true);

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name: formRef.name.current.value,
                username: formRef.username.current.value,
                email: formRef.email.current.value,
                phone: formRef.phone.current.value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((newUser) => {
                //  RESET FORM
                formRef.name.current.value = '';
                formRef.username.current.value = '';
                formRef.email.current.value = '';
                formRef.phone.current.value = '';

                // NEW USER
                const newUsers = [newUser, ...users];
                setUsers(newUsers)
            })
            .finally(() => {
                setSaving(false);
            });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        createUser()
    }

    const onInputChange = (e, name) => {
        formRef[name].current.value = e.target.value;
    }

    return (
        <form className={'form'} action={'#'} onSubmit={onSubmitHandler}>
            <Input type={'text'} ref={formRef.name} name={'name'} onChange={(e)=>{onInputChange(e, 'name')}} placeholder={'Name'}/>
            <Input type={'text'} ref={formRef.username} name={'username'} onChange={(e)=>{onInputChange(e, 'username')}} placeholder={'Username'}/>
            <Input type={'email'} ref={formRef.email} name={'email'} onChange={(e)=>{onInputChange(e, 'email')}} placeholder={'Email'}/>
            <Input type={'tel'} ref={formRef.phone} name={'phone'} onChange={(e)=>{onInputChange(e, 'phone')}} placeholder={'Phone'}/>

            <Button type={'submit'} text={'Create New User'} disabled={saving}/>
        </form>
    );
};

export default UserForm;