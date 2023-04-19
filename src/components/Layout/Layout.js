import Nav from "./Nav/Nav";
import "./Layout.css";
import Logo from "../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
export default function Layout({children}) {
  return (
    <div className="Layout">
      <header>
        <Logo/>
        <Nav/>
        <CartLink/>
        <Auth/>
      </header>
      <aside>
        <CategoryList/>
      </aside>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
}
