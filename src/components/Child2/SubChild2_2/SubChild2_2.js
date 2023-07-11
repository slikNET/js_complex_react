import React, {useContext, useEffect} from 'react';
import {DATA} from "../../../App";

const SubChild2_2 = () => {
    const {someData, setSomeData} = useContext(DATA);

    useEffect(() => {
        setSomeData('DATA For 2.2');
    }, []);

    return (
        <div className={'tree-three'}>
            SubChild 2.2
            <br/>
            DATA: <span style={{'color':'red'}}>{someData}</span>
        </div>
    );
};

export default SubChild2_2;