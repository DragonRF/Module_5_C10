import {FETCH_USER_SUCCESS,LOGIN_SUCCESS} from "./action";

const initialState = {
    user: [],
    userlogined:{}
}

const rootReducer = (state = initialState, action) => {
    // Handle các actions gửi lên
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, userlogined: action.payload };
        case FETCH_USER_SUCCESS:
            return { ...state, users: action.payload };
        default:
            return state;
    }
};
export default rootReducer;