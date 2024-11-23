import { Link,useLocation } from 'react-router-dom'
import React from 'react'
// import Shop from './Shop';
// import { useSelector } from 'react-redux';
const Navbar = () => {
    let location = useLocation();
    console.log(location.pathname)
    React.useEffect(() => {
    }, [location]);
    // const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
    // const amount= useSelector(state=>state.amount)

    return (
    <div>

<nav className="navbar navbar-expand-lg border bordered-4 one position-sticky "  id="vb" >
<div className="container-fluid " >
       <Link className="navbar-brand animate__animated animate__bounce  " to="/" >
   
     <h2 className="wrap typewrite text-dark text-decoration-none hm d-sm-display-6 d-md-display-5 d-lg-display-5 d-xl-display-5" data-period="2" data-type='[ "Kshipra River Ujjain" ]' >SHAHID </h2>
       </Link>
       
       <div className="collapse navbar-collapse animate__animated animate__bounce" id="shahid">
         <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
           <li className="nav-item  ">
         <Link className={`nav-link active ${location.pathname==="/home"?"active":"" }` } aria-current="page" to="/home" >Home</Link>
       </li>            
           <li className="nav-item ">
           <Link className={`nav-link  ${location.pathname==="/"?"active":""}`} to="/about" >About</Link>
           </li>
       
       <li className="nav-item ">
           <Link className={`nav-link  ${location.pathname==="/"?"active":""}`} to="/news" >News</Link>
           </li>    
            {/* <li className="nav-item ">
           <Link className={`nav-link  ${location.pathname==="/"?"active":""}`} to="/gallary" >Gallary</Link>
           </li>        */}
           <li className="nav-item ">
           <Link className={`nav-link  ${location.pathname==="/"?"active":""}`} to="/contact" >Contact</Link>
           </li>    
     
      
                </ul> 

       </div>
       <div className=" px-5  right-top bg-light d-flex animate__animated animate__bounce">
         
             {/* <button className='btn btn-transparent '>{ <p>  and balance is: </p>  }</button> */}
 {/* <button className='btn btn-primary' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
  logout
</button> */}
  {/* : (<button onClick={() => loginWithRedirect()}>Log In</button>) */}
      
 
             <button type="button" className="btn bar-btn-links " data-bs-toggle="offcanvas"
               data-bs-target="#offcanvasRightmobile">
               <span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                   className="bi bi-grid-fill" viewBox="0 0 16 16">
                   <path
                     d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
                 </svg>
               </span>
             </button>
       </div>
     </div>
   </nav>
<div className="offcanvas offcanvas-end" id="offcanvasRightmobile">
<div className="offcanvas-header ">
<button type="button" className="close-menu mt-4" data-bs-dismiss="offcanvas" aria-label="Close">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
<path fillRule="evenodd"
d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
</svg>
</button>

</div>
<div className="offcanvas-body">
<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
           <li className="nav-item  ">
         <Link className={`nav-link active ${location.pathname==="/home"?"active":""}`} aria-current="page" to="/home">Home</Link>
       </li>            
           <li className="nav-item ">
           <Link className={`nav-link  ${location.pathname==="/"?"active":""}`} to="/about" >About</Link>
           </li>
      
           <li className="nav-item ">
           <Link className={`nav-link  ${location.pathname==="/"?"active":""}`} to="/news" >News</Link>
           </li>       
           <li className="nav-item ">
           <Link className={`nav-link  ${location.pathname==="/"?"active":""}`} to="/contact" >Contact</Link>
           </li>    
         
       
                </ul>
<div className="head-contact d-none d-lg-block"> 
 
<div id="relatedStories_news" className="commonNews_Widget">
<span className="h2">Related</span>
<div className="news-cards">  
</div>
</div>

<div className="quick-link my-4">
<ul>
<li> <i className="fab fa-whatsapp"></i> <span>Nil</span> </li>
<li> <i className="fas fa-envelope"></i> <span>ujjain.com</span> </li>
</ul>
</div></div></div></div>

</div>

)
}
export default Navbar
