import axiosInstance from "@/utils/axios"

const jwtDecode = (token) => {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
        window
            .atob(base64)
            .split('')
            .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(2)}`)
            .join('')
    )

    return JSON.parse(jsonPayload)
}

export const isValidToken = (token) => {
    if(!token){
        return false
    }

    const decode = jwtDecode(token)
    const currentTime = Date.now() / 1000

    return decode.exp > currentTime
}

const tokenExpired = (exp) => {
    let expiredTimer

    const currentTime = Date.now()

    const timeLeft = exp * 1000 - currentTime
    clearTimeout(expiredTimer)

    expiredTimer = setTimeout(() => {
        alert('Token Expired')

        localStorage.removeItem('x-auth-token')
    }, timeLeft);
}
 
export const setSession = (token) => {
    try {
        if (token) {
            localStorage.setItem('x-auth-token', token)
            axiosInstance.defaults.headers['x-auth-token'] = token

            const { exp } = jwtDecode(token)

            tokenExpired(exp)
        } else {
            localStorage.removeItem('x-auth-token')

            delete axiosInstance.defaults.headers['x-auth-token']
        }
    } catch (error) {
        console.log(error)
    }
}