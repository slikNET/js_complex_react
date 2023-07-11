import React, {useContext} from 'react';
import {DATASubChild2_2} from "../../../App";

const SubChild1_1 = () => {
    const data = useContext(DATASubChild2_2);

    return (
        <div className={'tree-three'}>
            SubChild 1.1
            <br/>
            I USE DATA FROM: <span style={{'color':'red'}}>{data}</span>
        </div>
    );
};

export default SubChild1_1;