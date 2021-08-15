import * as types from "./../constant/product";

const initialState = {
  products: [],
  productBeroreSort: [],
  productDetail: {},
  breadCrumb: {},
  category: [],
  typeMoney: "usd",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_SUCESS:
      const { data } = action.payload;
      return {
        ...state,
        products: data,
        productBeroreSort: data,
      };
    case types.GET_DETAIL_PRODUCT_SUCCESS:
      const { detail } = action.payload;
      return {
        ...state,
        productDetail: detail,
      };

    case types.GET_BREADCRUM_SUCCESS:
      const { breadcrumb } = action.payload;
      return {
        ...state,
        breadCrumb: breadcrumb,
      };
    case types.SORT_SUCCESS:
      const { value } = action.payload;
      state.products.sort((a, b) => {
        if (a.price < b.price) return value;
        if (a.price > b.price) return -value;
        return 0;
      });
      return {
        ...state,
      };
    case types.FETCH_CATEGORY_SUCESS:
      return {
        ...state,
        category: action.payload.category,
      };
    case types.SORT_DEFAULT:
      return {
        ...state,
      };
    case types.CHANGE_MONEY:
      return {
        ...state,
        typeMoney: action.payload.types,
      };

    default:
      return state;
  }
};

export default reducer;
