import React, {useContext} from 'react';
import {DATA} from "../../../App";

const SubChild1_1 = () => {
    const {someData} = useContext(DATA);

    return (
        <div className={'tree-three'}>
            SubChild 1.1
            <br/>
            I USE DATA FROM: <span style={{'color':'red'}}>{someData}</span>
        </div>
    );
};

export default SubChild1_1;