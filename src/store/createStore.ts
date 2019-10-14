import { createStore, compose, applyMiddleware, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default (reducers: Reducer, middlewares: any) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(
          applyMiddleware(...middlewares),
          // console.tron.createEnhancer(),
          composeWithDevTools()
        )
      : compose(applyMiddleware(...middlewares));

  return createStore(reducers, enhancer);
};
