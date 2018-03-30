import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import callAPIMiddleware from "./commen";
// import { createLogger } from 'redux-logger'
import rootReducer from "~/redux/reducer";

const middlewares = [thunkMiddleware, callAPIMiddleware];
// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(createLogger())
// }
const REDUX_DEVTOOL = window.__REDUX_DEVTOOLS_EXTENSION__;

export default function configureStore() {
  // return createStore(
  //   rootReducer,
  //   applyMiddleware(...middlewares)
  // )
  if (!(REDUX_DEVTOOL || REDUX_DEVTOOL)) {
    return createStore(rootReducer, applyMiddleware(...middlewares));
  } else {
    return createStore(
      rootReducer,
      compose(applyMiddleware(...middlewares), REDUX_DEVTOOL && REDUX_DEVTOOL())
    );
  }
}
