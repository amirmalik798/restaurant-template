import Container from "./Container";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">

          {/* Brand */}
          <div className="footer-section">
            <h3>Kigali Bites</h3>
            <p>Delicious food, fast service, unforgettable taste.</p>
          </div>

          {/* Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/menu">Menu</a>
            <a href="/contact">Contact</a>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📍 KG 123 St, Kigali</p>
            <p>📞 +2507XXXXXXXX</p>
            <p>🕒 9:00 AM – 10:00 PM</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Kigali Bites. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;