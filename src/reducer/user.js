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
        default: return {
            ...state
        }
    }
}
export default reducer;