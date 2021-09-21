import classes from './Productitem.module.css';
import { useDispatch } from 'react-redux';
import { itemActions } from '../store';

const Productitem = (props)=>{
  const {id,title,price,total} = props
  const dispatch = useDispatch();
  const addcartHandler = ()=>{
    dispatch(itemActions.additem({
      id,title,price,total
    }))
  }

    return ( <li className={classes.item}>
        <div className={classes.card}>
          <header>
            <h3>{props.title}</h3>
            <div className={classes.price}>${props.price.toFixed(2)}</div>
          </header>
          <p>{props.description}</p>
          <div className={classes.actions}>
            <button onClick={addcartHandler}>Add to Cart</button>
          </div>
        </div>
      </li>)
}
export default Productitem;