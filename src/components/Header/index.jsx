

// import {Link, useNavigate} from "react-router-dom"
// import Cookies from "js-cookie"

// const Header=()=>{ 
//     // const jwtToken=Cookies.remove("jwt_token") 
//     // if (jwtToken===undefined){
//     //     return <nag
//     // }
//     const navigate=useNavigate()
//     const onclickremove=()=>{
//             Cookies.remove("jwt_token")
//            navigate("/login")
//         }
//     return( 
        
//         <div>
//             <img
//               className="website-logo"
//               src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//               alt="website logo"
//             />  
//             <Link to='/'>
//             <h1>Home</h1>  
//             </Link> 
//             <Link to='/Products'>
//             <h1>Product</h1>  
//             </Link> 
//             <Link to="/Cart">
//             <h1>Cart</h1>  
//             </Link>
//             <button type="button" onClick={onclickremove}>
//                 Logout
//             </button>
//         </div>

//     )
// } 
// export default Header 




import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import './index.css' 

const Header = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login", { replace: true });
  };

  return ( 

   
        <div className="navbar">
            <div>
      <Link to="/">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
      </Link> </div>
      
<div>
      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
          Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/products">
          Products
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/cart">
          Cart
          </Link>
        </li>
        <button type="button" className="logout-btn" onClick={onClickLogout}>
        Logout
      </button>
      </ul>

      
      </div>
     </div>
  );
};

export default Header;
