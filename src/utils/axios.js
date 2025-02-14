import axios from 'axios'

const VITE_APP_HOST_API_KEY = import.meta.env.VITE_APP_HOST_API_KEY

// ---------------------------

const axiosInstance = axios.create({ baseURL: VITE_APP_HOST_API_KEY })

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || "Something went wrong")
)

export default axiosInstance