import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: 'all',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSelectedCategory(state, {payload}) {
      return {
        selectedCategory: payload,
      };
    },
  },
});

export const {setSelectedCategory} = categorySlice.actions;

export default categorySlice.reducer;
