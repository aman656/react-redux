import Navigation from './components/Navigation';
import Products from './components/Products/Products'; 
import {Fragment} from 'react'
import Cart from './Cart/Cart';

import './App.css';

function App() {
  return (
  <Fragment>
    <Navigation/>
    <Cart/>
    <Products/>
    </Fragment>
  )
}

export default App;
