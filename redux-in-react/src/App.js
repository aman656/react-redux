import Navigation from './components/Navigation';
import Products from './components/Products/Products'; 
import {Fragment} from 'react'
import Cart from './Cart/Cart';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Request from './components/Request';
import { cartActions } from './components/store';

import './App.css';


let firstTime = true
function App() {
  const cartDisplay = useSelector(state=>state.cartreducer.isShow)
  const overallCart = useSelector(state=>state.itemreducer)
  const notify = useSelector(state=>state.cartreducer.requestStatus)
  const dispatch = useDispatch()
  useEffect(()=>{
    const sendingcartData = async()=>{
      dispatch(cartActions.showRequestStatus({
        status:'Pending',
        message:"Sending...",
        title:"Sending cart data"

      }))
      const response = await fetch("https://silicon-alchemy-299118-default-rtdb.firebaseio.com/cart.json",{
      method:"PUT",
      body:JSON.stringify(overallCart)})
      if(!response.ok){
        throw new Error("Something went wrong")
      }
      dispatch(cartActions.showRequestStatus({
        status:'success',
        message:"Data sent ",
        title:"Successfully sent the data"
      })
      )
    }
    if(firstTime){
      firstTime = false;
      return
    }
      sendingcartData().catch(err=>{
        dispatch(cartActions.showRequestStatus({
          status:'error',
          message:"Error occured",
          title:"Sending data failed"
      })
        )
    })
      

  },[overallCart,dispatch])
  return (
  <Fragment>
   {notify && <Request   status = {notify.status} message = {notify.message} title = {notify.title}  />}
    <Navigation/>
    {cartDisplay &&<Cart/>}
    <Products/>
    </Fragment>
  )
}

export default App;
