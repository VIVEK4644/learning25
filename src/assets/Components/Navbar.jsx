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
        <Link class="nav-link" to="/formdemo1">formdemo1
        </Link>
      </li>   
      <li class="nav-item active">
        {/* <a class="nav-link" href="/netflixhome">Home  */}
        <Link class="nav-link" to="/formdemo2">formdemo2
        </Link>
      </li>  
      {/* <li>
        <Link className='nav-link' to="/formdemoh1">formdemoh1</Link>  
      </li> 
      <li>
        <Link className='nav-link' to="/formdemoh2">formdemeh2</Link>
      </li>
      <li>
        <Link className='nav-link' to="/formdemoh3">fromdemoh3</Link> 
      </li> */}
      <li>
        <Link className='nav-link' to="/formdemoh4">FormDemoh4</Link>
      </li>
      <li>
        <Link className='nav-link' to="/formdemo3">formdemo3</Link>
      </li>
      <li>
        <Link className='nav-link' to="formdemo4">formdemo4</Link>
      </li>
      <li>
        <Link className='nav-link' to="dynamicform">DynamicForm</Link>
      </li>
      <li>
        <Link className='nav-link' to="Expenss">Expenss</Link>
      </li>
      <li>
        <Link className='nav-link' to="Findbomb">Findbomb</Link>
      </li>
      
    </ul>
  </div>
</nav>
  )
}

export default Navbar   