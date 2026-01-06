import { createSlice } from "@reduxjs/toolkit";
import { IDLE_FETCHER } from "react-router-dom";

const cartSlice = createSlice({
name:'cart',
initialState:[],
reducers:{
    // addToCart action.payload is the product to be added in the cart
    addToCart:(state,action)=>{
     const existingProduct = state.find(item=>item.id==action.payload.id)
     if(existingProduct){
      existingProduct.quantity++
      existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
      const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
      state = [...remainingProducts,existingProduct]
     }else{
        state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
     }
    },
    // remove cart item, action payload has product id
    removeCartItem:(state,action)=>{
       return state.filter(item=>item.id!=action.payload)
    },
    // increment quantity, action payload has product id
    incrementCartItem:(state,action)=>{
        const existingProduct = state.find(item=>item.id==action.payload.id)
        existingProduct.quantity++
        existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
        const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
        state = [...remainingProducts,existingProduct]
    },
     // decrement quantity, action payload has product id
    decrementCartItem:(state,action)=>{
        const existingProduct = state.find(item=>item.id==action.payload.id)
        existingProduct.quantity--
        existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
        const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
        state = [...remainingProducts,existingProduct]
    },
    // emprtycart
    emptyCart:(state)=>{
        return []
    }
}
})

export const {addToCart, removeCartItem, incrementCartItem, decrementCartItem, emptyCart} = cartSlice.actions
export default cartSlice.reducer