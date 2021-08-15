import AxiosService from "./../common/AxiosService";
import { API_POINT } from "../constant";
const url = "order";

export const addCartInDatabase = (data) => {
    return AxiosService.post(`${API_POINT}/${url}` , data)
}
export const getCartDatabase = () => {
    return AxiosService.get(`${API_POINT}/${url}`);
}