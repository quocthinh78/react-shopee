import AxiosService from "./../common/AxiosService";
import { API_POINT } from "../constant";
import qs from "query-string";
const url = "product";

export const fetchProduct = (params = {}) => {
    let queryParmas = "";
    if (Object.keys(params).length > 0) {
        queryParmas = `?${qs.stringify(params)}`;
    }
    return AxiosService.get(`${API_POINT}/${url}${queryParmas}`);
};

export const fetchProductDetail = (params = {}) => {
    return AxiosService.get(`${API_POINT}/${url}/${params}`);
};

export const getBeradCrumb = (params = {}) => {
    return AxiosService.get(`${API_POINT}/${url}/${params}/breadcrumb`);
};

export const getSearchKey = (name = {}) => {
    let queryParmas = ""
    if (Object.keys(name).length > 0) {
        queryParmas = `?${qs.stringify(name)}`;
    }
    return AxiosService.get(`${API_POINT}/${url}/search${queryParmas}`)
}

export const pagination = (params = {}) => {
    let queryParmas = "";
    if (Object.keys(params).length > 0) {
        queryParmas = `?${qs.stringify(params)}`;
        console.log(queryParmas);
    }
    return AxiosService.get(`${API_POINT}/${url}/pagination${queryParmas}`)
}