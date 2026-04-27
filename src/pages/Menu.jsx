import { useState } from "react";
import menu from "../data/menu";
import Container from "../components/layout/Container";
import MenuCategory from "../components/menu/MenuCategory";
import MenuList from "../components/menu/MenuList";
import {Link} from "react-router-dom";

function Menu() {
  const categories = ["All", ...new Set(menu.map((i) => i.category))];
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? menu
      : menu.filter((item) => item.category === active);

  return (<>
    <section className="menu-page">
      
      <Container>
        <h1 className="section-title">Our Menu</h1>

        <MenuCategory
          categories={categories}
          active={active}
          setActive={setActive}
        />

        <MenuList items={filtered} />
      </Container>
    </section>
    </>
  );
}

export default Menu;