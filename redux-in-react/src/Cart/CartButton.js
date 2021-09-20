import classes from './Cartbtn.module.css'

const CartButton = ()=>{
    return <div className=  {classes.btn}>
        <h4>Cart</h4>
        <div className = {classes.spn}>
            0
        </div>

    </div>
}
export default CartButton