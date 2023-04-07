import Nav from "./Nav/Nav";
import "./Layout.css";
import Logo from "../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
export default function Layout({children}) {
  return (
    <div className="Layout">
      <header>
        <Nav/>
        <Logo/>
      </header>
      <aside>
        <CategoryList/>
      </aside>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
}
