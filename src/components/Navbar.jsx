import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ setSearch }) {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="brand">
          <img src="/images/logo.png" alt="logo" className="logo" />
          <span className="brand-signature">Uncle Peter</span>
        </Link>

 
        <div className="menu-links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/service">Service</Link>
          <Link to="/login">Login</Link>
         <nav>
      {/* Other navigation items */}
      <Link to="/login">
        <FaShoppingCart className="cart-icon" />
      </Link>
    </nav>
        </div>
        <form className="search-box">
          <input
            type="search"
            placeholder="Search for food..."
            aria-label="Search"  onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

      </div>
    </nav>
  );
}
