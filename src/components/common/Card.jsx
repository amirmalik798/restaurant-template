import { useCart } from "../../context/CartContext";

function Card({ item }) {
  const { cart, addToCart, getQty } = useCart();

  const quantityInCart = getQty(item.id);

  
  return (
    <div className="card">
      <img src={item.image} alt={item.name} />

      <div className="card-content">
        {quantityInCart > 0 ? <h3>({getQty(item.id)}) - {item.name}</h3> : <h3>{item.name}</h3>}
        <p>{item.price.toLocaleString("en-US") + " RWF"}</p>

        <button
          onClick={() => addToCart(item)}
          className="order-small-btn"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;