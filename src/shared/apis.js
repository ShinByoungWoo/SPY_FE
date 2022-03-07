import axios from 'axios';

const api = axios.create({
  baseURL: 'http://mafia.milagros.shop/api',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
});

export const apis = {
  // room
  lobby: () => api.get('/lobby'),
  post: (postId) => api.get(`/api/posts/${postId}`),
  add: (title, price, imgurl, content) =>
    api.post('/api/posts', title, price, imgurl, content),
  image: (file) => api.post('/api/image', file),
  edit: (postId, title, price, imgurl, content) =>
    api.put(`/api/posts`, postId, title, price, imgurl, content),
  del: (postId) => api.delete(`/api/posts`, postId),
  changeStatus: (postId) => api.patch(`/api/status`, postId),
};