import React from "react";
import "./Movies.css";
function Navbar(){
    return <div id="myNavbar">
        <nav class="navbar navbar-expand-lg bg-black">
  <div class="container-fluid">
    <img id="MyImage" src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress"/>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">TV Shows</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">News and Popular</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">My List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Browse By Language</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
}
export default Navbar;