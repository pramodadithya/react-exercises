import "./PackageItem.css";

function PackageItem({ name, quantity, packed, onRemove, onPackedToggle }) {
  return (
    <li className="item">
      <p className="item-content">
        <input type="checkbox" value={packed} onChange={onPackedToggle}></input>
        <span style={packed ? { textDecoration: "line-through" } : {}}>
          {quantity} {name}
        </span>
        <button className="remove-btn" onClick={onRemove}>
          ❌
        </button>
      </p>
    </li>
  );
}

export default PackageItem;
