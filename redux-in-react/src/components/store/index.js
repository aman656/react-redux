import {createSlice,configureStore} from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name:"cart",
    initialState: {isShow:false},
    reducers:{
        toggleCart(state){
            state.isShow = !state.isShow;
        }
    }
})

const store = configureStore({
    reducer:{cartreducer:cartSlice.reducer}
})

export const cartActions = cartSlice.actions;
export default store;