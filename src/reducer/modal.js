import * as types from "./../constant/modal";

const initialState = {
    showModal: false,
    component: null
}

const modal = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_MODAL:
            return {
                ...state,
                showModal: true
            }
        case types.HIDE_MODAL:
            return {
                ...state,
                showModal: false,
                component: null
            }
        case types.CHANGE_MODAL_CONTENT:
            const { component } = action.payload;
            return {
                ...state,
                component
            }

        default:
            return state
    }
}
export default modal;