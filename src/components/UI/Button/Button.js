import React from 'react';

const Button = ({type, text, ...props}) => {
    console.log('render Button');

    return (
        <div className={'form-controller'}>
            <button type={type || 'submit'}{...props}>{text || 'Send'}</button>
        </div>
    );
};

export default Button;