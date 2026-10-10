import Header from "../components/Header"
import Footer from "../components/Footer"
import { cssObj } from "../lib/cssObj"

export default function Contact() {
  return (
    <>
      <Header />
      <main>
    <section className="section banner-contact">
      <div className="hero-container">
        <div className="card card-contact">
          <h2 className="card-contact-title">
            Let's get in Touch
          </h2>
          <div className="contact-info-summary" style={{ marginBottom: "25px", textAlign: "center" }}>
            <p style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "6px", color: "var(--primary-color, #81442d)" }}>
              Kalai's Beauty Salon &amp; Spa
            </p>
            <p style={{ margin: "4px 0", color: "#555" }}>
              Beauty salon · Bridal makeup · Hair · Skincare
            </p>
            <p style={{ margin: "4px 0", color: "#555" }}>
              <i className="fa-solid fa-location-dot" style={{ marginRight: "8px" }} />
              Vadavalli, Coimbatore, Tamil Nadu, India
            </p>
            <p style={{ margin: "4px 0", color: "#555" }}>
              <i className="fa-solid fa-phone" style={{ marginRight: "8px" }} />
              Phone / WhatsApp: <strong>+91 98420 23382</strong>
            </p>
            <p style={{ margin: "4px 0", color: "#555" }}>
              <i className="fa-brands fa-instagram" style={{ marginRight: "8px" }} />
              Instagram: <strong>@kalai_makeupartistry</strong>
            </p>
          </div>
          {" "}
          <div className="alert form-message success hidden">
            <span className="check-icon">
              <i className="fa-solid fa-2xl fa-check" />
            </span>
            {" "}
            <p>
              Thank you! Form submitted successfully.
            </p>
          </div>
          {" "}
          <div className="alert form-message error hidden">
            <span className="cross-icon">
              <i className="fa-solid fa-2xl fa-xmark" />
            </span>
            {" "}
            <p>
              Oops! Form submission failed. Please try again.
            </p>
          </div>
          {" "}
          <form action="./assets/php/contact-submit.php" className="form" id="contact-form" method="post">
            <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
              <div className="col">
                <div className="form-input-wrapper">
                  <label htmlFor="first-name">
                    First Name
                  </label>
                  {" "}
                  <input id="first-name" name="first-name" placeholder="Enter Your First Name" type="text" />
                </div>
              </div>
              {" "}
              <div className="col">
                <div className="form-input-wrapper">
                  <label htmlFor="last-name">
                    Last Name
                  </label>
                  {" "}
                  <input id="last-name" name="last-name" placeholder="Enter Your Last Name" type="text" />
                  {" "}
                  <p className="error-text hidden">
                    This field is required
                  </p>
                </div>
              </div>
              {" "}
              <div className="col">
                <div className="form-input-wrapper">
                  <label htmlFor="email">
                    Email
                  </label>
                  {" "}
                  <input id="email" name="email" placeholder="Enter Your Email" type="email" />
                  {" "}
                  <p className="error-text hidden">
                    This field is required
                  </p>
                </div>
              </div>
              {" "}
              <div className="col">
                <div className="form-input-wrapper">
                  <label htmlFor="phone">
                    Phone Number
                  </label>
                  {" "}
                  <input id="phone" name="phone" placeholder="Enter Your Telephone" type="tel" />
                  {" "}
                  <p className="error-text hidden">
                    This field is required
                  </p>
                </div>
              </div>
            </div>
            {" "}
            <div className="form-input-wrapper">
              <label htmlFor="message">
                Messages
              </label>
              {" "}
              <textarea id="message" name="message" placeholder="Enter Your Message" rows="4" />
            </div>
            {" "}
            <div>
              <button className="btn btn-primary btn-nohover" type="submit">
                Submit Button
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
      </main>
      <Footer />
    </>
  )
}
