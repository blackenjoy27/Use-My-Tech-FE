import { LOGIN_SUCCESSFULLY, ADD_ITEM_TO_CHECK_OUT, REMOVE_ITEM_FROM_CHECK_OUT, PLACE_ORDER_SUCCESSFULLY } from "./action";


const initialState = {
    name: "",
    user_id: "",
    checkoutItems: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESSFULLY:
            return {
                ...state,
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
                checkoutItems: state.checkoutItems.filter(item => item.item_id !== action.payload)
            }
        case PLACE_ORDER_SUCCESSFULLY:
            return {
                ...state,
                checkoutItems: []
            }
        default: {
            return state;
        }
    }
}

export default reducer;