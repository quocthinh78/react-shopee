import AxiosService from "./../common/AxiosService";
import { API_POINT } from "../constant";
import qs from "query-string";
const url = "order";

export const addCartInDatabase = (data) => {
    console.log("das",data)
    return AxiosService.post(`${API_POINT}/${url}` , data)
}