import { configureStore ,getDefaultMiddleware} from "@reduxjs/toolkit";
import saga from  'redux-saga'
import { rootReducer } from "./rootReducer";
import { all, fork } from 'redux-saga/effects'
import { watchSetCountries } from "../sagas/getCountsaga/getCountriesSaga";
import { type } from "os";

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

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch