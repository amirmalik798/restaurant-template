import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import { useCart } from "../../context/CartContext";
import phoneNumber from "../../data/phone";
import whatsappNumber from "../../data/whatsapp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="navbar">
      <Container>

        <div className="nav-content">

          {/* LOGO */}
          <Link className="logo" to="/">Kigali Bites</Link>

          {/* DESKTOP LINKS */}
          <div className="nav-links desktop">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart" className="cart-link">
            🛒
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>

            
          </div>

          {/* MOBILE CART + MENU */}
          <div className="mobile-icons">

            {/* CART ICON */}
            <Link to="/cart" className="cart-icon">
              🛒
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>

            {/* HAMBURGER */}
            <div
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </div>
          </div>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mobile-menu">

            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link>
            {cart.length > 0 && <Link to="/cart" onClick={() => setMenuOpen(false)}>
              Review Order
            </Link>}
            <a href={`tel:${phoneNumber}`}>Call Us</a>
            <a href={`https://wa.me/${whatsappNumber}`}>Chat on Whatspp</a>
          </div>
        )}

      </Container>
    </nav>
  );
}

export default Navbar;