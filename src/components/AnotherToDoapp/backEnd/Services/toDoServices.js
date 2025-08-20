import axios from "axios";
import {getUserDetails} from "./utils/getUserDetails.js";

const SERVER_URL = 'http://localhost:5000/api/todo';

const authHeader=() => {
    let userToken = getUserDetails()?.token;
    return {headers:{'Authorization':userToken}}
}
const createToDo = (data) => {
    return axios.post(`${SERVER_URL}/createToDo`, data,authHeader());
};

const getToDo = (userId) => {
    return axios.get(`${SERVER_URL}/getToDo:${userId}`,authHeader());
};

const deleteToDo = (id) => {
    return axios.delete(`${SERVER_URL}/deleteToDo:${id}`,authHeader());
};
const updateToDo = (id) => {
    return axios.patch(`${SERVER_URL}/updateToDo:${id}`,authHeader());
};
const AuthService = { createToDo, getToDo, deleteToDo, updateToDo }
export default AuthService;