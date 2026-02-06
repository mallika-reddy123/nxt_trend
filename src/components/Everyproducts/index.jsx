import "./index.css" 
import {Link} from "react-router-dom"


const Everyproduct=(props)=>{ 
    const {allproducts}=props  
    const{title,brand,price,image_url,rating,id}=allproducts 

    return( 
    
        <div>  
            <Link to={`/products/${id}`}>
             <img src={image_url}/>
            <h1>
                {title}
            </h1>  
             <p>{rating}</p>
            <p>{brand}</p> 
            <p>{price}</p>    
             <button>ADD TO CART</button>
            </Link>

           
 

        </div> 
    

    )
} 
export default Everyproduct