import * as controlTypes from "../constant/controls"

const initialState = {
    sortValue: 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case controlTypes.SORT:
            const { value } = action.payload;
            state.sortValue = value;
            return {
                ...state
            }
        default: return state

    }

}

export default reducer;