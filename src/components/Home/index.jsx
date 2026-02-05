// import Header from '../Header'


// const Home=()=>{ 

//     return(  
//         <div>
//             <Header/>
//             <h1>Clothes that get u noticed</h1> 
//             <p>vbn jkvnbm, ertyuikm dxxjkcvbnmcvbnm</p> 
//             <button type="button">Shop Now</button> 
//              <img
//                 src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
//                 alt="clothes that get you noticed"
//                 className="home-desktop-img"
//              />
//         </div>
//     ) 

// } 
// export default Home 
import Header from '../Header'
import './index.css'

const Home = () => {
  return (
    <div>
      <Header />

      <div className="home-hero">
        
        <div className="home-text">
          <h1 className="home-heading">Clothes That Get u Noticed</h1>
          <p className="home-description">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
           
          </p>
          <button type="button" className="shop-btn">Shop Now</button>
        </div>

        
        <div className="home-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-image"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
