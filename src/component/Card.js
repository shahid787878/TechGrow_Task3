// import React from 'react'
// const Card = ({data}) => {
//   return (
//     <div>
//       <div className="container">
//         {data.map(({cuItem,index})=>{
//             return(
//                 <div className='card'>
//                     <img  alt="prob" />
//                     <div className="cardContent">
//                         <a className='Link-item'></a>
//                         <p></p>
//                     </div>
//                 </div>
//             )
//         })}
//       </div>
//     </div>
//   )
// }

// export default Card
import React from 'react'

const Card = ({data}) => {
console.log(data);
const readMore =(url) =>{
    window.open(url)
}
    return (
    <div className='cardContainer '>
    {data.map((curItem,index)=>{
    if(!curItem.urlToImage){
        return null
    }
    else{
        return(
            <div className="card1 bg-dark " >
                <img alt='err' className='img-fluid' src={curItem.urlToImage} />
                <div className="content">
                    <a href="/" onClick={()=>window.open(curItem.url)}>{curItem.title}{readMore}</a>
                    <p>{curItem.description}</p>
                    <button className='btn btn-primary' onClick={()=>window.open(curItem.url)}>ReadMore</button>
                </div>
            </div>
        )
    }
        
    })}
    </div>
  )
}

export default Card
