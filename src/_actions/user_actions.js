import axios from 'axios';
import {
    FIND_USER_LIST,
} from './types';
import { BACK_SERVER } from '../components/Config.js';

export function findUserList(){
    const request = axios.get(`${BACK_SERVER}/user/findUserList`)
    .then(response => response.data);

    return {
        type: FIND_USER_LIST,
        payload: request
    }
}





