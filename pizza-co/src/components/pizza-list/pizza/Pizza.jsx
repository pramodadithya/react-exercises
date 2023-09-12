import "./Pizza.css";

function Pizza({ name, imageurl, ingredients, price, issoldout }) {
  return (
    <li className={issoldout ? "pizza sold-out" : "pizza"}>
      <img src={imageurl} alt={name} />
      <div className="pizza-info">
        <h3 className="pizza-info-name">{name}</h3>
        <p className="pizza-info-ingredients">{ingredients}</p>
        <p className="pizza-info-price">{price}</p>
      </div>
    </li>
  );
}

export default Pizza;
