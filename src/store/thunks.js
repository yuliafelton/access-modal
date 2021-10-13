import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchEmails = createAsyncThunk(
    'app/fetchEmails',
    async () => {
        const response = await axios.get('http://localhost:7000/emails');
        return response.data;
    }
);

