import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    <nav id='navbar' class="navbar navbar-expand-lg bg-body-tertiary">
        <div id='nav' class="container-fluid">
          <Link to={'/'}><img src="src/temple.png" alt="Coding Temple" width="50" height="60"/></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to={'/signup'} id='nav-text' className='nav-space'>Sign Up</Link>
                </li>

                <li class="nav-item">
                  <Link to={'/signin'} id='nav-text' className='nav-space'>Sign In</Link>
                </li>
                
                <li class="nav-item">
                  <Link to={'/class'} id='nav-text' className='nav-space'>Pick Class</Link>
                </li>

                <li class="nav-item">
                  <Link to={'/alliance'} id='nav-text' className='nav-space'>Pick Alliance</Link>
                </li>

                <li class="nav-item">
                  <Link to={'/products'} id='nav-text' className='nav-space'>Products</Link>
                </li>

                <li class="nav-item">
                  <Link to={'/product'} id='nav-text' className='nav-space'>Find Product</Link>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Explore the temple" aria-label="Search"/>
                <button class="btn btn-dark" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
    </>
  )
}
