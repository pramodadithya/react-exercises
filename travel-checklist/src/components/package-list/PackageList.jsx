import { useState } from "react";
import "./PackageList.css";
import PackageItem from "./package-item/PackageItem";

function PackageList({ packagelist, onRemove, onPackedToggle, onClear }) {
  const [sortOrder, setSortOrder] = useState("insertion");

  const sortedPackageList = packagelist.slice().sort((a, b) => {
    if (sortOrder === "packed") {
      return a.packed - b.packed;
    } else if (sortOrder === "ascending") {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    } else {
      return 1;
    }
  });

  return (
    <section className="packagelist-section">
      <ul>
        {sortedPackageList.map((item) => (
          <PackageItem
            key={item.id}
            {...item}
            onRemove={() => {
              onRemove(item.id);
            }}
            onPackedToggle={() => {
              onPackedToggle(item.id);
            }}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          className="actions-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="insertion">Insertion Order</option>
          <option value="packed">Packed Status</option>
          <option value="ascending">Ascending By Name</option>
        </select>
        <button className="actions-button" onClick={onClear}>
          Clear List
        </button>
      </div>
    </section>
  );
}

export default PackageList;
