
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../reduxs/saga/rootSaga';
import rootReducer from '../reduxs/reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

const storeConfig = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false, serializableCheck: false, }).concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);
  return store;
};

export default storeConfig;

