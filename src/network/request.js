import axios from 'axios';
export function request(config) {
  const instance = axios.create({});
  instance.interceptors.response.use(res => {
    return res.data;
  });
  return instance(config);
}
