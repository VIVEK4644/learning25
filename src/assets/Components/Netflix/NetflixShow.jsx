import React from 'react'
import { Link } from 'react-router'

function NetflixShow() {
    var show =[
    {
      id:101,
      name:"Money Heist",
      rating:9.0,
      imageUrl:"https://m.media-amazon.com/images/M/MV5BZjkxZWJiNTUtYjQwYS00MTBlLTgwODQtM2FkNWMyMjMwOGZiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id:102,
      name:"Breaking Bad",
      rating:10.0,
      imageUrl:"https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
      id:103,
      name:"Squid Game",
      rating:8.0,
      imageUrl:"https://pyxis.nymag.com/v1/imgs/392/393/de2bb6f1dc1f2aeb3bcdc0bbc708e21918-robot-doll-squid-game-chat-room-silo.rhorizontal.w700.jpg"
    }
  ]

  return (
    <div>
        <h1>NetflixShow</h1>
        <div className='container'>
            <div className='row'>
                {   
                    show.map((user)=>{
                        return <div className='card' style={{height:"30vh" ,textAlign:"center" }}>
                            <h1>{user.name}</h1>
                            <h3>{user.rating}</h3>
                            <img src={user.imageUrl} height="100px" width="100px" alt="no image" />
                            <Link to={`/watch/${user.name}`} className='btn btn-danger'>Watching</Link>
                        </div>
                    })
                    
                }   
            </div>

        </div>

    </div>
  )
}

export default NetflixShow


        //   <div className='card' style={{ height: "30vh", textAlign: "center" }} >
        //       <h1>Title : Tehran</h1>
        //       <h2>Rating:4.6</h2>
        //       <img
        //       src="https://images.ottplay.com/images/media/gallery/750x1125poster-7-1755110521.jpg"
        //       style={{ height: "100px", width: "100px" }}
        //     ></img>
        //     <Link to="/watch/tehran" className='btn btn-warning'>Watching</Link>
        //   </div>