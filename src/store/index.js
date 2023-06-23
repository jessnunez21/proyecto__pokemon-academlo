import { configureStore } from "@reduxjs/toolkit";
import trainerName from './slice/trainerName.slice'

 export default configureStore({
    reducer:{
        trainerName
    }
})