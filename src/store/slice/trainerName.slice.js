import { createSlice } from "@reduxjs/toolkit";

 const trainerSlice =  createSlice({
    name: 'trainerName',
    initialState: '',
    reducers:{
        setTrainerNameGlobal:(state, action) => action.payload
    }
})
export const { setTrainerNameGlobal } = trainerSlice.actions
export default trainerSlice.reducer