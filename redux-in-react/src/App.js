import Navigation from './components/Navigation';
import Products from './components/Products/Products'; 
import {Fragment} from 'react'
import Cart from './Cart/Cart';
import { useSelector } from 'react-redux';

import './App.css';


function App() {
  const cartDisplay = useSelector(state=>state.cartreducer.isShow)
  return (
  <Fragment>
    <Navigation/>
    {cartDisplay &&<Cart/>}
    <Products/>
    </Fragment>
  )
}

export default App;
