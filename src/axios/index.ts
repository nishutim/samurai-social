import axios from "axios";


const $axios = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0',
   withCredentials: true,
   headers: {
      'API-KEY': '43d60197-5500-4ea1-a47b-9d8437f329c2'
   }
});

export default $axios;