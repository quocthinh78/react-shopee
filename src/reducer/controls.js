import * as controlTypes from "../constant/controls"

const initialState = {
    sortValue: 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case controlTypes.SORT:
            state.sortValue = action.payload.value
            return {
                ...state
            }
        default: return state

    }

}

export default reducer;