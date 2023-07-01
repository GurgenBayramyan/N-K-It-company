import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { Countines, Country, Todos } from '../../ts'

const initialState : Countines = {
    status:"loading",
    data:[],
    todos:[]
}
const countriesSlice  = createSlice({
    name: "countries",
    initialState,
    reducers:{
        getCountries:(state,{payload}:PayloadAction<Country[]>)=>{
            state.data = payload
        },
        getTodosReduser:(state,{payload}:PayloadAction<Todos[]>)=>{
            state.todos = payload
        }
    }
})

export default countriesSlice
export const {getCountries,getTodosReduser} = countriesSlice.actions