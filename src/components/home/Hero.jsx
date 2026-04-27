import Container from "../layout/Container";
import { Link } from 'react-router-dom';
import phoneNumber from "../../data/phone";
import { useCart } from "../../context/CartContext";

function Hero() {

  const { cart } = useCart();

  return (
    <section className="hero">
      <Container>
        <div className="hero-content">
          
          {/* LEFT */}
          <div className="hero-text">
            <h1>Delicious Food in Kigali</h1>
            <p>
              Fresh meals, fast service, and unforgettable taste. 
              Order now or visit us today.
            </p>
            <h4 class='x'>Our website allows to submit orders to us directly through Whatsapp.</h4>
            <div className="hero-buttons">
              {cart.length > 0 && <Link to='/cart' className="btn-primary">
                Review Order
              </Link>}

              <Link to='/menu' className="btn-secondary">
                View Menu
              </Link>

              <a href={`tel:${phoneNumber}`} className="btn-secondary">
                Call Now
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-image">
            <img src="/images/hero.jpg" alt="food" />
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;