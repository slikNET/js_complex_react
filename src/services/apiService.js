import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
});

const Endpoints = {
    users: '/users',
    comments: '/comments'
}

export const apiService = {
    //  USERS API
    getUsers: (setUsers) => {
        instance.get(Endpoints.users)
            .then((res) => setUsers(res.data))
    },
    createUser: (user, users, setUsers, setSaving) => {
        instance.post(Endpoints.users, user)
            .then((res) => {
                // NEW USER
                const newUsers = [res.data, ...users];
                setUsers(newUsers)
            })
            .finally(setSaving(false))
    },

    //  COMMENTS API
    getComment: (setComments) => {
        instance.get(Endpoints.comments)
            .then((res) => setComments(res.data))
    },
    createComment: (comment, comments, setComments, setSaving) => {
        instance.post(Endpoints.comments, comment)
            .then((res) => {
                // NEW COMMENT
                const newComment = [res.data, ...comments];
                setComments(newComment)
            })
            .finally(setSaving(false))
    }
}