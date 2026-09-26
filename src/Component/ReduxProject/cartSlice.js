import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

export const cartSlice = createSlice({
    name:'cart',

    initialState:{
        cartItems:[],
        wishlistItems:[]
    },

    reducers:{
        addToCart:(state, action)=>{
            const alreadyExsist = state.cartItems.find((item)=>item.id === action.payload.id);

            if(alreadyExsist){
                alreadyExsist.quantity += 1;
            } else{
                state.cartItems.push({
                    ...action.payload,
                    quantity:1
                })
            }
        },
        addToWishlist:(state, action)=>{

        }
    }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;
