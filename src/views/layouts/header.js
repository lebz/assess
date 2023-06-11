import React from "react";
import logo from './../../assets/images/logo.svg';
import './../../assets/styles/style.css';

function Banner() {
  return (
    <div className="app">
      <header className="headerFooterContainer">
        <div className="headerFooterrCol1">
            <a href="/">
              <img
                  className='logo'
                  src={logo}
                  alt="DVT logo" />
            </a>
        </div>
        <div className="headerFooterCol2">
        <ul>
                <li>Home</li>
                <li><a href="/products">Products</a></li>
                <li><a href="/cart">Cart</a></li>
            </ul>
        </div>
      </header>
    </div>
  );
}

export default Banner;
