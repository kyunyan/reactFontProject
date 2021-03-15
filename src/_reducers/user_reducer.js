
import { findUserList } from '../_actions/user_actions';
 

export default function(state={},action){ debugger;
    switch(action.type){
        case findUserList:
            return {...state }
           
        default:
            return state;
    }
}