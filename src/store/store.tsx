import { configureStore ,getDefaultMiddleware} from "@reduxjs/toolkit";
import saga from  'redux-saga'
import { rootReducer } from "./rootReducer";
import { all, fork } from 'redux-saga/effects'
import { watchSetCountries } from "../sagas/getCountsaga/getCountriesSaga";

function* RootSaga() {
    yield all([fork(watchSetCountries)])
}
const sagaMiddleware = saga()

const store = configureStore({
    reducer:rootReducer,
    middleware: [
        ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
        sagaMiddleware,
    ],
    devTools: process.env.NODE_ENV !== 'production',
    
})

sagaMiddleware.run(RootSaga)
export default store