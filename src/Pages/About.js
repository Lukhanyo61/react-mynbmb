import React from "react";
 
const About = () => {
    return (
        <div>
             
<nav class="navbar navbar-expand-lg navbar-default bg-default">
    
    <div class="container-fluid">
     
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
  
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
        <a class="navbar-brand mt-2 mt-lg-0" href="#">
          <img
          class="nav-logo"
            src="logo-pink.png"
            height="75"
            alt="MDB Logo"
            loading="lazy"
          />
        </a>
      
        <ul style={{marginLeft: "35%;"}} class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a style={{color: "crimson;"}} class="nav-link " href="about.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="beneficiaries.html">Beneficiaries</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
         
        </ul>
       
      </div>
     
  
      <div class="d-flex align-items-center">
    
       
  
       
   
        <div class="dropdown">
          <a
            class="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              style={{marginRight: "20px;"}}
              src="https://zamfoundation.co.za/wp-content/uploads/2021/04/image-removebg-preview-2.jpg"
              class="rounded-circle"
              height="45"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <a class="dropdown-item" href="#">My profile</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Settings</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
  
    </div>
    
  </nav>



 

        </div>
    );
};
 
export default About;