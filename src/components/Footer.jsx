import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line"></div>

      <p className="footer-quote">
        Some words are safer
        <br />
        when they stay between us.
      </p>

      <h3>— OUTIS SFM</h3>

      <a
        href="https://outisvoid21.com"
        className="footer-domain"
      >
        outisvoid21.com
      </a>
    </footer>
  );
}

export default Footer;