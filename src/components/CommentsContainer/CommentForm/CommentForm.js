import React, {useContext, useRef, useState} from 'react';

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

import {CommentsContext} from "../Comments";
import TextArea from "../../UI/TextArea/TextArea";

const CommentForm = () => {
    console.log('render CommentForm');

    const [comments, setComments] = useContext(CommentsContext);
    const formRef = {
        name: useRef(''),
        email: useRef(''),
        body: useRef(''),
    }

    const [saving, setSaving] = useState(false);

    const createComment = () => {
        setSaving(true);

        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify({
                postId: 1,
                name: formRef.name.current.value,
                email: formRef.email.current.value,
                body: formRef.body.current.value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((newComment) => {
                //  RESET FORM
                formRef.name.current.value = '';
                formRef.email.current.value = '';
                formRef.body.current.value = '';

                // NEW COMMENT
                const newComments = [newComment, ...comments];
                setComments(newComments)
            })
            .finally(() => {
                setSaving(false);
            });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        createComment()
    }

    const onInputChange = (e, name) => {
        formRef[name].current.value = e.target.value;
    }

    return (
        <form className={'form'} action={'#'} onSubmit={onSubmitHandler}>
            <Input type={'text'} ref={formRef.name} name={'name'} onChange={(e)=>{onInputChange(e, 'name')}} placeholder={'Name'}/>
            <Input type={'email'} ref={formRef.email} name={'email'} onChange={(e)=>{onInputChange(e, 'email')}} placeholder={'Email'}/>
            <TextArea ref={formRef.body} name={'body'} onChange={(e)=>{onInputChange(e, 'body')}} placeholder={'Message'}/>

            <Button type={'submit'} text={'Add New Comment'} disabled={saving}/>
        </form>
    );
};

export default CommentForm;