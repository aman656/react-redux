import classes from './Cartbtn.module.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../components/store'

const CartButton = ()=>{
    const dispatch = useDispatch()
    const cartDisplay = ()=>{
        dispatch(cartActions.toggleCart())
    }
   

    return <div className=  {classes.btn} onClick={cartDisplay}>
        <h4>Cart</h4>
        <div className = {classes.spn}>
            0
        </div>

    </div>
}
export default CartButton