import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <h2 className="logo">OUTIS SFM</h2>

      <ul className="nav-links">
        <li><a href="#">About Me</a></li>
        <li><a href="#">Location</a></li>
        <li><a href="#">Connection</a></li>
      </ul>
      <div
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</div>
      <button className="login-btn">Send</button>
    </nav>
  );
}

export default Navbar;