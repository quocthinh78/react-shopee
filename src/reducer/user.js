import * as typesUser from "./../constant/user";
const isLogin = JSON.parse(localStorage.getItem("isLogin"))
const initialState = {
    isLogin: isLogin || false,
    userInfo: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case typesUser.LOGIN_SUCCESS:
            localStorage.setItem("isLogin" , true)
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
            localStorage.setItem("isLogin" , false)
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