import React from 'react';



const Navbar = () => {
    return <nav>
        <div className = "logo">
            <i className = "fas fa-mountain"></i>
            <h4>Cachet</h4>
        </div>
        <ul className = "navlinks">
            <li className="link"><a href="Home">Home</a></li>
            <li className="link"><a href="About.html">About</a></li>
            <li className="link"><a href="AddProduct">Add Product</a></li>
            <li className="link"><a href="ViewProduct">View Product</a></li>
        </ul>

    </nav>;
}

export default Navbar;