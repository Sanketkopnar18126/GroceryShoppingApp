import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Slice/DetailProduct";

import StoreLocalReducer from "../Slice/AddDetails";
import CartReducer from "../Slice/Cart";

// import GetNameReducer from "../Slice/Authentication";
export const Store = configureStore({
  reducer: {
    productDatas: productReducer,
    saveLocal: StoreLocalReducer,
    // cart data store
    CartData: CartReducer,

    // Auth

    // GetName: GetNameReducer,
  },
});
