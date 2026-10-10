import { cssObj } from "../lib/cssObj"

export default function Footer() {
  return (
    <>
    <footer>
      <div className="d-flex flex-column p-0">
        <div className="footer-content-banner">
          <div className="hero-container">
            <div className="footer-content-container">
              <div className="image-container">
                <img alt="Kalai's Beauty Salon & Spa" src="/assets/images/Fabuluxlogowhite.png" />
              </div>
              {" "}
              <p className="footer-description">
                Kalai's Beauty Salon &amp; Spa — Beauty salon · Bridal makeup · Hair · Skincare.<br />
                Vadavalli, Coimbatore, Tamil Nadu, India.
              </p>
              {" "}
              <div className="d-flex flex-row gspace-0 align-items-center justify-content-center flex-wrap">
                <a className="footer-link" href="index.html">
                  Home
                </a>
                {" "}
                <a className="footer-link" href="about.html">
                  About Us
                </a>
                {" "}
                <a className="footer-link" href="services.html">
                  Services
                </a>
                {" "}
                <a className="footer-link" href="contact.html">
                  Contact Us
                </a>
                {" "}
                <a className="footer-link" href="blog.html">
                  Blog
                </a>
              </div>
              {" "}
              <div className="footer-divider" />
              {" "}
              <div className="footer-social-container">
                <a className="footer-icon" href="#">
                  <i className="fa-brands fa-whatsapp" />
                </a>
                {" "}
                <a className="footer-icon" href="#">
                  <i className="fa-brands fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {" "}
        <div className="hero-container">
          <div className="footer-copyright-container">
            <span className="copyright-text">
              Copyright © 2025. Kalai's Beauty Salon &amp; Spa. All rights reserved
            </span>
            {" "}
            <div className="legalink-container">
              <a className="legallink-text" href="contact.html">
                Terms &amp; Conditions
              </a>
              {" "}
              <span className="divider-legalink">
                -
              </span>
              {" "}
              <a className="legallink-text" href="contact.html">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
