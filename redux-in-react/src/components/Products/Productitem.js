import classes from './Productitem.module.css';


const Productitem = (props)=>{
    return ( <li className={classes.item}>
        <div className={classes.card}>
          <header>
            <h3>{props.title}</h3>
            <div className={classes.price}>${props.price.toFixed(2)}</div>
          </header>
          <p>{props.description}</p>
          <div className={classes.actions}>
            <button >Add to Cart</button>
          </div>
        </div>
      </li>)
}
export default Productitem;