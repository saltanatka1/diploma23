import Nav from "../Nav/Nav";
import "./Layout.css";
import Logo from "../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import Footer from "../../pages/Footer";
import NavToggle from "../NavToggle/NavToggle";
import Drawer from "../Drawer/Drawer";
import { useState } from "react";
export default function Layout({children}) {
    const [drawerOpen, setDrawerOpen] = useState(false);
  
    function toggleDrawer() {
      setDrawerOpen(!drawerOpen);
    }
  return (
    <div className="Layout">
      <header>
        <Logo/>
        <Nav/>
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
        <CartLink/>
        <Auth/>
      </header>
      <aside>
        <CategoryList/>
      </aside>
      <main>{children}</main>
      <footer><Footer/></footer>
    </div>
  );
}
