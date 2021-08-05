import * as pagesType from "./../constant/product"
const initialState = {
    page: 1,
    limit: 10,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case pagesType.PAGINATION_SUCCESS:
            const { pagination } = action.payload;
            state = pagination;
            return state
        default: return state
    }
}
export default reducer;