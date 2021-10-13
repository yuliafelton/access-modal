import { createSlice } from '@reduxjs/toolkit';
import {initialState} from "./initialState";
import {fetchEmails} from "./thunks";

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchEmails.pending]: (state) => {
            state.emailsLoading = true;
        },
        [fetchEmails.fulfilled]: (state, action) => {
            state.emails = action.payload;
            state.emailsLoading = false;
            let arr = new Set((action.payload.map(email => email.address)));
            state.emailsList = (Array.from(arr)).filter(function (el) {
                return el != null;
            });

        },
        [fetchEmails.rejected]: (state) => {
            state.emailsLoading = false;
            state.appError = true;
        },
    }
});


export default appSlice.reducer;