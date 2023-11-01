import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchData  = createAsyncThunk(
    'api', async ()=>{
        const response = await axios.get('users.json')
        return response.data
    }
)
const initialState = {
    data: [],
    status: 'idle'
}

const slicer = createSlice({
    name: 'test',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchData.pending, (state)=>{
            state.status = 'idle'
        })
        .addCase(fetchData.fulfilled, (state, action)=>{
            state.status = 'success'
            state.data = action.payload
        })
        .addCase(fetchData.rejected, (state)=>{
            state.status = 'failed'
        })

    } 
})

export const store = configureStore({
    reducer: {
        test: slicer.reducer
    }
})

export const selectById = (state,id)=>state.test.data.find(item=> item.id === id)