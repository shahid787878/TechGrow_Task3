
import React, { useEffect, useState } from 'react'
import Card from './Card'
const Newsapp = () => {
    const [search,setSearch]=useState("india")
    const[newsData,setNewsData]=useState(null)
        const API_KEY ="89cdd886b6e9424ea323ca26d9cba999";
  const getData=async()=>{
const response =await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
const jsonData=await response.json();
 console.log(jsonData.articles);
 setNewsData(jsonData.articles)
}
useEffect(()=>{
    getData()
}, );
const handleInput=(e)=>{
    console.log(e.target.value);
    setSearch(e.target.value)
}
const userInput=(event)=>{
    setSearch(event.target.value)
}
    return (
        <>
  <div id="carouselExampleFade" className=" carousel slide carousel-fade   " data-bs-ride="carousel">
                <div className="carousel-inner  w-100">
                  
                  <span className="carousel-item active mx-auto w-100 ">
                    <img data-fancybox="wk"
                      style={{height:'100vh'}}  src="https://c4.wallpaperflare.com/wallpaper/553/206/435/nature-landscape-trees-grass-wallpaper-preview.jpg"
                      alt="images not found" className="img-fluid crosel-img-size w-100 " />
                  </span>
                  <span className="carousel-item">
                    <img
                      style={{height:'100vh'}}  src="https://c4.wallpaperflare.com/wallpaper/919/575/783/nature-landscape-lake-mountains-wallpaper-preview.jpg"
                      alt="images not found" className="img-fluid crosel-img-size w-100" />
                  </span>
                  <span className="carousel-item">
                    <img
                      style={{height:'100vh'}}  src="https://c4.wallpaperflare.com/wallpaper/537/664/855/nature-water-mountains-trees-wallpaper-preview.jpg"
                      alt="images not found" className="img-fluid crosel-img-size w-100"
                      />
                  </span>
                  <span className="carousel-item">
                    <img
                      style={{height:'100vh'}}  src="https://c4.wallpaperflare.com/wallpaper/644/90/417/nature-landscape-fall-river-wallpaper-preview.jpg"
                      alt="images not found" className="img-fluid crosel-img-size w-100"
                      />
                  </span>
                  <span className="carousel-item">
                    <img
                      style={{height:'100vh'}}  src="https://c4.wallpaperflare.com/wallpaper/885/928/937/nature-landscape-trees-forest-wallpaper-preview.jpg"
                      alt="images not found" className="img-fluid crosel-img-size w-100"
                      />
                  </span>
                  <span className="carousel-item">
                    <img
                      style={{height:'100vh'}}  src="https://c4.wallpaperflare.com/wallpaper/263/511/692/nature-water-sea-beach-wallpaper-preview.jpg"
                      alt="images not found" className="img-fluid crosel-img-size w-100"
                      />
                  </span>
                  <span className="carousel-item">
                    <img
                      style={{height:'100vh'}}  src="https://c4.wallpaperflare.com/wallpaper/324/728/62/nature-landscape-rock-bridge-wallpaper-preview.jpg"
                      alt="images not found" className="img-fluid crosel-img-size w-100"
                     />
                  </span>
                  <span className="carousel-item">
                    <img 
                   style={{height:'100vh'}}    src="https://c1.wallpaperflare.com/preview/750/582/376/kyoto-autumn-autumnal-leaves-shirakawa.jpg"
                      alt="images not found" className="img-fluid crosel-img-size w-100 "
                     />
                  </span>
                  <span className="carousel-item">
                    <img
                      style={{height:'100vh'}}  src="https://c4.wallpaperflare.com/wallpaper/764/431/702/river-trees-forest-clouds-wallpaper-preview.jpg"
                      alt="images not found" className="img-fluid crosel-img-size w-100"
                     />
                  </span>
                  <span className="carousel-item">
                    <img
                      style={{height:'100vh'}}  src="https://c4.wallpaperflare.com/wallpaper/952/786/491/nature-landscape-forest-river-wallpaper-preview.jpg"
                      alt="images not found" className="img-fluid crosel-img-size w-100"
                     />
                  </span>
          </div>
          <ol className="carousel-indicators list-unstyled  mb-5 ">
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active "></li>
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="2"></li>
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="3"></li>
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="4"></li>
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="5"></li>
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="6"></li>
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="7"></li>
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="8"></li>
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="9"></li>
          </ol>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleFade"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next   " type="button" data-bs-target="#carouselExampleFade"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          
          </button>
          
        </div>
        <div className="container-fluid float-start position-relative  mx-auto w-100">
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
    {/* <div className='row-fluid w-100 d-flex card text-center justify-content-center bg-warning border   '>
        <div className="col d-flex  bg-light">
        {newsData?<Card data={newsData} />:null}{handleInput}{userInput}
    </div>
    
</div> */}

</>
  )
}

export default Newsapp
