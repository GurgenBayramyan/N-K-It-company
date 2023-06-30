import { call, put, takeLatest } from "redux-saga/effects";
import { setCountries } from "../../actionTypes/actionTypes";
import { getData } from "../../helpers/getData";
import { getCountries } from "../../slices/countres/countriesSlice";

function* setCountresSaga():Generator<any, void> {
   const payload:any =  yield call(getData);
   
   yield put(getCountries(payload))
}
export function* watchSetCountries() {
    yield takeLatest(setCountries,setCountresSaga)
}