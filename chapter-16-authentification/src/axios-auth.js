import axios from 'axios'

// create new axios instance
const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts'
})

// instance.defaults.headers.common["something"] = 'something'

export default instance