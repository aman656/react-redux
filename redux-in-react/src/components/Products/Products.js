import classes from "./Products.module.css"
import Productitem from "./Productitem"



const Products = ()=>{
    const DUMMY = [{id:'m1',title:"cutter",price:25,description:'A simple nail cutter',total:25},{
        id:"m2",title:"A book",price:15,description:"A fiction based novel",total:15
    }]
   
    return <section className = {classes.products}>
        <h1>Avaliable Items</h1>
        {DUMMY.map(item=><Productitem  key ={item.id} id ={item.id} title={item.title} price = {item.price}  total = {item.total}      description = {item.description}                            />)}
        
    </section>
}

export default Products