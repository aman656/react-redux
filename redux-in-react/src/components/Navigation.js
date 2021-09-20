import  classes from "./Navigation.module.css"
import CartButton from "../Cart/CartButton"


const Navigation =()=>{
    return( <header className ={classes.header}>
        <h1>Redux in Action</h1>
        <nav>
        <ul>
            <li><CartButton/></li>
        </ul>
        </nav>

    </header>
    )}
export default Navigation