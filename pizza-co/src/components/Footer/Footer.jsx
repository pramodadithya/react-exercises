import "./Footer.css";
function Footer() {
  const openHour = 11;
  const closeHour = 22;
  const currentHour = new Date().getHours();
  const isOpen = openHour < currentHour && currentHour < closeHour;
  const message = isOpen
    ? `We're open until ${closeHour}:00. Come visit us or order online`
    : `We're currently closed. please come back between ${openHour}:00 and ${closeHour}:00`;

  return (
    <footer className="footer">
      <span className="message">{message}</span>
      {isOpen && <button className="footer-btn">Order online</button>}
    </footer>
  );
}

export default Footer;
