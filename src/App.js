import React, {createContext, useState} from 'react';

import './App.scss';

import Child1 from "./components/Child1/Child1";
import Child2 from "./components/Child2/Child2";

export const DATA = createContext(null);

const App = () => {

    const [someData, setSomeData] = useState('');

    return (
        <div className={'tree'}>
            <div className={'tree-one'}>MAIN APP</div>

            <DATA.Provider value={{someData, setSomeData}}>
                <Child1 />
                <Child2 />
            </DATA.Provider>
        </div>
    );
};

export default App;