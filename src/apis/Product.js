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