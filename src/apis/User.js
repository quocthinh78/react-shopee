import AxiosService from "./../common/AxiosService";
import { API_POINT } from "../constant";
import qs from "query-string";
const url = "users";

export const register = (data = {}) => {
    const datas = {
        name: data.username, email: data.email, password: data.password,
    };
    return AxiosService.post(`${API_POINT}/${url}/register`, datas, {
        credentials: "include",
        headers: {
            'Accesçs-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
        }
    })
}

export const login = (data = {}) => {
    const datas = {
        email: data.email,
        password: data.password,
    }
    return AxiosService.post(`${API_POINT}/${url}/login`, datas)
}

export const getUser = () => {
    return AxiosService.get(`${API_POINT}/${url}/user`)
}

export const logout = () => {
    return AxiosService.post(`${API_POINT}/${url}/logout`)
}