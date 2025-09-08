import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        {/* <a class="nav-link" href="/netflixhome">Home */}
        <Link class="nav-link" to="/netflixhome">Home 
        </Link>
      </li>   
      <li class="nav-item active">
        {/* <a class="nav-link" href="/netflixhome">Home  */}
        <Link class="nav-link" to="/netflixmovies">Movies 
        </Link>
      </li>    
      <li class="nav-item active">
        {/* <a class="nav-link" href="/netflixhome">Home  */}
        <Link class="nav-link" to="/">Student
        </Link>
      </li>  
      <li class="nav-item active">
        {/* <a class="nav-link" href="/netflixhome">Home  */}
        <Link class="nav-link" to="/netflixshow">Show
        </Link>
      </li>    
      <li class="nav-item active">
        {/* <a class="nav-link" href="/netflixhome">Home  */}
        <Link class="nav-link" to="/inputdemo1">input
        </Link>
      </li>   
    </ul>
  </div>
</nav>
  )
}

export default Navbar   