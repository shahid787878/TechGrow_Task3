// src/components/Introduction.js
import React from "react";
import { Link } from "react-router-dom";
import "./Introduction.css"
const Introduction = () => {
	return (
		<>


			<div className="container-fluid  float-start  w-100">
				<div className="row-fluid d-block p-5 d-md-flex w-100 bg-primary">
					<div className="text1">
					<h1>
						Your Photography
						Journey Begins Here
					</h1>
					<p>
						Discover the beauty
						through our lens...
					</p>
					<p>
						Capture moments, tell stories,
						and create memories that last a
						lifetime.
					</p>
					<button className="explore-button">
						Explore Now
					</button>
				</div>
			<div className="row">
			<div className="col"><div className="image P-2 rounded-5">
					<img 
						src=
"https://media.geeksforgeeks.org/wp-content/uploads/20240122102536/1-(3).jpg"
					className="img-fluid rounded-5  d-md-block"	alt="Introduction"
					/>
				</div></div>
			</div>
			
			</div></div>
			<div className="container-fluid	mt-1  w-100">
				<div className="row-fluid bg-danger p-5 d-block d-md-flex w-100 ">
					<span><h2>Buy Plans and Subscriptions</h2>
				<p>
					Unlock premium features and exclusive
					content with our subscription
					plans.
				</p></span>
				<div className="subscription-options d-block d-md-flex">
					{/* Placeholder content for subscription options */}
					<div className="subscription-option">
						<h3>Basic Plan</h3>
						<p>Access to a limited set of features</p>
						<p>$9.99/month</p>
						<button className="subscribe-button">
							Subscribe
						</button>
					</div>
					<div className="subscription-option">
						<h3>Pro Plan</h3>
						<p>
							Full access to all features
							and exclusive content
						</p>
						<p>$19.99/month</p>
						<button className="subscribe-button">
							Subscribe
						</button>
					</div>
				</div>
				</div>
		 
</div>
{/* <div className="container-fluid    mx-auto  " >
        
    </div> */}
    <div className="container-fluid w-100  mx-auto  new h-100  position-relative "
       >
<div style={{height:'100vh', width:'100vh'}} className=".row-fluid border borderd rounded-5  bg mx-auto position-relative w-100" >
    <div className="row w-100 d-none d-lg-block  mx-auto top-50 position-absolute  d-block  " >
        <h1 className="w-25  ms-5 text-left bg-white animate__animated animate__fadeInDown ">  THE RISE OF DOWN</h1>
        <p className=" ms-50 w-75 text-left bg-light animate__animated animate__fadeInUp" >The UK’s fastest AI supercomputer, Dawn, is
            supporting ambitious goals in clean energy, personalised<br/>
            medicine and climate.<span className="text-danger"> Take a look at how Dawn is being used.</span></p>
    </div>



</div>

    </div>
<div className="row w-100 d-block d-lg-none  mx-auto  position-relative  d-block  men " >
    <h1 className="w-100 ms-5 text-center animate__animated animate__fadeInDown">  THE RISE OF DOWN</h1>
    <p className=" ms-5 w-75 text-center animate__animated animate__fadeInUp" >The UK’s fastest AI supercomputer, Dawn, is
        supporting ambitious goals in clean energy, personalised<br/>
        medicine and climate.<span className="text-danger"> Take a look at how Dawn is being used.</span></p>
</div>
        <div className="row-fluid w-100 mx-auto  d-lg-flex rounded-5 ">
            <div className="col rounded-5 mt-5  bg-warning d-lg-flex animate__animated animate__fadeInDown" >
                <p className="ms-5">Undergraduate</p>
                <p className="d-flex mt-3"><button className="btn-fluid btnshop btn-primary"> Learn More</button><button className="btnshop">Find Your Course</button></p>
            </div>
            <div className="col mt-5 rounded-5 bg-primary  d-lg-flex animate__animated animate__fadeInUp" >
                <p className="ms-5">graduate</p>
                <p className="d-flex mt-3"><button className="btnshop"> Learn More</button><button className="btnshop">Find Your Course</button></p>
            </div>
        </div>
        <div className="col  mx-auto " >
            <iframe className="  w-100   mx-auto  mt-5" height="600"
                src="https://www.youtube.com/embed/gm2midoq-KQ?si=j4hVWPqR-SR2qZW_" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>

        </div>
        <div className="row-fluid mt-5   bg-primary d-flex"
            >
        </div>
    
    <div className="container-fluid d-flex w-100 mb-5  position-relative" >
        <div className="row-fluid w-100 bg-primary mx-auto time"  >
            <div className="col w-100 e">
                <div className="text-center "><button   className="text-center btnshop">submit</button></div>
                  <div className="text-center" ><img className="img-fluid w-100" src="https://images.pexels.com/photos/208684/pexels-photo-208684.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset=""/>
                </div>
            </div>
            <div className="col w-100 e">
                <div className="text-center "><button   className="text-center btnshop">submit</button></div>
                  <div className="text-center" ><img className="img-fluid w-100" src="https://images.pexels.com/photos/1590190/pexels-photo-1590190.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset=""/>
                </div>
            </div>
            <div className="col w-100 e">
                <div className="text-center "><button   className="text-center btnshop">submit</button></div>
                  <div className="text-center" ><img className="img-fluid w-100" src="https://images.pexels.com/photos/681347/pexels-photo-681347.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset=""/>
                </div>
            </div>
            <div className="col w-100 e">
                <div className="text-center "><button   className="text-center btnshop">submit</button></div>
                  <div className="text-center" ><img className="img-fluid w-100" src="https://images.pexels.com/photos/117843/pexels-photo-117843.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset=""/>
                </div>
            </div>
            <div className="col w-100 e" >
                <div className="text-center "><button   className="text-center btnshop">submit</button></div>
                <div className="text-center" ><img className="img-fluid w-100" src="https://images.pexels.com/photos/105238/pexels-photo-105238.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset=""/>
                    </div>

            </div>
            <div className="col w-100 e">
                <div className="text-center "><button   className="text-center btnshop">submit</button></div>
                <div className="text-center" ><img className="img-fluid w-100" src="https://images.pexels.com/photos/297303/pexels-photo-297303.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset=""/>
                </div>
                

            </div>
        </div>
    </div>
    
    <div className="container-fluid d-flex w-100 mb-5 position-relative" >
        <div className="row-fluid w-100 bg-primary mx-auto time"  >
            <div className="col w-100 e">
                <div className="text-center "><button   className="text-center btnshop">submit</button></div>
                  <div className="text-center" ><img className="img-fluid w-100" src="https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset=""/>
                </div>
            </div>
            <div className="col w-100 e">
                <div className="text-center "><button   className="text-center btnshop">submit</button></div>
                  <div className="text-center" ><img className="img-fluid w-100" src="https://images.pexels.com/photos/808201/pexels-photo-808201.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset=""/>
                </div>
            </div>
            <div className="col w-100 e">
                <div className="text-center "><button   className="text-center btnshop">submit</button></div>
                  <div className="text-center" ><img className="img-fluid w-100" src="https://images.pexels.com/photos/808201/pexels-photo-808201.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset=""/>
                </div>
            </div>
            <div className="col w-100 e">
                <div className="text-center "><button   className="text-center btnshop">submit</button></div>
                  <div className="text-center" ><img className="img-fluid w-100" src="https://images.pexels.com/photos/214573/pexels-photo-214573.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset=""/>
                </div>
            </div>
            <div className="col w-100 e" >
                <div className="text-center "><button   className="text-center btnshop">submit</button></div>
                <div className="text-center" ><img className="img-fluid w-100" src="https://images.pexels.com/photos/931911/pexels-photo-931911.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset=""/>
                    </div>

            </div>
            <div className="col w-100 e">
                <div className="text-center "><button   className="text-center btnshop">submit</button></div>
                <div className="text-center" ><img className="img-fluid w-100" src="https://images.pexels.com/photos/7653/pexels-photo.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset=""/>
                </div>
                

            </div>
        </div>
    </div>

    <div className="container-fluid mt-5 w-100  position-relative  ">
        <h1 className="mt-5">News</h1>
        <p className="mt-5">Updates from across the University</p>

        <div className="box1 d-flex">
            <div className="chld1">
                <img style={{height:'100vh'}} src="https://images.pexels.com/photos/216216/pexels-photo-216216.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid w-100" alt="" srcset=""/>
                <Link href="/" className="fs-5">
                    News- <small className="text-muted">Vice Cancellor Visit North-West</small>
                </Link>
                <p className="w-100">Vice-Chancellor Professor Deborah Prentice is visiting the North West of England this
                    week to encourage more applications from the region</p>
            </div>

            <div className="chld1">
                <img style={{height:'100vh'}} src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid w-100" alt="" srcset=""/>
                <Link href="/" className="fs-5">
                    News- <small className="text-muted">Cambridge new capsule....</small>
                </Link>
                <p className="w-100">A new test to help diagnose a condition that can lead to oesophageal cancer – developed
                    by Cambridge researchers and trialled by the NHS – has reduced the need for invasive endoscopy in
                    thousands of low-risk patients.</p>
            </div>
            <div className="chld1">
                <img style={{height:'100vh'}} src="https://images.pexels.com/photos/210364/pexels-photo-210364.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid w-100" alt="" srcset=""/>
                <Link href="/" className="fs-5">
                    News- <small className="text-muted">Poems underground on the cambridge</small>
                </Link>
                <p className="w-100">Poems on the Underground archive has delighted millions of commuters, tourists and
                    Londoners since 1986. The donated archive of poetry arrives at its new home at the University
                    Library.</p>
                <button className="float-end me-5 btnshop">see more news</button>
            </div>
        </div>
    </div>
    <div className="container-fluid mt-5 w-100">

        <h1 className="mt-5">News</h1>
        <p className="mt-5">Updates from across the University</p>

        <div className="box1 d-flex">
            <div className="chld1">
                <img style={{height:'100vh'}} src="https://images.pexels.com/photos/276259/pexels-photo-276259.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid w-100" alt="" srcset=""/>
                <Link href="/" className="fs-5">
                    News- <small className="text-muted">Vice Cancellor Visit North-West</small>
                </Link>
                <p className="w-100">The legendary Cambridge vs Oxford Varsity Rugby Matches will be taking place at
                    Saracens StoneX Stadium. Secure your tickets to witness the exciting action and fierce competition
                    of the 141st men’s and 36th matches.</p>
            </div>

            <div className="chld1">
                <img style={{height:'100vh'}} src="https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid w-100" alt="" srcset=""/>
                <Link but className="fs-5">
                News- <small className="text-muted">Varsity Rugby Matches - Saturday 2 March</small>
                </Link>
                <p className="w-100">This year’s Darwin Lecture series takes the pretty big topic of revolution as its
                    theme. To some revolutions are dangerous, fearsome and worrying … to others they’re exciting and
                    provide an opportunity to change society for the better.</p>
            </div>
            <div className="chld1">
                <img style={{height:'100vh'}} src="https://images.pexels.com/photos/276272/pexels-photo-276272.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid w-100" alt="" srcset=""/>
                <Link href="/" className="fs-5">
                News- <small className="text-muted">Poems underground on the cambridge</small>
                </Link>
                <p className="w-100">New types of cancer treatment – which use the body’s immune system to fight the disease
                    and are “kinder” to patients than chemotherapy ­– will feature at this year’s Cambridge Festival.
                </p>
                <button className="float-end me-5 btnshop">see more event</button>
            </div>
        </div>
    </div>
<div className="container-fluid w-100 position-relative h-100 mb-5 " >
    <div className="row jj d-flex h-100 w-100 mx-auto flex-direction:row"
       >
        <div className="d-block  d-md-flex w-100 p-1 bg-primary" style={{height:'100vh', width:'100vh'}}>

            <span > <iframe style={{height:'100vh'}} className="col w-100 " src="https://www.youtube.com/embed/7u1pz8HVtCY?si=0aLQCyw6kl8Qe7el"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <p className="col w-100">Have you chosen your A-levels yet? Your subjects don't define who you are, but the
                    passion that you have for your subject does. Here's some advice from Cambridge students Amenie and
                    Denzel that worked for them before they applied. <a
                        href="https://www.youtube.com/user/CambridgeUniversity"><i
                            className="fa-brands fa-youtube"></i>youtube</a></p>
            </span>
            <div className="d-flex w-100">
                <span>
                    <img src="https://images.pexels.com/photos/1424239/pexels-photo-1424239.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid w-100 d-none d-md-block  " style={{height:'100vh'}} height="" width=""  alt="" srcset=""/>
                    <p>Nature and architectural beauty intertwine at Emmanuel College. Follow us on Instagram for
                        snapshots of our people and places. <Link href="https://www.instagram.com/cambridgeuniversity/"><i
                                className="fa-brands fa-instagram"></i>instagram</Link></p>
                </span>
            </div>
        </div></div></div>
        <div className="container-fluid w-100	 bg-light position-relative mt-5">
            <h1 className="mt-5">Follow us</h1>
            <p  className="display-1" ><i className="fa-brands fa-youtube"></i><i
                    className="fa-brands fa-instagram"></i><i className="fa-brands fa-facebook"></i><i
                    className="fa-brands fa-twitter"></i><i className="fa-brands fa-linkedin"></i><i
                    className="fa-brands fa-tiktok"></i></p>
        </div>

    
    <div className="container-fluid w-100 bg-dark text-white">
        <div className="row d-flex">
            <div className="col">
                <ul className="list-style:muted">
                    <h1 ><Link href="/"><img src="https://images.pexels.com/photos/1855349/pexels-photo-1855349.jpeg?auto=compress&cs=tinysrgb&w=600" className="rounded-5" style={{height:'10vh',width:'10vh'}} alt=""
                                srcset=""/></Link></h1>
                    <li> © 2024 University of Cambridge</li>
                    <li>Contact the University</li>
                    <li>Accessibility statement</li>
                    <li>Freedom of information</li>
                    <li>Privacy policy and cookies</li>
                    <li>Statement on Modern Slavery</li>
                    <li>Terms and conditions</li>
                    <li>University A-Z</li>
                </ul>
            </div>
            <div className="col">

                Undergraduate
                Postgraduate
                Continuing education
                Executive and professional education
                Courses in education
            </div>
            <div className="col">
                How the University and Colleges work
                Give to Cambridge
                Jobs
                Maps
                Visiting the University
                Cambridge University Press & Assessment
            </div>
            <div className="col">
                Research news
                About research at Cambridge
                Public engagement
                Spotlight on...
            </div>

        </div>
    </div>
			

		</>

);
};

export default Introduction;