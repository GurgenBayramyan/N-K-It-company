import {createSlice} from '@reduxjs/toolkit'
import { countines } from '../../ts'
const initialState : countines = {
    status:"loading",
    data:[]
}
const countriesSlice  = createSlice({
    name: "countries",
    initialState,
    reducers:{
        getCountries:(state,{payload})=>{
            state.data = [...payload]
           console.log(payload)
        }
    }
})

export default countriesSlice
export const {getCountries} = countriesSlice.actions