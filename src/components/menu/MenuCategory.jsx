function MenuCategory({ categories, active, setActive }) {
  return (
    <div className="menu-categories">
      {categories.map((cat) => (
        <button
          key={cat}
          className={active === cat ? "active" : ""}
          onClick={() => setActive(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default MenuCategory;