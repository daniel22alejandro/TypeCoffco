import axios from 'axios';
type Props={
    token?: string

}
const conexionApi = (token:Props) => {
    axios.defaults.withCredentials = true;
 
  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
      'Content-Type': 'application/json',
      'token': `${token}`
    }
  });

  return api;
};

export default conexionApi;