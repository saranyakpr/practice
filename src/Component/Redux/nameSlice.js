import { createSlice } from '@reduxjs/toolkit'

const nameSlice = createSlice({
    name:'user',

    initialState:{
        name:'saran',
    },

    reducers:{
        setName:(state, action)=>{
            state.name = action.payload
        }
    }

})

export const {setName} = nameSlice.actions;

export default nameSlice.reducer;
