import axios from 'axios';

let base = 'https://www.linksmedicus.com/wp-json/wp/v2/news';

//获取文章列表
export const getArticleList = params => {
    return axios.get(`${base}/posts`, params).then();
};
export const getNewsList = params => {
    return axios.get(`${base}/news`, params).then();
};
//获取单篇文章
export const getArticle = ids => {
    return axios.get(`${base}/posts/${ids}`).then(res => res.data);
};
//获取文章分类
export const getCategories= params => {
    return axios.get(`${base}/categories`, params).then(res => res.data);
};
//获取文章作者
export const getAuthor= ids => {
    return axios.get(`${base}/users/${ids}`).then(res => res.data);
};
