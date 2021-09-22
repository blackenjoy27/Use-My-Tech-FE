import AxiosWithAuth from "../helper/AxiosWithAuth";


export const LOGIN_SUCCESSFULLY = "LOGIN_SUCCESSFULLY"

export const login = ({ user_id, name, role_id }) => {
    return { type: LOGIN_SUCCESSFULLY, role_id: role_id, name: name, user_id: user_id }
    // return dispatch=>{
    //     dispatch({type: LOGIN_SUCCESSFULLY, role_id, name, user_id })
    //     dispatch({type: LOGIN_SUCCESSFULLY, role_id, name, user_id })

    //     this is used when more than one action type is return
    // }
}

export const getUserInfo = (id) => {
    AxiosWithAuth().get(`/api/users/${id}`)
        .then(data => {
            console.log(data);
        })
}