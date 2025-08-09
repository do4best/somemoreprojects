import axios from "axios";

const SERVER_URL = 'http://localhost:8080/api';
const registerService = (data) => {
    return axios.post(`${SERVER_URL}/register`, data);
};
const loginService = (data) => {
    return axios.post(`${SERVER_URL}/login`, data);

}
const AuthService = {registerService,loginService}
export default AuthService;