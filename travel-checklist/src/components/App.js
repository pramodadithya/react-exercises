import { useState } from "react";
import "./App.css";
import AddItemForm from "./add-item-form/AddItemForm";
import Header from "./header/Header";
import PackageList from "./package-list/PackageList";
import Footer from "./footer/Footer";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleRemveItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handlePackedToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : { ...item }
      )
    );
  }

  function handleClearList() {
    setItems([]);
  }

  return (
    <main className="app">
      <Header />
      <AddItemForm onAddItem={handleAddItem} />
      <PackageList
        packagelist={items}
        onRemove={handleRemveItem}
        onPackedToggle={handlePackedToggle}
        onClear={handleClearList}
      />
      <Footer packagelist={items} />
    </main>
  );
}

export default App;
