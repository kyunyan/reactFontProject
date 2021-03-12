import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_CART,
    GET_CART_ITMES
} from './types';
import { BACK_SERVER } from '../components/Config.js';

export function loginUser(dataToSubmit){
    const request = axios.post(`${BACK_SERVER}/login`,dataToSubmit)
                .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}



