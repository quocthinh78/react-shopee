import * as typesUser from "./../constant/user";

const initialState = {
    isLogin: false,
    userInfo: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case typesUser.LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true
            }
        case typesUser.GET_USER_SUCCESS:
            return {
                ...state,
                userInfo: action.payload.data
            }
        case typesUser.LOGOUT_SUCCESS:
            return {
                ...state,
                isLogin: false,
                userInfo: {}
            }
        default: return {
            ...state
        }
    }
}
export default reducer;