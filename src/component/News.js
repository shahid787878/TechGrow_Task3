import React from 'react'

import PhotoGallary from './PhotoGallary'
import FetchDataLoading from './FetchDataLoading'
const News = () => {
  return (

<div>

      <>
      
      <header className="one-fluid  w-100">
         <div className="container-fluid  ">
        <nav className="navbar navbar-expand-sm bg-dark ">
          <div className="container justify-content-around p-0 ">
            <div className="btnshop">
              <a className="navbar-brand text-primary text-wrap  d-md-block " href="https://shahid787878.github.io/SHAHID/">
              {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu0xi6xwH5_s4yKKI5HH99ImEXTGz93VijBVFlHEQTKPBMBJtPFPzS09w&simg/logo_light.png"/> */}
               SHAHID PATEL 9752784376</a>
            </div>
            <div className="">
              <ul className="nav ">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-danger " href="/" role="button" data-bs-toggle="dropdown">HOME</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Fashion 1</a></li>
                    <li><a className="dropdown-item" href="/">Fashion 2</a></li>
                    <li><a className="dropdown-item" href="/">Furniture 1</a></li>
                    <li><a className="dropdown-item" href="/">Furniture 2</a></li>
                    <li><a className="dropdown-item" href="/">Electronics 1</a></li>
                    <li><a className="dropdown-item" href="/">Electronics 2</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-light" href="/" role="button" data-bs-toggle="dropdown">PAGES</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">About Us</a></li>
                    {/* <li><a className="dropdown-item" href="/">Contact Us</a></li> */}
                    <li><a className="dropdown-item" href="/">Faq</a></li>
                    <li><a className="dropdown-item" href="/">404 Error Page</a></li>
                    <li><a className="dropdown-item" href="/">Login</a></li>
                    <li><a className="dropdown-item" href="/">Register</a></li>
                    <li><a className="dropdown-item" href="/">Terms and Conditions</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/">PRODUCTS</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-light" href="/" role="button" data-bs-toggle="dropdown">BLOG</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Integration</a></li>
                    <li><a className="dropdown-item" href="/">Integration Single</a></li>
                    <li><a className="dropdown-item" href="/">Career</a></li>
                    <li><a className="dropdown-item" href="/">Career Single</a></li>
                    <li><a className="dropdown-item" href="/">Pricing</a></li>
                    <li><a className="dropdown-item" href="/">Authors</a></li>
                    <li><a className="dropdown-item" href="/">Author Single</a></li>
                    <li><a className="dropdown-item" href="/">Blog</a></li>
                    <li><a className="dropdown-item" href="/">Blog Single</a></li>
                    <li><a className="dropdown-item" href="/">Contact</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-light" href="/" role="button" data-bs-toggle="dropdown">SHOP</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Fashion 1</a></li>
                    <li><a className="dropdown-item" href="/">Fashion 2</a></li>
                    <li><a className="dropdown-item" href="/">Furniture 1</a></li>
                    <li><a className="dropdown-item" href="/">Furniture 2</a></li>
                    <li><a className="dropdown-item" href="/">Electronics 1</a></li>
                    <li><a className="dropdown-item" href="/">Electronics 2</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-light" href="/" role="button" data-bs-toggle="dropdown">CLICK ON SEARCH ICON  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Fashion 1</a></li>
                    <li><a className="dropdown-item" href="/">Fashion 2</a></li>
                    <li><a className="dropdown-item" href="/">Furniture 1</a></li>
                    <li><a className="dropdown-item" href="/">Furniture 2</a></li>
                    <li><a className="dropdown-item" href="/">Electronics 1</a></li>
                    <li><a className="dropdown-item" href="/">Electronics 2</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="nav gap-3">
                <li>
                  <a href="https://shahid787878.github.io/MYAPP/" className="text-light fs-5"><i className="bi bi-search"></i></a>
                </li>
                <li><a href="https://shahid787878.github.io/TEXTUTILIS/" className="text-light position-relative">
                  <i className="bi bi-cart3 fs-5"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
      </header>
     
           

      
           
 {/* <h2>{`${time.hr < 10 ? 0 : ""}${time.hr} : ${time.min < 10 ? 0 : ""}${time.min} : ${time.sec < 10 ? 0 : ""}${time.sec}`}</h2> */}
			{/* <button onClick={pauseOrResume}>pause/un-pause</button> */}
			{/* <button onClick={reset}>reset</button> */} 


</>
{/* <Contact/> */}
<FetchDataLoading/>
<PhotoGallary/>
    </div>
  )
}

export default News
