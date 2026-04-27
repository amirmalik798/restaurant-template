import Card from "../common/Card";

function MenuList({ items }) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MenuList;