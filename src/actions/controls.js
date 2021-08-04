import * as controlTypes from "./../constant/controls"

export const sortProduct = (value) => {
    return {
        type: controlTypes.SORT,
        payload: {
            value
        }
    }
}
export const sortProductSuce = value => {
    return {
        type: controlTypes.SORT_SUCCESS,
        payload: {
            value
        }
    }
}


// search 
export const searchProduct = (value) => {
    return {
        type: controlTypes.SEARCH,
        payload: {
            value
        }
    }
}
export const searchSuccess = data => {
    return {
        type: controlTypes.SEARCH_SUCCESS,
        payload: {
            data
        }
    }
}