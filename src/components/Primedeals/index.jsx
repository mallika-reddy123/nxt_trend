import { useEffect, useState } from "react"
import Productdetails from "../Productdetails"; 
import Cookies from 'js-cookie' 
import './index.css'

const PrimeDeals=()=>{
    const [deals,setDeals]=useState([])  
    const [error,setError]=useState(null) 
    useEffect(()=>{
        renderdetails();
    },[]);
    

  const renderdetails=async()=>{ 
    const jwtToken=Cookies.get("jwt_token")
        const options={ 
        method:"GET",
        headers:{
            Authorization:`Bearer ${jwtToken}`,
        } 
        }
        try{
            const res=await fetch("https://apis.ccbp.in/prime-deals",options) 
            const value=await res.json() 
            console.log(value)  
            setDeals(value)
        }catch(e){
            console.log("error",e.message) 
            setError(e.message)
        }
    } 
    return(
        <div className="images">
            {deals?.prime_deals?.map((each)=> 
            <Productdetails productdetail={each} key={each.id}/>
            )}
        </div>
        
    )

}
export default PrimeDeals