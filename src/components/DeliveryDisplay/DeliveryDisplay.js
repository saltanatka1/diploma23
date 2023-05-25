import "./DeliveryDisplay.css";
export default function DeliveryDisplay() {
  return (
    <div className="DeliveryDisplay">
      <div className="container">
        <div className="progress">
          <div className="progress_inner">
            <div className="progress_inner__step">
              <label for="step-1">Start order</label>
            </div>
            <div className="progress_inner__step">
              <label for="step-2">Prepare gift</label>
            </div>
            <div className="progress_inner__step">
              <label for="step-3">Pack gift</label>
            </div>
            <div className="progress_inner__step">
              <label for="step-4">Decorate box</label>
            </div>
            <div className="progress_inner__step">
              <label for="step-5">Send gift</label>
            </div>
            <input checked="checked" id="step-1" name="step" type="radio" />
            <input id="step-2" name="step" type="radio" />
            <input id="step-3" name="step" type="radio" />
            <input id="step-4" name="step" type="radio" />
            <input id="step-5" name="step" type="radio" />
            <div className="progress_inner__bar"></div>
            <div className="progress_inner__bar--set"></div>
            <div className="progress_inner__tabs">
              <div className="tab tab-0">
                <h1>Start order</h1>
                <p>
                  Start Order is an innovative and efficient system that enables
                  businesses to streamline their ordering processes and enhance
                  customer experiences. Whether it's a restaurant, café, retail
                  store, or any other establishment that deals with customer
                  orders, Start Order provides a comprehensive solution that
                  simplifies the entire ordering journey..
                </p>
              </div>
              <div className="tab tab-1">
                <h1>Prepare gift</h1>
                <p>
                  Consider the recipient: Think about the person you're gifting
                  and their preferences, interests, and personality. What are
                  their hobbies, favorite colors, or any specific needs they may
                  have? Understanding the recipient will help you choose a gift
                  that resonates with them.
                </p>
              </div>
              <div className="tab tab-2">
                <h1>Pack gift</h1>
                <p>
                  Gather your supplies: You will need wrapping paper, scissors,
                  tape, ribbon or bow, gift tag or card, and any additional
                  decorative elements you'd like to include.
                </p>
              </div>
              <div className="tab tab-3">
                <h1>Decorate box</h1>
                <p>
                  Choose a gift box: Select a box that suits the size and shape
                  of your gift. It can be a plain cardboard box, a decorative
                  gift box, or even a DIY box made from sturdy cardstock or
                  craft paper.
                </p>
              </div>
              <div className="tab tab-4">
                <h1>Send gift</h1>
                <p>
                  Prepare the gift: Ensure the gift is securely packed and
                  well-protected to prevent damage during transit. Consider
                  using bubble wrap, tissue paper, or padding to safeguard
                  fragile items.
                </p>
              </div>
            </div>
            <div className="progress_inner__status">
              <div className="box_base"></div>
              <div className="box_lid"></div>
              <div className="box_ribbon"></div>
              <div className="box_bow">
                <div className="box_bow__left"></div>
                <div className="box_bow__right"></div>
              </div>
              <div className="box_item"></div>
              <div className="box_tag"></div>
              <div className="box_string"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
