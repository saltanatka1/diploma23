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
                  src="https://pixlok.com/wp-content/uploads/2021/12/Whatsapp-Icon-SVG-pdmvddw.png"
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
