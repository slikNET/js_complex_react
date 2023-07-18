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
    getUsers: () => {
        return instance.get(Endpoints.users)
            .then((res) => res.data)
    },
    createUser: (user) => {
        return instance.post(Endpoints.users, user)
            .then((res) => res.data)
    },

    //  COMMENTS API
    getComment: () => {
        return instance.get(Endpoints.comments)
            .then((res) => res.data)
    },
    createComment: (comment) => {
        return instance.post(Endpoints.comments, comment)
            .then((res) =>  res.data)
    }
}