import Nav from "./Nav/Nav";
import "./Layout.css";
export default function Layout({children}) {
  return (
    <div className="Layout">
      <header>
        <Nav/>
      </header>
      <aside>
        <nav>NAV CATEGORIES</nav>
      </aside>
      <main>{children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}
