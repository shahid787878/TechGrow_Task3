import React from 'react'

const About = () => {
  return (
    <div>
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
</div></div>
  )
}

export default About
