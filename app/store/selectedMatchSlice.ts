import { createSlice } from "@reduxjs/toolkit";

const selectedMatchSlice = createSlice( {
    name:'selectedMatch',
    initialState: null,
    reducers:{
        selectMatch: (state,action) => action.payload
    }
});

export const {selectMatch} = selectedMatchSlice.actions;

export default selectedMatchSlice.reducer;