import Header from "../components/Header"
import Footer from "../components/Footer"
import { cssObj } from "../lib/cssObj"

export default function Pricing() {
  return (
    <>
      <Header />
      <main>
    <section className="sectio banner-inner">
      <div className="hero-container">
        <div className="banner-inner-container">
          <h1 className="banner-inner-title">
            Treatments &amp; Services
          </h1>
          {" "}
          <p className="banner-inner-excerpt animate-box animated animate__animated" data-animate="animate__fadeInUp">
            Explore our complete range of bespoke bridal makeup, hair styling, skin treatments, and spa therapies.
          </p>
        </div>
      </div>
    </section>
    <section className="section section-pb-large">
      <div className="hero-container">
        <div className="d-flex flex-column flex-lg-row gspace-5">
          <div className="pricing-image-container">
            <div className="pricing-image-decoration animate-box animated animate__animated" data-animate="animate__fadeInUp">
              <div className="image-spacer" />
            </div>
            {" "}
            <div className="image-container image-pricing animate-box animated animate__animated" data-animate="animate__fadeInUp">
              <img alt="Pricing" src="/assets/images/pricetreatment123.jpg" />
            </div>
            {" "}
            <div className="pricing-feature animate-box animated animate__animated" data-animate="animate__fadeInUp">
              <div className="pricing-feature__value">
                <span className="pricing-feature__number counter" data-target="12">
                  12
                </span>
                {" "}
                <span className="pricing-feature__symbol">
                  +
                </span>
              </div>
              {" "}
              <div className="pricing-feature__text">
                <h3 className="pricing-feature__title">
                  Years Experience
                </h3>
                {" "}
                <p className="pricing-feature__desc">
                  Over a decade of dedicated expertise delivering stunning transformations.
                </p>
              </div>
            </div>
          </div>
          {" "}
          <div className="pricing-content">
            <div className="d-flex flex-column gspace-2">
              <div className="sub-heading-line left-only animate-box animated animate__animated" data-animate="animate__fadeIn">
                <h3>
                  Cosmetology &amp; Skincare
                </h3>
              </div>
              {" "}
              <div className="pricing-list-container">
                <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                  <div className="pricing-list__heading-container" style={{ width: "100%" }}>
                    <h3>
                      Face Treatments
                    </h3>
                    {" "}
                    <p className="pricing-sub-heading">
                      Complete cleansing, exfoliation, and glow therapy
                    </p>
                  </div>
                </div>
                {" "}
                <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                  <div className="pricing-list__heading-container" style={{ width: "100%" }}>
                    <h3>
                      Facial &amp; Massage
                    </h3>
                    {" "}
                    <p className="pricing-sub-heading">
                      Relaxing facial therapy with soothing massage
                    </p>
                  </div>
                </div>
                {" "}
                <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                  <div className="pricing-list__heading-container" style={{ width: "100%" }}>
                    <h3>
                      Hair Treatment
                    </h3>
                    {" "}
                    <p className="pricing-sub-heading">
                      Nourishing spa, anti-dandruff, and hair repair treatments
                    </p>
                  </div>
                </div>
                {" "}
                <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                  <div className="pricing-list__heading-container" style={{ width: "100%" }}>
                    <h3>
                      Manicure &amp; Pedicure
                    </h3>
                    {" "}
                    <p className="pricing-sub-heading">
                      Deluxe nail grooming, massage, and polish
                    </p>
                  </div>
                </div>
                {" "}
                <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                  <div className="pricing-list__heading-container" style={{ width: "100%" }}>
                    <h3>
                      Hand / Nail Moisturizer
                    </h3>
                    {" "}
                    <p className="pricing-sub-heading">
                      Intense moisture therapy for soft and supple hands
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <div className="d-flex flex-column gspace-2">
              <div className="sub-heading-line left-only animate-box animated animate__animated" data-animate="animate__fadeIn">
                <h3>
                  Hair Styling &amp; Color
                </h3>
              </div>
              {" "}
              <div className="pricing-list-container">
                <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                  <div className="pricing-list__heading-container" style={{ width: "100%" }}>
                    <h3>
                      Signature Haircut
                    </h3>
                    {" "}
                    <p className="pricing-sub-heading">
                      Customized cut and blow-dry by senior stylists
                    </p>
                  </div>
                </div>
                {" "}
                <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                  <div className="pricing-list__heading-container" style={{ width: "100%" }}>
                    <h3>
                      Hair Color &amp; Highlights
                    </h3>
                    {" "}
                    <p className="pricing-sub-heading">
                      Global color, balayage, and ammonia-free shades
                    </p>
                  </div>
                </div>
                {" "}
                <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                  <div className="pricing-list__heading-container" style={{ width: "100%" }}>
                    <h3>
                      Precision Styling
                    </h3>
                    {" "}
                    <p className="pricing-sub-heading">
                      Curling, straightening, and event hair setting
                    </p>
                  </div>
                </div>
                {" "}
                <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                  <div className="pricing-list__heading-container" style={{ width: "100%" }}>
                    <h3>
                      Full Root Touch-up
                    </h3>
                    {" "}
                    <p className="pricing-sub-heading">
                      Seamless grey coverage and color blending
                    </p>
                  </div>
                </div>
                {" "}
                <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                  <div className="pricing-list__heading-container" style={{ width: "100%" }}>
                    <h3>
                      Deep Hair Spa
                    </h3>
                    {" "}
                    <p className="pricing-sub-heading">
                      Keratin infusion and intensive scalp hydration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section p-0">
      <div className="appointment-header-container">
        <div className="hero-container">
          <div className="appointment-header-wrapper animate-box animated animate__animated" data-animate="animate__fadeInDown">
            <div className="sub-heading-line sub-heading-w-50">
              <h6 className="sub-heading-text">
                Book Appointment
              </h6>
            </div>
            {" "}
            <h2>
              Bringing the joy of creativity! Book An Appointment
            </h2>
          </div>
        </div>
      </div>
      {" "}
      <div className="appointment-content-container">
        <div className="appointment-content-image animate-box animated animate__animated" data-animate="animate__fadeInLeft">
          <div className="image-spacer" />
        </div>
        {" "}
        <div className="appointment-content-form animate-box animated animate__animated" data-animate="animate__fadeInRight">
          <h3>
            Bringing the joy of creativity!
{" "}
            <br />
            {" "}
            Book An Appointment
          </h3>
          {" "}
          <p className="appointment-content-description">
            Schedule your appointment today for bridal makeup, hair styling, or spa sessions. We look forward to pampering you!
          </p>
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
          <form action="./assets/php/appointment-submit.php" className="form" id="appointment-form" method="post">
            <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
              <div className="col">
                <div className="d-flex flex-column gspace-0">
                  <label htmlFor="first-name">
                    First Name
{" "}
                    <span className="important-marker">
                      *
                    </span>
                  </label>
                  {" "}
                  <input id="first-name" name="first-name" placeholder="First Name" type="text" />
                </div>
              </div>
              {" "}
              <div className="col">
                <div className="d-flex flex-column gspace-0">
                  <label htmlFor="last-name">
                    Last Name
{" "}
                    <span className="important-marker">
                      *
                    </span>
                  </label>
                  {" "}
                  <input id="last-name" name="last-name" placeholder="Last Name" type="text" />
                  {" "}
                  <p className="error-text hidden">
                    This field is required
                  </p>
                </div>
              </div>
            </div>
            {" "}
            <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
              <div className="col">
                <div className="d-flex flex-column gspace-0">
                  <label htmlFor="telephone">
                    Telephone
{" "}
                    <span className="important-marker">
                      *
                    </span>
                  </label>
                  {" "}
                  <input id="telephone" name="telephone" placeholder="Telephone" type="tel" />
                  {" "}
                  <p className="error-text hidden">
                    This field is required
                  </p>
                </div>
              </div>
              {" "}
              <div className="col">
                <div className="d-flex flex-column gspace-0">
                  <label htmlFor="treatment-display">
                    Treatment
{" "}
                    <span className="important-marker">
                      *
                    </span>
                  </label>
                  {" "}
                  <div className="dropdown-container dd-multi">
                    <input aria-controls="treatment-list" aria-expanded="false" aria-haspopup="listbox" className="dd-multi__input" id="treatment-display" readOnly role="combobox" type="text" />
                    {" "}
                    <div className="dropdown-select dd-multi__select">
                      <div className="dd-multi__chips" />
                      {" "}
                      <i className="fa-solid fa-caret-down" />
                    </div>
                    {" "}
                    <div className="dropdown-list dd-multi__list" id="treatment-list" role="listbox">
                      <div className="dropdown-option dd-multi__option" data-value="bridal-makeup" role="option">
                        Bridal Makeup
                      </div>
                      {" "}
                      <div className="dropdown-option dd-multi__option" data-value="hair-styling" role="option">
                        Hair Styling &amp; Spa
                      </div>
                      {" "}
                      <div className="dropdown-option dd-multi__option" data-value="facial-skincare" role="option">
                        Facial &amp; Skincare
                      </div>
                      {" "}
                      <div className="dropdown-option dd-multi__option" data-value="manicure-pedicure" role="option">
                        Manicure &amp; Pedicure
                      </div>
                      {" "}
                      <div className="dropdown-option dd-multi__option" data-value="fashion-makeup" role="option">
                        Fashion &amp; Party Makeup
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <input className="dd-multi__value" id="treatment" name="treatment" type="hidden" />
                  </div>
                  {" "}
                  <p className="error-text hidden">
                    This field is required
                  </p>
                </div>
              </div>
            </div>
            {" "}
            <div className="d-flex flex-column gspace-0">
              <label htmlFor="message">
                Message
              </label>
              {" "}
              <textarea id="message" name="message" placeholder="Note" rows="4" />
            </div>
            {" "}
            <button className="btn btn-primary btn-nohover" type="submit">
              Submit Button
            </button>
          </form>
        </div>
      </div>
    </section>
      </main>
      <Footer />
    </>
  )
}
