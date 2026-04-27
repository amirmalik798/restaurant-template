import Container from "../components/layout/Container";
import phoneNumber from "../data/phone";
import whatsappNumber from "../data/whatsapp";

function Contact() {
  return (
    <section className="contact-page">
      <Container>
        <h1 className="section-title">Contact Us</h1>

        <div className="contact-content">
  
  <div className="contact-info">
    <h3>Kigali Bites</h3>
    <p>📍 KG 123 St, Kigali</p>
    <p>🕒 9:00 AM – 10:00 PM</p>

    <div className="contact-actions">
      <a href={`tel:${phoneNumber}`} className="btn-primary full">
        Call Now
      </a>

      <a
        href={`https://wa.me/${whatsappNumber}`}
        className="btn-secondary full"
        target="_blank"
      >
        WhatsApp
      </a>
    </div>
  </div>

  <div className="contact-map">
    <iframe
      title="map"
      src="https://maps.google.com/maps?q=Kigali&t=&z=13&ie=UTF8&iwloc=&output=embed"
      loading="lazy"
    ></iframe>
  </div>

</div>
      </Container>
    </section>
  );
}

export default Contact;