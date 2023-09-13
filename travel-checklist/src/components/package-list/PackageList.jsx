import "./PackageList.css";
import PackageItem from "./package-item/PackageItem";

function PackageList({ packagelist, onRemove, onPackedToggle }) {
  return (
    <section className="packagelist-section">
      <ul>
        {packagelist.map((item) => (
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
    </section>
  );
}

export default PackageList;
