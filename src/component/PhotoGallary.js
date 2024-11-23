
import React from 'react'

const PhotoGallary = () => {
  return (
<>
<div className="container-fluid " >
      <header className="one bg-dark ">
         <div className="container-fluid ">
        <nav className="navbar navbar-expand-sm ">
          <div className="container justify-content-around p-0 ">
            <div className="">
              <a className="navbar-brand text-light text-wrap  d-md-block bg-danger" href="https://shahid787878.github.io/SHAHID/">
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
     
      <div className="section-1  w border borderd-3  justify-content-center mx-auto  w-100 ">
     
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
        
            <div className="carousel-item active two " >
            <div className="  d-flex justify-content-center align-items-center h-100 w-100   text-center">
       <img style={{height:'100vh'} } className="w-100" src="https://images.pexels.com/photos/248241/pexels-photo-248241.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
       </div>           
              <div className="carousel-caption">
                <div className="animate__animated animate__fadeInDown">
                  <h3 className="pb-2  mx-auto w-25 h3_starting">Avatar</h3>
                  <h1 className="display-4 fw-bold pb-2 text-success">Style</h1>
                </div>
                <div className="animate__animated animate__fadeInUp ">
                  <p className="w-75 mx-auto pb-2 text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                  <button type="button" className="btn px-4 py-2 btnshop">Task</button>
                </div>
              </div>
            </div>
            <div className="carousel-item box1 ">
       <div className=" mx-auto text-center">
       <img style={{height:'100vh'} } className="w-100" src="https://images.pexels.com/photos/8721319/pexels-photo-8721319.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
       </div> 
              <div className="carousel-caption ">
                <div className="animate__animated animate__fadeInDown ">
                  <h3 className="fs-5">Image Avatar</h3>
                  <h1 className="display-4 fw-bold pb-2 text-success">Second Picture Style</h1>
                </div>
                <div className="animate__animated animate__fadeInUp">
                  <p className="w-75 mx-auto pb-2 text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                  <button type="button" className="btn px-4 py-2 btnshop">Task</button>
                </div>
              </div>
            </div>
            <div className="carousel-item book ">
            <div className=" mx-auto text-center">
       <img style={{height:'100vh'} } className="w-100" src=" https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600"alt="" />
       </div>           
              <div className="carousel-caption">
                <div className="animate__animated animate__fadeInDown">
                  <h3 className="fs-5 text-grey">
                  Taking your Viewing Experience to Next Level
                  </h3>
                  <h1 className="display-4 fw-bold pb-2 text-success">Style Next</h1>
                </div>
                <div className="animate__animated animate__fadeInUp">
                  <p className="w-75 mx-auto pb-2 text-pre">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                  <button type="button" className="btn px-4 py-2 btnshop">Task</button>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon p-2 bg-dark"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon p-2 bg-dark"></span>
          </button>
        </div>
              <div className="section-1  w border borderd-3  justify-content-center mx-auto  w-100 ">
     
        <div id="demo1" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
        
            <div className="carousel-item active two " >
            <div className="  d-flex justify-content-center align-items-center h-100 w-100   text-center">
       {/* <img style={{height:'100vh'} } className="w-100" src="https://images.pexels.com/photos/248241/pexels-photo-248241.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> */}
       <div className="row  text-center  " >
         
         </div>
         
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-fluid mx-auto;">
                <div className="col mb-4">
                  <div className="card">
                   <img alt="err" src="https://images.pexels.com/photos/2179205/pexels-photo-2179205.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                    <div className="card-body">
                      <h5 className="card-title">Photography</h5>
                      <span className="price text-danger fw-bold">INR2500</span>
                      <del>$55.25</del>
                      <div className="mb-2">
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star"></i></span>
                        <span className="rating_num">House Ratings</span>
                        <div className="card_content">
                           
                         </div>
                       
                       
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col mb-4">
                   <div className="card">
                    <img  alt="err" src="https://images.pexels.com/photos/673021/pexels-photo-673021.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Photography</h5>
                       <span className="price text-danger fw-bold">INR4550</span>
                       <del>$155.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">House Ratings</span>
                         <div className="card_content">
                          
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/943241/pexels-photo-943241.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                   
                     <div className="card-body">
                       <h5 className="card-title">Photography</h5>
                       <span className="price text-danger fw-bold">INR2500</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">House Ratings</span>
                         <div className="card_content">
                            <h3>
                              {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                            </h3>
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/1484771/pexels-photo-1484771.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Photography</h5>
                       <span className="price text-danger fw-bold">INR2500</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">House Ratings</span>
                         <div className="card_content">
                            <h3>
                              {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                            </h3>
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/1854897/pexels-photo-1854897.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Photography</h5>
                       <span className="price text-danger fw-bold">INR2500</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">House Ratings</span>
                         <div className="card_content">
                            <h3>
                              {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                            </h3>
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/302355/pexels-photo-302355.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Photography</h5>
                       <span className="price text-danger fw-bold">INR2500</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">House Ratings</span>
                         <div className="card_content">
                            <h3>
                              {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                            </h3>
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                    <div className="card">
                     <img alt="err" src="https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                      <div className="card-body">
                        <h5 className="card-title">Photography</h5>
                        <span className="price text-danger fw-bold">INR2500</span>
                        <del>$55.25</del>
                        <div className="mb-2">
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star"></i></span>
                          <span className="rating_num">House Ratings</span>
                          <div className="card_content">
                             <h3>
                               {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                             </h3>
                           </div>
                         
                         
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                     <img alt="err" src="https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                      <div className="card-body">
                        <h5 className="card-title">Photography</h5>
                        <span className="price text-danger fw-bold">INR2500</span>
                        <del>$55.25</del>
                        <div className="mb-2">
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star"></i></span>
                          <span className="rating_num">House Ratings</span>
                          <div className="card_content">
                             <h3>
                               {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                             </h3>
                           </div>
                         
                         
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                     <img alt="err" src="https://images.pexels.com/photos/1426044/pexels-photo-1426044.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                      <div className="card-body">
                        <h5 className="card-title">Photography</h5>
                        <span className="price text-danger fw-bold">INR2500</span>
                        <del>$55.25</del>
                        <div className="mb-2">
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star"></i></span>
                          <span className="rating_num">House Ratings</span>
                          <div className="card_content">
                             <h3>
                               {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                             </h3>
                           </div>
                         
                         
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                     <img alt="err" src="https://images.pexels.com/photos/3235566/pexels-photo-3235566.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                      <div className="card-body">
                        <h5 className="card-title">Photography</h5>
                        <span className="price text-danger fw-bold">INR2500</span>
                        <del>$55.25</del>
                        <div className="mb-2">
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star"></i></span>
                          <span className="rating_num">House Ratings</span>
                          <div className="card_content">
                             <h3>
                               {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                             </h3>
                           </div>
                         </div></div></div></div></div>
       </div>           
              <div className="carousel-caption">
                <div className="animate__animated animate__fadeInDown mb-5 pb-5">
                  <h3 className="pb-5  mx-auto w-25 h3_starting text-danger mb-5">Avatar</h3>
                  <h1 className="display-4 fw-bold pb-5 text-danger mb-5">Style</h1>
                </div>
                <div className="animate__animated animate__fadeInUp mb-5 pb-5">
                  <p className="w-75 mx-auto pb-2  pb-5 text-danger mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                  {/* <button type="button" className="btn px-4 py-2 btnshop">Task</button> */}
                </div>
              </div>
            </div>
            <div className="carousel-item box1 ">
       <div className=" mx-auto text-center">
       {/* <img style={{height:'100vh'} } className="w-100" src="https://images.pexels.com/photos/8721319/pexels-photo-8721319.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> */}
       <div className="row  text-center  " >
         
         </div>
         
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-fluid mx-auto;">
                <div className="col mb-4">
                  <div className="card">
                   <img alt="err" src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                    <div className="card-body">
                      <h5 className="card-title">Photography</h5>
                      <span className="price text-danger fw-bold">INR2500</span>
                      <del>$55.25</del>
                      <div className="mb-2">
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star"></i></span>
                        <span className="rating_num">House Ratings</span>
                        <div className="card_content">
                           
                         </div>
                       
                       
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col mb-4">
                   <div className="card">
                    <img  alt="err" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Photography</h5>
                       <span className="price text-danger fw-bold">INR4550</span>
                       <del>$155.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">House Ratings</span>
                         <div className="card_content">
                          
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Photography</h5>
                       <span className="price text-danger fw-bold">INR2500</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">House Ratings</span>
                         <div className="card_content">
                            <h3>
                              {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                            </h3>
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Photography</h5>
                       <span className="price text-danger fw-bold">INR2500</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">House Ratings</span>
                         <div className="card_content">
                            <h3>
                              {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                            </h3>
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Photography</h5>
                       <span className="price text-danger fw-bold">INR2500</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">House Ratings</span>
                         <div className="card_content">
                            <h3>
                              {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                            </h3>
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Photography</h5>
                       <span className="price text-danger fw-bold">INR2500</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">House Ratings</span>
                         <div className="card_content">
                            <h3>
                              {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                            </h3>
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                    <div className="card">
                     <img alt="err" src="https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                      <div className="card-body">
                        <h5 className="card-title">Photography</h5>
                        <span className="price text-danger fw-bold">INR2500</span>
                        <del>$55.25</del>
                        <div className="mb-2">
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star"></i></span>
                          <span className="rating_num">House Ratings</span>
                          <div className="card_content">
                             <h3>
                               {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                             </h3>
                           </div>
                         
                         
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                     <img alt="err" src="https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                      <div className="card-body">
                        <h5 className="card-title">Photography</h5>
                        <span className="price text-danger fw-bold">INR2500</span>
                        <del>$55.25</del>
                        <div className="mb-2">
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star"></i></span>
                          <span className="rating_num">House Ratings</span>
                          <div className="card_content">
                             <h3>
                               {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                             </h3>
                           </div>
                         
                         
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                     <img alt="err" src="https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                      <div className="card-body">
                        <h5 className="card-title">Photography</h5>
                        <span className="price text-danger fw-bold">INR2500</span>
                        <del>$55.25</del>
                        <div className="mb-2">
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star"></i></span>
                          <span className="rating_num">House Ratings</span>
                          <div className="card_content">
                             <h3>
                               {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                             </h3>
                           </div>
                         
                         
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                     <img alt="err" src="https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                      <div className="card-body">
                        <h5 className="card-title">Photography</h5>
                        <span className="price text-danger fw-bold">INR2500</span>
                        <del>$55.25</del>
                        <div className="mb-2">
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star"></i></span>
                          <span className="rating_num">House Ratings</span>
                          <div className="card_content">
                             <h3>
                               {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                             </h3>
                           </div>
                         </div></div></div></div></div>
       </div> 
              <div className="carousel-caption pb-5  mb-5">
                <div className="animate__animated animate__fadeInDown pb-5 mb-5">
                  <h3 className="fs-5 pb-5 text-danger mb-5">Image Avatar</h3>
                  <h1 className="display-4 fw-bold pb-5 text-danger mb-5">Second Picture Style</h1>
                </div>
                <div className="animate__animated animate__fadeInUp pb-5 mb-5">
                  <p className="w-75 mx-auto pb-2  pb-5 text-danger mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                  {/* <button type="button" className="btn px-4 py-2 btnshop">Task</button> */}
                </div>
              </div>
            </div>
            <div className="carousel-item book ">
            <div className=" mx-auto text-center">
       {/* <img style={{height:'100vh'} } className="w-100" src=" https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600"alt="" /> */}
       <div className="row  text-center  " >
         
         </div>
         
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-fluid mx-auto;">
                <div className="col mb-4">
                  <div className="card">
                   <img alt="err" src="https://images.pexels.com/photos/76964/fighter-jet-f-15-strike-eagle-fighter-aircraft-jet-fighter-76964.jpeg?auto=compress&cs=tinysrgb&w=800" height="200"/>
                    <div className="card-body">
                      <h5 className="card-title">Photography</h5>
                      <span className="price text-danger fw-bold">INR2500</span>
                      <del>$55.25</del>
                      <div className="mb-2">
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star"></i></span>
                        <span className="rating_num">House Ratings</span>
                        <div className="card_content">
                           
                         </div>
                       
                       
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col mb-4">
                   <div className="card">
                    <img  alt="err" src="https://images.pexels.com/photos/206881/pexels-photo-206881.jpeg?auto=compress&cs=tinysrgb&w=800" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Photography</h5>
                       <span className="price text-danger fw-bold">INR4550</span>
                       <del>$155.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">House Ratings</span>
                         <div className="card_content">
                          
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/76959/supersonic-fighter-aircraft-jet-jet-fighter-76959.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Photography</h5>
                       <span className="price text-danger fw-bold">INR2500</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">House Ratings</span>
                         <div className="card_content">
                            <h3>
                              {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                            </h3>
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/618789/pexels-photo-618789.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Photography</h5>
                       <span className="price text-danger fw-bold">INR2500</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">House Ratings</span>
                         <div className="card_content">
                            <h3>
                              {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                            </h3>
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/29375289/pexels-photo-29375289/free-photo-of-classic-silver-jet-on-tarmac-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Photography</h5>
                       <span className="price text-danger fw-bold">INR2500</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">House Ratings</span>
                         <div className="card_content">
                            <h3>
                              {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                            </h3>
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/3850909/pexels-photo-3850909.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Photography</h5>
                       <span className="price text-danger fw-bold">INR2500</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">House Ratings</span>
                         <div className="card_content">
                            <h3>
                              {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                            </h3>
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                    <div className="card">
                     <img alt="err" src="https://images.pexels.com/photos/24342480/pexels-photo-24342480/free-photo-of-f-16-of-the-thundebirds-usaf-air-demonstration-squadron.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                      <div className="card-body">
                        <h5 className="card-title">Photography</h5>
                        <span className="price text-danger fw-bold">INR2500</span>
                        <del>$55.25</del>
                        <div className="mb-2">
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star"></i></span>
                          <span className="rating_num">House Ratings</span>
                          <div className="card_content">
                             <h3>
                               {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                             </h3>
                           </div>
                         
                         
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                     <img alt="err" src="https://images.pexels.com/photos/28904547/pexels-photo-28904547/free-photo-of-swiss-air-force-f-a-18-hornet-on-tarmac.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                      <div className="card-body">
                        <h5 className="card-title">Photography</h5>
                        <span className="price text-danger fw-bold">INR2500</span>
                        <del>$55.25</del>
                        <div className="mb-2">
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star"></i></span>
                          <span className="rating_num">House Ratings</span>
                          <div className="card_content">
                             <h3>
                               {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                             </h3>
                           </div>
                         
                         
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                     <img alt="err" src="https://images.pexels.com/photos/29066368/pexels-photo-29066368/free-photo-of-turkish-air-force-jet-display-at-teknofest-adana.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                      <div className="card-body">
                        <h5 className="card-title">Photography</h5>
                        <span className="price text-danger fw-bold">INR2500</span>
                        <del>$55.25</del>
                        <div className="mb-2">
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star"></i></span>
                          <span className="rating_num">House Ratings</span>
                          <div className="card_content">
                             <h3>
                               {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                             </h3>
                           </div>
                         
                         
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                     <img alt="err" src="https://images.pexels.com/photos/5213373/pexels-photo-5213373.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                      <div className="card-body">
                        <h5 className="card-title">Photography</h5>
                        <span className="price text-danger fw-bold">INR2500</span>
                        <del>$55.25</del>
                        <div className="mb-2">
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star-fill"></i></span>
                          <span><i className="bi bi-star"></i></span>
                          <span className="rating_num">House Ratings</span>
                          <div className="card_content">
                             <h3>
                               {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                             </h3>
                           </div>
                         </div></div></div></div></div>
       </div>           
              <div className="carousel-caption pb-5">
                <div className="animate__animated animate__fadeInDown pb-5">
                  <h3 className="fs-5 pb-5 text-danger mb-5">
                  Taking your Viewing Experience to Next Level
                  </h3>
                  <h1 className="display-4 fw-bold pb-5 mb-5 text-danger ">Style Next</h1>
                </div>
                <div className="animate__animated animate__fadeInUp pb-5 mb-5">
                  <p className="w-75 mx-auto pb-5 mb-5 text-danger">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                  {/* <button type="button" className="btn px-4 py-2 btnshop">Task</button> */}
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#demo1" data-bs-slide="prev">
          <span className="carousel-control-prev-icon p-2 bg-dark"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo1" data-bs-slide="next">
          <span className="carousel-control-next-icon p-2 bg-dark"></span>
          </button>
        </div>
{/* </div>
        <div className="section-2 container-fluid h-100  bg-success  "  >
        <div className="owl-carousel owl-theme w-100 row  mx-auto  " id="owl-one">
<div className="row-fluid bg-danger w-100">
<div className="item">
    <img alt="nn" src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=600" style={{height:'100vh'}}  srcSet=""/>
</div>
</div>
<div className="row">
<div className="item">
<img alt="nn" src="https://images.pexels.com/photos/2866073/pexels-photo-2866073.jpeg?auto=compress&cs=tinysrgb&w=600" style={{height:'100vh'}}  srcSet=""/>
</div>
</div>

<div className="item">
<img alt="nn" src="https://images.pexels.com/photos/189857/pexels-photo-189857.jpeg?auto=compress&cs=tinysrgb&w=600" style={{height:'100vh'}}  srcSet=""/>
</div>
<div className="item">
<img alt="nn" src="https://images.pexels.com/photos/3679525/pexels-photo-3679525.jpeg?auto=compress&cs=tinysrgb&w=600" style={{height:'100vh'}}  srcSet=""/>
</div>
<div className="item">
<img alt="nn" src="https://images.pexels.com/photos/1983036/pexels-photo-1983036.jpeg?auto=compress&cs=tinysrgb&w=600" style={{height:'100vh'}}  srcSet=""/>
</div>
<div className="item">
<img alt="nn" src="https://images.pexels.com/photos/2799785/pexels-photo-2799785.jpeg?auto=compress&cs=tinysrgb&w=600" style={{height:'100vh'}}  srcSet=""/>
</div>
<div className="item">
<img alt="nn" src="https://images.pexels.com/photos/69970/pexels-photo-69970.jpeg?auto=compress&cs=tinysrgb&w=600" style={{height:'100vh'}}  srcSet=""/>
</div>
<div className="item">
<img alt="nn" src="https://images.pexels.com/photos/450054/pexels-photo-450054.jpeg?auto=compress&cs=tinysrgb&w=600" style={{height:'100vh'}}  srcSet=""/>
</div>
</div>
</div></div></div> */}
</div></div></div>
    <div className="container-fluid   mx-auto">
      <div className="row  text-center  " >
         
        </div>
        
             <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-fluid mx-auto;">
               <div className="col mb-4">
                 <div className="card">
                  <img alt="err" src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                   <div className="card-body">
                     <h5 className="card-title">Photography</h5>
                     <span className="price text-danger fw-bold">INR2500</span>
                     <del>$55.25</del>
                     <div className="mb-2">
                       <span><i className="bi bi-star-fill"></i></span>
                       <span><i className="bi bi-star-fill"></i></span>
                       <span><i className="bi bi-star-fill"></i></span>
                       <span><i className="bi bi-star-fill"></i></span>
                       <span><i className="bi bi-star"></i></span>
                       <span className="rating_num">House Ratings</span>
                       <div className="card_content">
                          
                        </div>
                      
                      
                   </div>
                 </div>
                 </div>
               </div>
               <div className="col mb-4">
                  <div className="card">
                   <img  alt="err" src="https://images.pexels.com/photos/326259/pexels-photo-326259.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                    <div className="card-body">
                      <h5 className="card-title">Photography</h5>
                      <span className="price text-danger fw-bold">INR4550</span>
                      <del>$155.25</del>
                      <div className="mb-2">
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star"></i></span>
                        <span className="rating_num">House Ratings</span>
                        <div className="card_content">
                         
                         </div>
                       
                       
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                   <img alt="err" src="https://images.pexels.com/photos/14401634/pexels-photo-14401634.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                    <div className="card-body">
                      <h5 className="card-title">Photography</h5>
                      <span className="price text-danger fw-bold">INR2500</span>
                      <del>$55.25</del>
                      <div className="mb-2">
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star"></i></span>
                        <span className="rating_num">House Ratings</span>
                        <div className="card_content">
                           <h3>
                             {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                           </h3>
                         </div>
                       
                       
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                   <img alt="err" src="https://images.pexels.com/photos/14401740/pexels-photo-14401740.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                    <div className="card-body">
                      <h5 className="card-title">Photography</h5>
                      <span className="price text-danger fw-bold">INR2500</span>
                      <del>$55.25</del>
                      <div className="mb-2">
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star"></i></span>
                        <span className="rating_num">House Ratings</span>
                        <div className="card_content">
                           <h3>
                             {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                           </h3>
                         </div>
                       
                       
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                   <img alt="err" src="https://images.pexels.com/photos/638479/pexels-photo-638479.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                    <div className="card-body">
                      <h5 className="card-title">Photography</h5>
                      <span className="price text-danger fw-bold">INR2500</span>
                      <del>$55.25</del>
                      <div className="mb-2">
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star"></i></span>
                        <span className="rating_num">House Ratings</span>
                        <div className="card_content">
                           <h3>
                             {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                           </h3>
                         </div>
                       
                       
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                   <img alt="err" src="https://images.pexels.com/photos/14401632/pexels-photo-14401632.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                    <div className="card-body">
                      <h5 className="card-title">Photography</h5>
                      <span className="price text-danger fw-bold">INR2500</span>
                      <del>$55.25</del>
                      <div className="mb-2">
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star"></i></span>
                        <span className="rating_num">House Ratings</span>
                        <div className="card_content">
                           <h3>
                             {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                           </h3>
                         </div>
                       
                       
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/27783477/pexels-photo-27783477/free-photo-of-riesgo.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Photography</h5>
                       <span className="price text-danger fw-bold">INR2500</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">House Ratings</span>
                         <div className="card_content">
                            <h3>
                              {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                            </h3>
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/14401641/pexels-photo-14401641.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Photography</h5>
                       <span className="price text-danger fw-bold">INR2500</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">House Ratings</span>
                         <div className="card_content">
                            <h3>
                              {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                            </h3>
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/27776503/pexels-photo-27776503/free-photo-of-porsche-gt3-rs.jpeg?auto=compress&cs=tinysrgb&w=600 " height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Photography</h5>
                       <span className="price text-danger fw-bold">INR2500</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">House Ratings</span>
                         <div className="card_content">
                            <h3>
                              {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                            </h3>
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/14401638/pexels-photo-14401638.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Photography</h5>
                       <span className="price text-danger fw-bold">INR2500</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">House Ratings</span>
                         <div className="card_content">
                            <h3>
                              {/* <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button> */}
                            </h3>
                          </div>
                        </div></div></div></div></div></div>
 

      <div className="container-fluid float-start  mx-auto h-100 w-100">
      <div className="owl-carousel owl-theme mt-5 mb-5 " id="owl-two">

        
<div className="row h-100">
<div className="item ">
    <img src="https://images.pexels.com/photos/1082663/pexels-photo-1082663.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""   style={{height:'100vh'}} srcSet=""/>
</div>
</div>
<div className="row">
<div className="item">
<img style={{height:'100vh'}} src="https://images.pexels.com/photos/339379/pexels-photo-339379.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
</div> 
</div>
<div className="row">
<div className="item">
    <img style={{height:'100vh'}} src="https://images.pexels.com/photos/298298/pexels-photo-298298.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
</div> 
</div>



<div className="item">
    <img style={{height:'100vh'}} src="https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcSet=""/>
</div>
<div className="item">
    <img style={{height:'100vh'}} src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcSet=""/>
</div>
<div className="item">
    <img style={{height:'100vh'}} src="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcSet=""/>
</div>
<div className="item">
    <img style={{height:'100vh'}} src="https://images.pexels.com/photos/752525/pexels-photo-752525.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcSet=""/>
</div>
</div>
  
           
 {/* <h2>{`${time.hr < 10 ? 0 : ""}${time.hr} : ${time.min < 10 ? 0 : ""}${time.min} : ${time.sec < 10 ? 0 : ""}${time.sec}`}</h2> */}
			{/* <button onClick={pauseOrResume}>pause/un-pause</button> */}
			{/* <button onClick={reset}>reset</button> */} 
</div>
<div className="container-fluid  float-start ">

<div className="owl-carousel owl-theme  " id="owl-three">
<div className="item">
    <img style={{height:'100vh'}} src="https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcSet=""/> 
</div>
<div className="item">
  <img style={{height:'100vh'}} src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcSet=""/>
</div>
</div>
</div>
</>
  )
}

export default PhotoGallary
