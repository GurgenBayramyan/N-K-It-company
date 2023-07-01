import {createSlice} from '@reduxjs/toolkit'
import { countines } from '../../ts'
import { getTodos } from '../../helpers/getTodos'
const initialState : countines = {
    status:"loading",
    data:[],
    todos:[]
}
const countriesSlice  = createSlice({
    name: "countries",
    initialState,
    reducers:{
        getCountries:(state,{payload})=>{
            state.data = [...payload]
           
        },
        getTodosReduser:(state,{payload})=>{
            state.todos = payload
        }
    }
})

export default countriesSlice
export const {getCountries,getTodosReduser} = countriesSlice.actions