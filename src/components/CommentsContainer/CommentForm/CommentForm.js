import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {apiService} from "../../../services/apiService";

const CommentForm = ({props}) => {
    console.log('render CommentForm');

    const [comments, setComments] = props;
    const [saving, setSaving] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const createComment = (comment) => {
        setSaving(true);

        apiService.createComment(comment, comments, setComments, setSaving)

        reset();
    }

    return (
        <form className={'form'} action={'#'} onSubmit={handleSubmit(createComment)}>
            <input type="text" {...register('name', {
                required: 'Empty field!'
            })}/>
            {errors.name && <span>{errors.name.message}</span>}
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

            <textarea {...register('body', {
                required: 'Empty field!'
            })}>
            </textarea>
            {errors.body && <span>{errors.body.message}</span>}
            <br/>
            <button disabled={saving}>Add Comment</button>
        </form>
    );
};

export default CommentForm;