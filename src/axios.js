import axios from 'axios';

const API = axios.create({
    baseURL: `https://hacker-news.firebaseio.com/v0/`,
    timeout: 30000,
});

export const CategoryIdGet = (category) => {
    return API.get(`${category}.json?print=pretty`);
};

export const ContentsGet = (id) => {
    return API.get(`item/${id}.json?print=pretty`);
};
