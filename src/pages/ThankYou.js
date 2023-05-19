import "./ThankYou.css";
export default function ThankYou() {
  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
  return (
    <div className="ThankYou">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h3 class="animate-charcter">Thank You!</h3>
            <p>
              Your order has been received. Our specialists will contact with
              you shortly to confirm it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
