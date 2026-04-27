import Container from "../components/layout/Container";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import whatsAppNumber from "../data/whatsapp";

function Cart() {
  const { cart, removeFromCart, updateQty } = useCart();

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [mode, setMode] = useState("Delivery");

  const phone = whatsAppNumber;
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalBill = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const formattedTotal = totalBill.toLocaleString("en-US") + " RWF";

  let totalMessage = cart
    .map((item) => `x${item.qty} - ${item.name} - ${item.qty * item.price} RWF`)
    .join("\n");
  totalMessage += `'\n\nTotal Bill: ${formattedTotal}\nOrder Type: ${mode}\n\nCustomer Details:\n\nName: ${name}\nContact #: ${contact}\nAddress: ${address}`;
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Hello, I want to order:\n" + totalMessage
  )}`;

  function handleSubmit(e) {
    e.preventDefault();
     window.open(whatsappUrl, "_blank");
  }
  return (
  <section className="cart-page">
    <Container>

      <h1 className="section-title">Your Order</h1>

      <div className="cart-layout">

        {/* LEFT: ITEMS */}
        <div className="cart-items">

          {cart.length === 0 ? (
            <p className="empty">Your cart is empty 🍽️</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-card">

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>{item.price.toLocaleString("en-US") + " RWF"}</p>
                </div>

                <div className="cart-actions">

                  <div className="qty">
                    <button onClick={() => {
                      if (item.qty === 1) removeFromCart(item.id)
                      else updateQty(item.id, item.qty - 1)}}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                  </div>

                  <button
                    className="remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))
          )}

        </div>

        {/* RIGHT: SUMMARY */}
        {cart.length > 0 && (
          <form className="cart-summary" onSubmit={handleSubmit}>
            <h2>Order Summary</h2>

            <p>Total Items: {cart.reduce((sum, i) => sum + i.qty, 0)}</p>
            <p>Total Bill: {formattedTotal}</p>
            <h3>Enter Your Details</h3>
            <label htmlFor="deliveryType">Delivery / Pickup</label>
            <select id="deliveryType" value={mode} onChange={(e) => setMode(e.target.value)}>
              <option value="Delivery">Delivery</option>
              <option value="Pickup">Pickup</option>
            </select>
            <input type='text' placeholder="Name" value={name} 
            onChange={(e) => setName(e.target.value)}required></input>
            <input type='text' placeholder='Contact #' value={contact}
            onChange={(e) => setContact(e.target.value)} required></input>
            <input type="text"  placeholder='Address' value={address}
            onChange={(e) => setAddress(e.target.value)}required></input>
            
            <button className="btn-primary" type='submit'>Send Order to Whatsapp</button>
          </form>
        )}

      </div>

    </Container>
  </section>
);
}

export default Cart;