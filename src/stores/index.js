import {configureStore} from '@reduxjs/toolkit';

import tabReducer from './reducer/tabReducer';
import categoryReducer from './reducer/categoryReducer';
import cartReducer from './reducer/cartReducer';

export default configureStore({
  reducer: {
    tabState: tabReducer,
    categoryState: categoryReducer,
    cartState: cartReducer,
  },
});
