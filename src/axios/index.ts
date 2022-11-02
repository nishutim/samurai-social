import axios from "axios";


const $axios = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0',
   withCredentials: true,
   headers: {
      "API-KEY": "8ab3f5b9-2029-4a40-b352-e5e53ce679c3"
   }
});

export default $axios;