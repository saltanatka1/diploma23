import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./FooterDisplay.css";

function FooterDisplay() {
  return (
    <div className="FooterDisplay">
      <Logo />
      <div className="menu">
        <h3>Menu SAIMA</h3>
        <Nav className="nav" />
      </div>
      <div className="more">
        <h3>More from SAIMA</h3>
      </div>
      <div className="contacts">
        <h3>Contacts</h3>
      </div>
    </div>
  );
}

export default FooterDisplay;
