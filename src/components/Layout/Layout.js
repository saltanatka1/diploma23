import Nav from "./Nav/Nav";
import "./Layout.css";
import Logo from "../Logo/Logo";
export default function Layout({children}) {
  return (
    <div className="Layout">
      <header>
        <Nav/>
        <Logo/>
      </header>
      <aside>
        <nav>NAV CATEGORIES</nav>
      </aside>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
