import { useState } from "react";
import "./AddItemForm.css";

function AddItemForm({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!quantity || !name) return;
    onAddItem({
      id: Date.now(),
      name,
      quantity,
      packed: false,
    });
    setQuantity(1);
    setName("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label className="add-form-label">
        What do you need for your 😍 trip?
      </label>
      <select
        className="add-form-qty-select"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i + 1} vlaue={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        className="add-form-item-input"
        type="text"
        placeholder="item..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="add-form-add-button">Add</button>
    </form>
  );
}

export default AddItemForm;
