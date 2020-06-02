import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-app-ded5d.firebaseio.com'
});

export default instance;