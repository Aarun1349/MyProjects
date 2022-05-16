import React from 'react'
import {Link} from "react-router-dom"
function Navigation() {
  return (
    <>
      <nav className="navbar blue darken-3">
        <div className="nav-wrapper blue darken-3">
          <Link to="#" className="brand-logo">
            Web Shop
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li><span className='' style={{"display":"flex","justifyContent":"space-between","float":"right","marginRight":"5re"}}>Cart Item : 0</span></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navigation;