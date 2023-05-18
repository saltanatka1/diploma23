
import Nav from "../Nav/Nav";
import "./Drawer.css"
import Logo from "../Logo/Logo";

function Drawer({ open, toggle }) {
  const drawerClassNames = `Drawer ${open ? "open" : ""}`;
  return (
    <div className={drawerClassNames}>
      <div onClick={toggle} className="backdrop"></div>
      <div className="content">
        <Logo/>
        <Nav />
      </div>
    </div>
  );
}
export default Drawer;