import { createStore } from "redux";
import { klineReducer } from '../modules'
export const Store = createStore(
  klineReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
