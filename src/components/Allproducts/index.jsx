import { useEffect, useState } from "react" 
import Everyproduct from "../Everyproducts"
import Cookies from 'js-cookie' 
import "./index.css"


const Allproducts=()=>{   
    const[allDeals,setAllDeals]=useState([]) 
    const[err,seterr]=useState(null)
    useEffect(()=>{
        allproducts()
    },[])  
    
    const allproducts=async()=>{ 
        const jwtToken=Cookies.get("jwt_token")
        const options={
            method:"GET",
            headers:{
                Authorization:`Bearer ${jwtToken}`,
            } 
        } 
        try{

        const response=await fetch("https://apis.ccbp.in/products",options) 
        const data=await response.json() 
        console.log(data) 
        setAllDeals(data) 
        }catch(e){
            console.log(e.message) 
            seterr(e.message)
        }
    }  

    return(  
        <div className="allproducts"> 
            {allDeals?.products?.map((each)=>{ 
               return <Everyproduct allproducts={each} key={each.id}/>

            })}
            <h1>{err}</h1>

        </div>
        

    )
}  

export default Allproducts