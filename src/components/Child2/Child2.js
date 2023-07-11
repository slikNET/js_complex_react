import React from 'react';
import SubChild2_1 from "./SubChild2_1/SubChild2_1";
import SubChild2_2 from "./SubChild2_2/SubChild2_2";

const Child2 = () => {
    return (
        <div className={'tree-two'}>
            <p>Child 2</p>

            <SubChild2_1 />
            <SubChild2_2 />
        </div>
    );
};

export default Child2;