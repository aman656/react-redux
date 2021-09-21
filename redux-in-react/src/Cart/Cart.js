import { useSelector } from 'react-redux';
import classes from './Cart.module.css'
import CartItem from './Cartitem';







const Cart = (props) => {
  const itemsincart = useSelector(state=>state.itemreducer.cartitems)
 
    return (
      <div className={classes.card}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {itemsincart.map(item=><CartItem
          key={item.id}
            item={{id:item.id, title:item.title, quantity:item.quantity, total:item.totalprice, price:item.price}}/>)}
        </ul>
      </div>
    );
  };

  export default Cart