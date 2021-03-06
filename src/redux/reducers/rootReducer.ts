import { combineReducers, Store } from 'redux';

import { cartReducer, CartState } from './cartReducer';
import { categoryReducer, CategoryState } from './categoryReducer';
import { currencyReducer, CurrencyState } from './currencyReducer';
import { dialogReducer, DialogState } from './dialogReducer';
import { productDetailsReducer, ProductDetailsState } from './productDetailsReucer';
import { productsReducer, ProductsState } from './productsReducer';

export type IStore = Store<IState>;

export type IState = {
  category: CategoryState;
  currency: CurrencyState;
  products: ProductsState;
  dialog: DialogState;
  cart: CartState;
  productDetails: ProductDetailsState;
};

export default combineReducers({
  category: categoryReducer,
  currency: currencyReducer,
  products: productsReducer,
  dialog: dialogReducer,
  cart: cartReducer,
  productDetails: productDetailsReducer,
});
