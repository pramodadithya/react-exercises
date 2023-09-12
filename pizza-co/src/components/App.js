import "./App.css";
import Header from "./header/Header";
import Main from "./menu/Menu";
import pizzas from "../data";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Main menuitems={pizzas} />
      <Footer />
    </div>
  );
}

export default App;
