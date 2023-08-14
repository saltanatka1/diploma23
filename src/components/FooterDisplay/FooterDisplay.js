import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./FooterDisplay.css";

function FooterDisplay() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className="FooterDisplay">
      <div className="container">
        <Logo />
        <div className="shop-name">
          <h3> Shop name</h3>
          <div className="content">
            {" "}
            <p>
              "Saima" is an online store specializing in ethno clothing. It
              offers a diverse range of culturally inspired garments, blending
              traditional aesthetics with contemporary designs. Explore Saima's
              collection for unique and stylish ethnic fashion choices
            </p>
          </div>
        </div>
        <div className="menu">
          <h3>Menu SAIMA</h3>
          <div className="content">
            {" "}
            <Nav className="nav" />
          </div>
        </div>
        <div className="contacts">
          <h3>Contacts</h3>
          <div className="content">
            {" "}
            <div className="contact-about">
              <p>
                <strong>Phone: </strong>
                <a href="tel:+996708813744" target="blank" className="con">
                    +996708813744
                </a>
              </p>
              <p>
                <strong>Email: </strong>
                <a href="gmail:egizbaevasaltanat05@gmail.com" target="blank" className="con">
                    egizbaevasaltanat05@gmail.com
                </a>
              </p>
            </div>
            <div className="social-network">
              <Link to="https://wa.me/qr/OP6ER6VEV7TIM1" target="blank">
                <img
                  src="https://www.google.com/search?sca_esv=556737795&sxsrf=AB5stBg_tgs-HC3_5Afs8aAo6QDMTw0udQ:1692013472756&q=whatsapp+%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0+svg&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwjrqP6vidyAAxUnFRAIHRIZB8sQ0pQJegQIDBAB&biw=1536&bih=715&dpr=1.25#imgrc=wHYI9GtORTXn-M"
                  alt="whatsapp icon"
                />
              </Link>
              <Link
                to="https://www.instagram.com/egizbaeva.saltanat_/"
                target="blank"
              >
                <img
                  src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Instagram-512.png"
                  alt="instagram-icon"
                />
              </Link>
              <Link to="https://telegram.org/dl" target="blank">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                  alt="telegram-icon"
                />
              </Link>
              <Link
                to="https://github.com/saltanatka1/diploma23"
                target="blank"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="git hub icon"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="GoUp">
          <Link href="#" onClick={scrollToTop}>
            <i class="fa-solid fa-arrow-up"></i>
            <img src="https://cdn4.iconfinder.com/data/icons/colorful-basic-arrows/515/arrow_up_circle_lightblue-512.png" alt="go up" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterDisplay;
