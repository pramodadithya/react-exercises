import PizzaList from "../pizza-list/PizzaList";
import "./Menu.css";

function Menu({ menuitems = [] }) {
  const number = menuitems.length;
  return (
    <main className="menu">
      <header className="menu-header">
        <h2 className="menu-header-title">Our Menu</h2>
        <p className="menu-header-description">
          Authentic Italian Cuisine. <span className="menu-size">{number}</span>{" "}
          Creative dishes to choose from. All from our store oven, all organic,
          all delicious.
        </p>
      </header>
      <PizzaList pizzas={menuitems} />
    </main>
  );
}

export default Menu;
