import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/Login'; 
 
import Home from './components/Home';

import './App.css'
import Protectedroute from './components/ProtectedRoutes';
import Products from './components/Products'
import Everyproduct from './components/Everyproducts';
import Eachproduct from './components/Eachproduct'; 

function App() {  
  return(
  <BrowserRouter>
   <Routes>
      <Route path="/" element={
        <Protectedroute>
        <Home/>
        </Protectedroute>}/> 
      <Route path="/Login" element={<Login/>}/>   
      
      <Route path='/products' element={<Products/>}/> 
      <Route path="/products/:id" element={<Eachproduct/>}/>

    
   </Routes>
  </BrowserRouter> 
  )
}

export default App
