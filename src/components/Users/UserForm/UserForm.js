import React, {useRef} from 'react';

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const UserForm = () => {
    console.log('render UserForm');

    const nameRef = useRef('');
    const usernameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');

    const onSubmitHandler = (e) => {
        e.preventDefault();

        console.log(nameRef.current.value)
        console.log(usernameRef.current.value)
        console.log(emailRef.current.value)
        console.log(phoneRef.current.value)
    }

    return (
        <form className={'form'} action={'#'} onSubmit={(e) => onSubmitHandler(e)}>
            <Input type={'text'} ref={nameRef} name={'name'} value={nameRef.current.value} placeholder={'Name'}/>
            <Input type={'text'} ref={usernameRef} name={'username'} value={usernameRef.current.value} placeholder={'Username'}/>
            <Input type={'email'} ref={emailRef} name={'email'} value={emailRef.current.value} placeholder={'Email'}/>
            <Input type={'tel'} ref={phoneRef} name={'phone'} value={phoneRef.current.value} placeholder={'Phone'}/>

            <Button type={'submit'} text={'Create New User'}/>
        </form>
    );
};

export default UserForm;