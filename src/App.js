import React from 'react';

import './App.css'
import Users from "./components/UserContainer/Users";
import Comments from "./components/CommentsContainer/Comments";

const App = () => {
    return (
        <div className={'app'}>
            <Users/>
            <Comments/>
        </div>
    );
};

export default App;