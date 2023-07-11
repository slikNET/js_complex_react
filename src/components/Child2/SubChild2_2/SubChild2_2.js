import React, {useContext} from 'react';
import {DATASubChild2_2} from "../../../App";

const SubChild2_2 = () => {
    const data = useContext(DATASubChild2_2);

    return (
        <div className={'tree-three'}>
            SubChild 2.2
            <br/>
            DATA: <span style={{'color':'red'}}>{data}</span>
        </div>
    );
};

export default SubChild2_2;