import "./Footer.css";

function Footer({ packagelist }) {
  if (!packagelist || packagelist.length === 0) {
    return (
      <footer className="footer">
        Start adding some items to your packing list 🚀
      </footer>
    );
  }

  const numItems = packagelist.length;
  const numPackedItems = packagelist.reduce(
    (acc, item) => (item.packed ? acc + 1 : acc),
    0
  );

  if (numItems === numPackedItems) {
    return <footer className="footer">You are ready to go ✈️.</footer>;
  }

  const percentPacked = ((numPackedItems / numItems) * 100).toFixed(2);

  return (
    <footer className="footer">
      You have packed {numItems} items on your list and you already packed{" "}
      {numPackedItems}({percentPacked}%).
    </footer>
  );
}

export default Footer;
