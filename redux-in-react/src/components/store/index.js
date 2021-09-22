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
const itemSlice = createSlice({
    name:"items",
    initialState:{
        cartitems:[],
        quantity:0
    },
    reducers:{
        additem(state,action){
            state.quantity++;
            const takenitem = action.payload
            const doesexist = state.cartitems.find(item=>item.id===takenitem.id)

            if(!doesexist){
                state.cartitems.push({id:takenitem.id,title:takenitem.title,price:takenitem.price,amount:1,totalprice:takenitem.total,quantity:1})
            }
            else{
                doesexist.quantity++;
                doesexist.totalprice = doesexist.totalprice+  takenitem.price
            }
        },
        removeitem(state,action){
            const takenid = action.payload
            state.quantity--;
            const doesexist = state.cartitems.find(item=>item.id===takenid)
            if(doesexist.quantity===1){
                state.cartitems = state.cartitems.filter(item=>item.id !==takenid)
            }
            else{
                doesexist.quantity--;
                doesexist.totalprice = doesexist.totalprice-doesexist.price
            }

            
        }
    }
})

const store = configureStore({
    reducer:{cartreducer:cartSlice.reducer,itemreducer:itemSlice.reducer}
})

export const cartActions = cartSlice.actions;
export const itemActions =itemSlice.actions;
export default store;