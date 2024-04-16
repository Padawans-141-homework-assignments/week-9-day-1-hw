import React from 'react'

export default function NavBar() {
  return (
    <>
    <nav id='navbar' class="navbar navbar-expand-lg bg-body-tertiary">
        <div id='nav' class="container-fluid">
            <img src="src/temple.png" alt="Coding Temple" width="50" height="60"/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a id='nav-text' class="nav-link active" aria-current="page" href="#">Coding Temple</a>
                </li>

                <li class="nav-item">
                <a id='nav-text' class="nav-link" href="https://www.codingtemple.com/">Main Website</a>
                </li>
                
                <li class="nav-item">
                <a id='nav-text' class="nav-link" href="https://www.codingtemple.com/apply-now/">Apply Now</a>
                </li>

                <li class="nav-item">
                <a id='nav-text' class="nav-link" href="https://www.linkedin.com/school/coding-temple/">LinkedIn</a>
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
