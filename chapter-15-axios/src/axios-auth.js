import axios from 'axios'

// create new axios instance
const instance = axios.create({
    baseURL: "https://vue-js-axios-authen.firebaseio.com"
})

instance.defaults.headers.common["something"] = 'something'

export default instance