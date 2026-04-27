import Container from "../layout/Container";
import menu from "../../data/menu";
import Card from "../common/Card";

function FeaturedDishes() {
  return (
    <section className="featured">
      <Container>
        <h2 className="section-title">Popular Dishes</h2>

        <div className="card-grid">
          {menu.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedDishes;