import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, changed: false },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItemCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.changed = true;
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    }
  }
});

export default cartSlice;
export const cartActions = cartSlice.actions;

// const postingCartData = async () => {
//   dispatch(
//     uiActions.showNotification({
//       status: "pending",
//       title: "Sending...",
//       message: "Sending cart data!"
//     })
//   );
//   const response = await fetch(
//     "https://udemy-24192-default-rtdb.firebaseio.com/cart.json",
//     {
//       method: "PUT",
//       body: JSON.stringify(cartState)
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Sending cart data failed!");
//   }
//   dispatch(
//     uiActions.showNotification({
//       status: "success",
//       title: "Success!!",
//       message: "Sent cart data successfully!!"
//     })
//   );
// };
