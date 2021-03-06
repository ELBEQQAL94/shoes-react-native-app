import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedTabIndex: 0,
};

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setSelectedTabIndex(state, {payload}) {
      return {
        selectedTabIndex: payload,
      };
    },
  },
});

export const {setSelectedTabIndex} = tabSlice.actions;

export default tabSlice.reducer;
