import { cssObj } from "../lib/cssObj"

export default function Footer() {
  return (
    <>
    <footer>
      <div className="d-flex flex-column p-0">
        <div className="footer-content-banner">
          <div className="hero-container">
            <div className="footer-content-container">
              <div className="image-container footer-logo-container" style={{ maxWidth: "460px", width: "100%", margin: "0 auto", display: "flex", justifyContent: "center" }}>
                <img alt="Kalai's Beauty & Academy" src="/assets/images/kalai-logo.png" className="img-fluid" style={{ maxHeight: "140px", width: "auto", maxWidth: "100%", height: "auto", display: "block", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
              </div>
              {" "}
              <p className="footer-description">
                Kalai's Beauty &amp; Academy — Beauty salon · Bridal makeup · Hair · Skincare.<br />
                <a href="https://maps.app.goo.gl/aAU34gPxxkepfLog7" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>
                  Seendur Complex, Linganur Road, Linganoor, Vadavalli, Coimbatore, Tamil Nadu 641041.
                </a>
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
                <a className="footer-icon" href="https://wa.me/919842023382" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <i className="fa-brands fa-whatsapp" />
                </a>
                {" "}
                <a className="footer-icon" href="https://www.instagram.com/kalai_makeupartistry/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fa-brands fa-instagram" />
                </a>
                {" "}
                <a className="footer-icon" href="https://maps.app.goo.gl/aAU34gPxxkepfLog7" target="_blank" rel="noopener noreferrer" aria-label="Our Location on Google Maps">
                  <i className="fa-solid fa-location-dot" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {" "}
        <div className="hero-container">
          <div className="footer-copyright-container">
            <span className="copyright-text">
              Copyright © 2026. Kalai's Beauty &amp; Academy. All rights reserved
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
