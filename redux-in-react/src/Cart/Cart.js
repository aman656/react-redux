import classes from './Cart.module.css'
import CartItem from './Cartitem';





const Cart = (props) => {
    const cartitems = [{id:"m1",name:"cutter",quantity:2,totalprice:20,price:10}]
    return (
      <div className={classes.card}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartitems.map(item=><CartItem
          key={item.id}
            item={{id:item.id, title:item.name, quantity:item.quantity, total:item.totalprice, price:item.price}}/>)}
        </ul>
      </div>
    );
  };

  export default Cart