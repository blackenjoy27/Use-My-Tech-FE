import { LOGIN_SUCCESSFULLY } from "../actions";


const initialState = {
    role_id: "",
    name: "",
    user_id: "",
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
        default:
            return state;
    }
}

export default reducer;