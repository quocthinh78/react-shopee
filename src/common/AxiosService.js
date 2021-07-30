import axios from "axios";
class AxiosService {
    constructor() {
        const intance = axios.create();
        intance.interceptors.response.use(this.handleSuccess, this.handleError);
        this.intance = intance;
    }
    handleSuccess(response) {
        return response;
    }
    handleError(error) {
        return Promise.reject(error);
    }
    get(url) {
        return this.intance.get(url);
    }
    post(url, data) {
        return this.intance.post(url, data);
    }
    put(url, data) {
        return this.intance.put(url, data);
    }
    delete(url) {
        return this.intance.delete(url);
    }
}

export default new AxiosService();