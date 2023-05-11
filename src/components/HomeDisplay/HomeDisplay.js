import "./HomeDisplay.css";

function HomeDisplay() {
  return (
    <div className="HomeDisplay">
      <div className="container">
        <h1>SAIMA etno-shop</h1>
        <p>
          Welcome to SAIMA, your one-stop online destination for exquisite
          Kyrgyz-style clothing and decorations. Immerse yourself in the rich
          cultural heritage of Kyrgyzstan as you explore our extensive
          collection of traditional garments and unique decor items.
        </p>
      </div>
      <div className="blank"> </div>
      <div className="conatiner second">
        <h1>Kyrgyz style </h1>
        <div className="items">
          <div className="item">
            <img
              className="img img-first"
              src="https://i.pinimg.com/originals/c6/77/82/c67782dd8034f501fc5f1145674b1042.jpg"
              alt="kyrgyz girl"
            />
          </div>
          <div className="item">
            <img
              className="img img-second"
              src="https://i.pinimg.com/originals/d4/42/bd/d442bda392008e59439664ce7a75057d.jpg"
              alt="kazakh girl"
            />
          </div>
          <div className="item">
            <img
              className="img img-third"
              src="https://i.pinimg.com/originals/86/17/aa/8617aad6ca0b2ddb49b4af9fd8ffed2e.jpg"
              alt="beatiful girl"
            />
          </div>
          <div className="item">
            <img
              className="img img-third"
              src="https://i.pinimg.com/originals/fb/f3/4b/fbf34b4cc190fa9bc8e657cdbba0d5a0.jpg"
              alt="girl"
            />
          </div>
        </div>
      </div>
      <div className="blank"></div>
      <div className="container third">
        <h1>SAIMA in Kyrgyz culture</h1>
        <p>
          At SAIMA, we pride ourselves on offering a wide range of products that
          showcase the beauty and craftsmanship of Kyrgyz culture. Whether
          you're looking for a stylish outfit for a special occasion or
          searching for authentic decorations to add a touch of elegance to your
          home, our etno-shop has something to suit every taste and preference.
        </p>
      </div>
      <div className="blank"></div>
    </div>
  );
}

export default HomeDisplay;
