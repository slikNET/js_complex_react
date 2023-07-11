import React, {createContext} from 'react';

import './App.scss';

import Child1 from "./components/Child1/Child1";
import Child2 from "./components/Child2/Child2";

export const DATASubChild2_2 = createContext(null);

const App = () => {
    return (
        <div className={'tree'}>
            <div className={'tree-one'}>MAIN APP</div>

            <DATASubChild2_2.Provider value="Data For SubChild 2.2">
                <Child1 />
                <Child2 />
            </DATASubChild2_2.Provider>
        </div>
    );
};

export default App;