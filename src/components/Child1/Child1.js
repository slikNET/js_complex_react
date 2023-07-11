import React from 'react';
import SubChild1_1 from "./SubChild1_1/SubChild1_1";
import SubChild1_2 from "./SubChild1_2/SubChild1_2";

const Child1 = () => {
    return (
        <div className={'tree-two'}>
            <p>Child 1</p>

            <SubChild1_1 />
            <SubChild1_2 />
        </div>
    );
};

export default Child1;