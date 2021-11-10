import {configureStore} from '@reduxjs/toolkit';

import tabReducer from './reducer/tabReducer';
import categoryReducer from './reducer/categoryReducer';

export default configureStore({
  reducer: {
    tabState: tabReducer,
    categoryState: categoryReducer,
  },
});
