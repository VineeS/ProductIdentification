import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark ">
      <div className = "logo">
            
        </div>
        <div class="container">
          <Link class="navbar-brand" to="/">
          <h4>Cachet</h4>
          </Link>
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/AddProduct" ? "active" : ""
                    }`}
              >
               <Link class="nav-link" to="/AddProduct">
                Add Product
              </Link>
            </li>

            <li
          class={`nav-item  ${
            props.location.pathname === "/ProductHistory" ? "active" : ""
              }`}
        >
         <Link class="nav-link" to="/ProductHistory">
          Product History
        </Link>
      </li>


      <li
         class={`nav-item  ${
           props.location.pathname === "/TransferProduct" ? "active" : ""
             }`}
       >
        <Link class="nav-link" to="/TransferProduct">
        Transfer Product
       </Link>
     </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);