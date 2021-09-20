import classes from "./Products.module.css"
import Productitem from "./Productitem"


const Products = ()=>{
    const DUMMY = [{
        id:"m1",title:"A pen",price:10,description:"A nice pen works with multiple color"
    },{id:"m2",title:"Cutter",price:6,description:"Nail cutter works smoothly"}]
    return <section className = {classes.products}>
        <h1>Avaliable Items</h1>
        {DUMMY.map(item=><Productitem  key ={item.id} title={item.title} price = {item.price} description = {item.description}                            />)}
        
    </section>
}

export default Products