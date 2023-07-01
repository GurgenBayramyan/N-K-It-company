import { call, put, takeLatest } from "redux-saga/effects";
import { setCountries, setTodos } from "../../actionTypes/actionTypes";
import { getData } from "../../helpers/getData";
import { getCountries, getTodosReduser } from "../../slices/countres/countriesSlice";
import { getTodos } from "../../helpers/getTodos";

function* setCountresSaga():Generator<any, void> {
   const payload:any =  yield call(getData);
   yield put(getCountries(payload))
}
function* setTodosSaga():Generator<any, void> {
    const payload:any= yield call(getTodos);
    yield put(getTodosReduser(payload))
}
export function* watchSetCountries() {
    yield takeLatest(setCountries,setCountresSaga)
    yield takeLatest(setTodos,setTodosSaga)
}