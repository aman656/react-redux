import classes from './Cartbtn.module.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../components/store'
import { useSelector } from 'react-redux'


const CartButton = ()=>{
    const dispatch = useDispatch()
    const measure = useSelector(state=>state.itemreducer.quantity)
    const cartDisplay = ()=>{
        dispatch(cartActions.toggleCart())
    }
   

    return <div className=  {classes.btn} onClick={cartDisplay}>
        <h4>Cart</h4>
        <div className = {classes.spn}>
            {measure}
        </div>

    </div>
}
export default CartButton