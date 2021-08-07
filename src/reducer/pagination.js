import * as pagesType from "./../constant/product"
const initialState = {
    page: 1,
    limit: 10,
    cat: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case pagesType.PAGINATION_SUCCESS:
            const { pagination } = action.payload;
            state = pagination;
            return { ...state }
        case pagesType.LOADING_QUERY:
            const { query } = action.payload;
            return {
                ...query
            }
        default: return state
    }
}
export default reducer;