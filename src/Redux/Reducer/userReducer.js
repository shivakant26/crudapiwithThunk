import { SIGN_UP , LOGIN , LIST, CREATE_POST , SINGLE_POST_SHOW , UPDATE_POST, DELETE_POST, ERROR} from "../ActionType";

const initialState = {
    data:[]
}


const userReducer = (state=initialState,action) =>{

    switch(action.type){
        case SIGN_UP:
            return{
                ...state,
                data:action.payload
            }
            case LOGIN:
                let token = action.payload.data.token;
                let userid = action.payload.data.user.id;
                localStorage.setItem("token",token);
                localStorage.setItem("userid",userid);
            return{
                ...state,
                login_data:action.payload
            }
            case LIST:
            return{
                ...state,
                list:action.payload
            }
            case CREATE_POST:
            return{
                ...state,
                create_post:action.payload
            }
            case SINGLE_POST_SHOW:
            return{
                ...state,
                single_post:action.payload
            }
            case UPDATE_POST:
            return{
                ...state,
                list:action.payload
            }
            case DELETE_POST:
            return{
                ...state,
                list:action.payload
            }
            case ERROR:
                return{
                    ...state,
                    Error:action.payload
                } 
            default:
                return state
    }
}


export default userReducer;