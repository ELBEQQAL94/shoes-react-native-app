import {configureStore} from '@reduxjs/toolkit';
import tabReducer from './reducer/tabReducer';

export default configureStore({
  reducer: {
    tabState: tabReducer,
  },
});
