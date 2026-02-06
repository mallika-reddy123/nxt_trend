
import Allproducts from "../Allproducts"
import PrimeDeals from "../Primedeals"  

import Header from "../Header"
// import Searchbar from "../Searchbar"
const Products=()=>{  
    return(
        <div> 
            <h1>
                <Header/>
            </h1>
            <h1>
               <PrimeDeals/>  
            </h1> 
            {/* <h1> 
                <Searchbar/>
            </h1>  */}

          <h1> 
            <Allproducts/> 
          </h1> 
        </div>
    )
}  

export default Products