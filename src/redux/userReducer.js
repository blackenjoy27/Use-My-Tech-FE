import { LOGIN_SUCCESSFULLY, ADD_ITEM_TO_CHECK_OUT, REMOVE_ITEM_FROM_CHECK_OUT } from "./action";


const initialState = {
    role_id: "",
    name: "",
    user_id: "",
    checkoutItems: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESSFULLY:
            return {
                ...state,
                role_id: action.role_id,
                name: action.name,
                user_id: action.user_id
            }
        case ADD_ITEM_TO_CHECK_OUT:
            return {
                ...state,
                checkoutItems: [...state.checkoutItems, action.payload]
            }
        case REMOVE_ITEM_FROM_CHECK_OUT:
            return {
                ...state,
                checkoutItems: state.checkoutItems.filter(item => item !== action.payload)
            }
        default: {
            return state;
        }
    }
}

export default reducer;