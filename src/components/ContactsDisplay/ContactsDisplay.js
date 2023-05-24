
import "./ContactsDisplay.css";

export default function ContactsDisplay() {
  return (
    <div className="ContactsDisplay">
      <div className="container">
        <div className="content">
          <div className="contact">
            <h1>Contact Us</h1>
            <p>
              A Contact Us page is essential for your site to engage with
              visitors and customers. Check out these helpful tips and contact
              us page examples.
            </p>
            <a href="tel:+996708813744" className="num">+996708813744</a>
            <br/>
            <a href="gmail:egizbaevasaltanat05@gmail.com" className="num">
              egizbaevasaltanat05@gmail.com
            </a>
          </div>
          <div className="image-contact">
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/147/279/original/young-man-and-woman-with-headphones-microphone-and-computer-customer-service-support-or-call-center-concept-free-vector.jpg"
              alt="contact"
            />
          </div>
        </div>
        <div className="content location">
          <h1>Our location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5883.727000129256!2d78.4082362!3d42.4944545!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1684438410463!5m2!1sru!2skg"
            className="map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
