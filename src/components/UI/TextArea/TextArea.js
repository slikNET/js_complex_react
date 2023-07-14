import React, {forwardRef} from 'react';

const TextArea = forwardRef(({name, value, onChange, ...props}, ref) => {
    console.log('render TextArea');

    return (
        <div className={'form-controller'}>
            <textarea ref={ref} name={name} onChange={onChange} {...props}>
                {value}
            </textarea>
        </div>
    );
});

export default TextArea;