import * as controlTypes from "../constant/controls"

const initialState = {
    sortValue: 1,
    searchName: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case controlTypes.SORT:
            const { value } = action.payload;
            state.sortValue = value;
            return {
                ...state
            }
        case controlTypes.SEARCH_SUCCESS:
            return {
                ...state,
                searchName: action.payload.data
            }
        default: return state

    }

}

export default reducer;