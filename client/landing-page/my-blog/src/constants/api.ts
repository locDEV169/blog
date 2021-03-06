import axios from 'axios'
import Cookies from 'js-cookie'
const API_URL = process.env.API_URL || 'http://localhost:5000/api/'

const getToken = Cookies.get('accessToken')

const api = axios.create({
    baseURL: `${API_URL}`
})

api.interceptors.request.use(
    (response) => {
        if (getToken) {
            response.headers!['Authorization'] = `Bearer ${getToken}`
        }
        return response
    },
    (error) => Promise.reject(error)
)

export default api
