import { createSlice } from "@reduxjs/toolkit";

const DetailProduct = createSlice({
  name: "productData",
  initialState: {
    data: [],
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },

    //   addProduct(state, action) {
    //     const productId = action.payload;
    //     state.SelectedData =
    //       state.data.find((item) => item.id === productId) || null;
    //   },
    // },
  },
});

export const { setData } = DetailProduct.actions;
export default DetailProduct.reducer;

export const FetchPro = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/products");
      const data = await res.json();
      // console.log("data", data);
      dispatch(setData(data));
    } catch (error) {
      console.log(error);
    }
  };
};
