import "./App.css";
import Header from "./header/Header";
import Main from "./menu/Menu";
import pizzas from "../data";

function App() {
  return (
    <div className="container">
      <Header />
      <Main menuitems={pizzas} />
      <footer>FOOTER COMPONENT</footer>
    </div>
  );
}

export default App;
