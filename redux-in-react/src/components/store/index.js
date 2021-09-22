import {createSlice,configureStore} from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name:"cart",
    initialState: {isShow:false,requestStatus:null},
    reducers:{
        toggleCart(state){
            state.isShow = !state.isShow;
        },
        showRequestStatus(state,action){
            state.requestStatus ={
                status:action.payload.status,
                message:action.payload.message,
                title:action.payload.title
            }
        }
    }
})
const itemSlice = createSlice({
    name:"items",
    initialState:{
        cartitems:[],
        quantity:0,
        issending:false
    },
    reducers:{
        additem(state,action){
            state.quantity++;
            const takenitem = action.payload
            const doesexist = state.cartitems.find(item=>item.id===takenitem.id)
            state.issending = true

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
            state.issending  = true
            const doesexist = state.cartitems.find(item=>item.id===takenid)
            if(doesexist.quantity===1){
                state.cartitems = state.cartitems.filter(item=>item.id !==takenid)
            }
            else{
                doesexist.quantity--;
                doesexist.totalprice = doesexist.totalprice-doesexist.price
            }

            
        },
        replacecart(state,action){
            state.quantity = action.payload.quantity;
            state.cartitems =  action.payload.cartitems
        }
    }
})

export const fetchingfromDataBase = ()=>{
    return async (dispatch)=>{
        const fetchingData  = async()=>{
            const response = await fetch("https://silicon-alchemy-299118-default-rtdb.firebaseio.com/cart.json")
            if(!response.ok){
                throw new Error ("Something went wrong!")
            }
            const data = await response.json()
            console.log(data)
            return data;

        }
        try{
            const cartData = await fetchingData()
            dispatch(itemActions.replacecart({
                cartitems: cartData.cartitems || [],
                quantity :cartData.quantity
            }))

        }catch(error){
            dispatch(cartActions.showRequestStatus({
                status:'success',
                message:"Data fetched ",
                title:"Successfully fetch the data"
            }))
        }

    }
}


























const store = configureStore({
    reducer:{cartreducer:cartSlice.reducer,itemreducer:itemSlice.reducer}
})

export const cartActions = cartSlice.actions;
export const itemActions =itemSlice.actions;
export default store;