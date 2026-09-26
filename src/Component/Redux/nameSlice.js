import { createSlice } from '@reduxjs/toolkit'

export const nameSlice = createSlice({
    name:'user',

    initialState:{
        name:'saran',
        age:21,
        location:'tenkasi',
    },

    reducers:{
        setName:(state, action)=>{
            state.name = action.payload
        },
        setAge:(state, action)=>{
            state.age = action.payload
        },
        setLocation:(state, action)=>{
            state.location = action.payload
        }
    }

})

export const {setName, setAge, setLocation} = nameSlice.actions;

export default nameSlice.reducer;
