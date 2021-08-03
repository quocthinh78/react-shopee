import * as controlTypes from "./../constant/controls"

export const sortProduct = (value) => {
    return {
        type: controlTypes.SORT,
        payload: {
            value
        }
    }
}