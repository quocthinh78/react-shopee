import * as modalConstants from "../constant/modal"

export const showModal = () => {
    return {
        type: modalConstants.SHOW_MODAL,
    }
}

export const hideModal = () => {
    return {
        type: modalConstants.HIDE_MODAL,
    }
}
export const changeModalContent = component => {
    return {
        type: modalConstants.CHANGE_MODAL_CONTENT,
        payload: {
            component
        }
    }
}