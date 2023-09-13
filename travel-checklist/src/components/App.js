import { useState } from "react";
import "./App.css";
import AddItemForm from "./add-item-form/AddItemForm";
import Header from "./header/Header";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <main className="app">
      <Header />
      <AddItemForm onAddItem={handleAddItem} />
    </main>
  );
}

export default App;
