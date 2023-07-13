import React, {forwardRef} from 'react';

const Input = forwardRef(({type, name, value, onChange, ...props}, ref) => {
    console.log('render Input');

    return (
        <div className={'form-controller'}>
            <input type={type || 'text'} ref={ref} name={name} value={value} onChange={onChange} {...props}/>
        </div>
    );
});

export default Input;