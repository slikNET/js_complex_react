import React, {useEffect, useState} from 'react';
import Users from "./components/UserContainer/Users";

const App = () => {

    const [users, setUsers] = useState([]);
    const [userPosts, setUserPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                setUsers(users)
            })
    }, []);

    const getPostInfo = (userID) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
            .then(res => res.json())
            .then(post => {
                setUserPosts(post)
            })
            .finally(()=>{
                document.scrollingElement.scrollTop = 0
            })


    }

    return (
        <>
            <div className={'user-posts'}>
                {userPosts.length > 0 ?
                    userPosts.map(post => {
                            return (
                                <div className={'user-posts-item'}>
                                    <br/>
                                    <h4>{post.title} <small>(Post ID: {post.id})</small></h4>
                                    <p>{post.body}</p>
                                    <br/>
                                    <hr/>
                                </div>
                            )
                        })
                    : <p title="In order to see user posts - click 'Show Posts' below!">No Posts here!</p>}
            </div>
            <Users users={users} getPostInfo={getPostInfo}/>
        </>
    );
};

export default App;