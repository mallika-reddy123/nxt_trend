import { useEffect, useState } from "react" 
import { useParams } from "react-router-dom" 
import Cookies from 'js-cookie' 
import Header from "../Header"

const Eachproduct=()=>{   
    const jwtToken=Cookies.get("jwt_token")  
    const {id}=useParams();
    const [eachproduct,seteachproduct]=useState({}) 
    
   const {
    image_url,
    title,
    price,
    rating,
    description,
    brand,
    availability,
    similar_products,
  } = eachproduct;
    useEffect(()=>{
        FetchedData()
    },[]) 
    const FetchedData = async()=>{ 
        
        const options={
            method:"GET",
            headers:{ 
                Authorization:`Bearer ${jwtToken}`,

            },
        };
        try{
            const fetchs=await fetch(`https://apis.ccbp.in/products/${id}`,options) 
            const result=await fetchs.json() 
            console.log(result)  
            seteachproduct(result)
        } catch(e){
            console.log(e.message) 
           
        }

    }
    return(   
        <div>   
            <Header/>

            {eachproduct && ( 
                <div>
                <div>
                    <img src={image_url}/> 
                    <h1>{title}</h1> 
                    <h1>{price}</h1> 
                    <p>{rating}</p> 
                    <p>{description}</p> 
                    <p>{brand}</p> 
                    <p>{availability}</p> 
                    <button type="button">Add to Cart</button> 
                </div>
                <div>
                    <h1>similar_products</h1> 
                    <div>
                        {similar_products && similar_products.map((each)=>(
                            <div key={each.id}>  
                            <img src={each.image_url}/> 
                            <h4>{each.price}</h4> 
                            <h5>{each.rating}</h5> 
                            <button type="button">Add to cart</button>

                            
                            </div>
                        )


                        )}
                    </div>
                </div>
                </div>
            )}
            
        </div>
        

    )

} 
export default Eachproduct