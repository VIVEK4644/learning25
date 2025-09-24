import React from 'react'
import { Link } from 'react-router'
import { MyButton } from '../common/MyButton'

function NetflixMovies() {

  const movies =()=>{
    alert("Movies....")
  }
  return (
    <div style={{textAlign:'center'}}>
      <h1>Netflix Movie</h1>
       <div className='container'>
        <div className='row'>
          <div className='card' style={{ height: "30vh", textAlign: "center" }} >
              <h1>Title : Tehran</h1>
              <h2>Rating:4.6</h2>
              <img
              src="https://images.ottplay.com/images/media/gallery/750x1125poster-7-1755110521.jpg"
              style={{ height: "100px", width: "100px" }}
            ></img>
            <Link to="/watch/tehran" className='btn btn-warning'>Watching</Link>
          </div>
          <div className='card' style={{ height: "30vh", textAlign: "center" }} >
              <h1>Title : Vash</h1>
              <h2>Rating:4.6</h2>
              <img
              src="https://images.ottplay.com/images/media/gallery/750x1125poster-7-1755110521.jpg"
              style={{ height: "100px", width: "100px" }}
            ></img>
            <Link to="/watch/vash" className='btn btn-warning'>Watching</Link>
          </div>
          <div className='card' style={{ height: "30vh", textAlign: "center" }} >
              <h1>Title : Kgf</h1>
              <h2>Rating:4.6</h2>
              <img
              src="https://images.ottplay.com/images/media/gallery/750x1125poster-7-1755110521.jpg"
              style={{ height: "100px", width: "100px" }}
            ></img>
            <Link to="/watch/kgf" className='btn btn-warning'>Watching</Link>
          </div>
        </div>
       </div><br /><br />
       <MyButton funcName={movies} name="Movies"></MyButton>
    </div>
  )
}

export default NetflixMovies