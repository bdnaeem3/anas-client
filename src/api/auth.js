import axios from "@/utils/axios";

export const loginWithGoogle = () => axios.get('/auth/google')
export const signUp = (userInfo) => axios.post('/auth/', userInfo)
export const login = (userInfo) => axios.post('/auth/login', userInfo)

export const getUser = () => axios.get('/auth/')