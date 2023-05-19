import { useEffect } from "react";
import "./AboutDisplay.css";

export default function AboutDisplay() {
  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");

    const scrollReveal = function () {
      for (let i = 0; i < revealElements.length; i++) {
        const isElementsOnScreen =
          revealElements[i].getBoundingClientRect().top < window.innerHeight;

        if (isElementsOnScreen) {
          revealElements[i].classList.add("revealed");
        } else {
          revealElements[i].classList.remove("revealed");
        }
      }
    };

    window.addEventListener("scroll", scrollReveal);
    window.addEventListener("load", scrollReveal);

    return () => {
      window.removeEventListener("scroll", scrollReveal);
      window.removeEventListener("load", scrollReveal);
    };
  }, []);

  return (
    <div className="AboutDisplay">
      <div className="container">
        <section className="section">
          <div className="image-box" data-reveal="left">
            <img
              src="https://i.pinimg.com/originals/03/85/8d/03858d665ebd7a768520c92b5d2407da.jpg"
              alt=""
              className="img-about"
            />
          </div>
          <div className="content-box">
            <h2 className="title" data-reveal="left">
              Traditional kyrgyz clothes
            </h2>
            <p className="text" data-reveal="left">
              Traditional clothing in Kyrgyzstan reflects the rich cultural
              heritage of the country and is an essential part of its identity.
              Kyrgyz traditional attire is known for its vibrant colors,
              intricate designs, and practicality, perfectly suited for the
              nomadic lifestyle of the Kyrgyz people. These garments are not
              only worn for special occasions but are also a part of everyday
              life, preserving the cultural legacy and serving as a symbol of
              national pride.
            </p>
          </div>
          <div className="content-box">
            <h2 className="title" data-reveal="left">
              Kyrgyz clothing
            </h2>
            <p class="text" data-reveal="left">
              One of the most iconic elements of traditional Kyrgyz clothing is
              the "chapan," a long robe-like coat made from thick fabric, often
              adorned with elaborate embroidery. The chapan is typically worn by
              both men and women and is well-suited for the harsh climate of the
              mountainous regions of Kyrgyzstan. The intricate embroidery on the
              chapan often depicts motifs inspired by nature, such as flowers,
              animals, and geometric patterns, showcasing the Kyrgyz people's
              deep connection to their surroundings.
            </p>
          </div>
          <div className="image-box" data-reveal="left">
            <img
              src="https://i.pinimg.com/originals/fb/f3/4b/fbf34b4cc190fa9bc8e657cdbba0d5a0.jpg"
              alt=""
              className="img-about"
            />
          </div>
          <div className="image-box" data-reveal="left">
            <img
              src="https://i.pinimg.com/originals/2b/64/ec/2b64ec2652e8053690acc4290920ed10.jpg"
              alt=""
              className="img-about"
            />
          </div>
          <div className="content-box">
            <h2 className="title" data-reveal="left">
              For women
            </h2>
            <p className="text" data-reveal="left">
              For women, the traditional Kyrgyz dress is called a "beldemchi" or
              "chyptama." It consists of a long-sleeved blouse, known as a
              "chyptama," and a full, ankle-length skirt called a "beldemchi."
              These garments are traditionally made from silk or cotton fabric
              and are also adorned with vibrant embroidery. Women often wear a
              headdress called a "elechek" or "kiyiz" along with their
              traditional attire, which adds a touch of elegance and completes
              the overall look.
            </p>
          </div>
          <div className="content-box">
            <h2 className="title" data-reveal="left">
              For men
            </h2>
            <p className="text" data-reveal="left">
              Men in Kyrgyzstan traditionally wear a long-sleeved shirt called a
              "koshtek," which is often made of cotton or silk fabric. The
              koshtek is paired with loose-fitting trousers known as "jarq
              shym," typically made of wool. Men also wear a felt hat called a
              "ak-kalpak," which is an iconic symbol of Kyrgyz culture. The
              ak-kalpak is often handmade and passed down through generations,
              and its shape and design vary depending on the region and
              occasion.
            </p>
          </div>
          <div className="image-box" data-reveal="left">
            <img
              src="https://i.pinimg.com/originals/be/5c/1d/be5c1d9171e5ff0e2fa0879949eb4d5a.jpg"
              alt=""
              className="img-about"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
