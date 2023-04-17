import Nav from "./Nav/Nav";
import "./Layout.css";
import Logo from "../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";
export default function Layout({children}) {
  return (
    <div className="Layout">
      <header>
        <Logo/>
        <Nav/>
        <CartLink/>
      </header>
      <aside>
        <CategoryList/>
      </aside>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
}
