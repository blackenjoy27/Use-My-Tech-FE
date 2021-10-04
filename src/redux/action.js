import AxiosWithAuth from "../helper/AxiosWithAuth";
export const LOGIN_SUCCESSFULLY = "LOGIN_SUCCESSFULLY"
export const ADD_ITEM_TO_CHECK_OUT = "ADD_ITEM_TO_CHECK_OUT"
export const REMOVE_ITEM_FROM_CHECK_OUT = "REMOVE_ITEM_FROM_CHECK_OUT"
export const PLACE_ORDER_SUCCESSFULLY = "PLACE_ORDER_SUCCESSFULLY"

export const login = (user_id, name) => {
    return { type: LOGIN_SUCCESSFULLY, name: name, user_id: user_id }
}

export const getUserInfo = (id) => {
    AxiosWithAuth().get(`/api/users/${id}`)
        .then(data => {
            console.log(data);
        })
}

export const addItemToCheckout = (item) => {
    return { type: ADD_ITEM_TO_CHECK_OUT, payload: item }
}

export const removeItemFromCheckout = (item) => {
    return { type: REMOVE_ITEM_FROM_CHECK_OUT, payload: item.item_id }
}

export const clearCart = () => {
    return { type: PLACE_ORDER_SUCCESSFULLY, payload: "" }
}

