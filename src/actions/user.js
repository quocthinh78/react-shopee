import * as userTypes from "./../constant/user"

export const register = (data) => {
    return {
        type: userTypes.REGISTER,
        payload: {
            data
        }
    }
}
export const login = (data) => {
    return {
        type: userTypes.LOGIN,
        payload: {
            data
        }
    }
}

export const loginSuccess = (data) => {
    return {
        type: userTypes.LOGIN_SUCCESS,
    }
}

export const getUser = () => {
    return {
        type: userTypes.GET_USER,
    }
}

export const getUserSuccess = (data) => {
    return {
        type: userTypes.GET_USER_SUCCESS,
        payload: {
            data
        }
    }
}

export const logout = () => {
    return {
        type: userTypes.LOGOUT,
    }
}

export const logoutSucces = (data) => {
    return {
        type: userTypes.LOGOUT_SUCCESS,
    }
}

export const saveCart = (data) => {
    console.log(data)
    return {
        type : userTypes.ADD_CART_IN_DATABASE,
        payload : {
            data
        }
    }
}