import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItemToCard(state, {payload}) {
      state.items.push(payload);
    },
  },
});

export const {setItemToCard} = cartSlice.actions;

export default cartSlice.reducer;
