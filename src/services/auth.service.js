import httpService from './http.service'
import config from './config'

export function login({ email, password }) {
    const URL = config.base + config.endpoints.auth.login
    return httpService.post(
        URL, 
        { email: email, password: password } 
    )
}
