import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const forsendmoney = createSlice({
    name : "forsendmoney",
    initialState,
    reducers : {
        receive : (state,action) => {
            return [...state,action.payload]
        }
    }
    

})

export const { receive } = forsendmoney.actions;
export default forsendmoney.reducer;