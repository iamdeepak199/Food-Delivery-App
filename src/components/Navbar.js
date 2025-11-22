import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="https://chatgpt.com/c/6920c9c6-3f68-8322-a14f-37d1cfb5b4e9" className="brand">
          <img src="/images/logo.png" alt="logo" className="logo" />
          Navbar
        </a>

        <form className="search-box">
          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}
