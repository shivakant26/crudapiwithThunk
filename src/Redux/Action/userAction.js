import { SIGN_UP ,LOGIN, ERROR , LIST , CREATE_POST , SINGLE_POST_SHOW , UPDATE_POST } from "../ActionType";
import instance from "../../Utils/siteApi";

export const SignUp = (data) =>{
    return (dispatch) => {
        return instance.post('/signup', data)
            .then(data => {
                dispatch({
                    type:SIGN_UP,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type:ERROR,
                    payload: error.response
                })
            });
    };
}

export const login = (data) =>{
    return (dispatch) => {
        return instance.post('/signin', data)
            .then(data => {
                dispatch({
                    type:LOGIN,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type:ERROR,
                    payload: error.response
                })
            });
    };
    
}
export const create_post = (data) =>{
    return (dispatch) => {
        return instance.post('/posts',data)
            .then(data => {
                dispatch({
                    type:CREATE_POST,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type:ERROR,
                    payload: error.response
                })
            });
    };
    
}

export const list = () =>{
    return (dispatch) => {
        return instance.get('/posts')
            .then(data => {
                dispatch({
                    type:LIST,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type:ERROR,
                    payload: error.response
                })
            });
    };
    
}
export const update_post = (id,data) =>{
    console.log(id,data)
    return (dispatch) => {
        return instance.put(`/posts/${id.id}`,data)
            .then(data => {
                dispatch({
                    type:UPDATE_POST,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type:"ERROR",
                    payload: error.response
                })
            });
    };  
   
}
export const single_post = (id) =>{
    return (dispatch) => {
        return instance.get(`/posts/${id}`)
            .then(data => {
                dispatch({
                    type:SINGLE_POST_SHOW,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type:"ERROR",
                    payload: error.response
                })
            });
    };  
   
}
export const deletePost = (id) =>{
    return (dispatch) => {
        return instance.delete(`/posts/${id}`)
            .then(data => {
                dispatch({
                    type:SINGLE_POST_SHOW,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type:"ERROR",
                    payload: error.response
                })
            });
    };  
   
}