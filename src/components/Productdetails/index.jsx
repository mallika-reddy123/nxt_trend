import './index.css'



const Productdetails=(props)=>{
    const {productdetail}=props 
    const {image_url,title,price,style}=productdetail
    
    return( 
        <div> 
            <div>   
                 
                <img src={image_url} className="primeimg"/> 
            
                <h1>{title}</h1> 
                <p>{style}</p> 
                <p>{price}</p>
            </div>

        </div>
      
    )
} 
export default Productdetails