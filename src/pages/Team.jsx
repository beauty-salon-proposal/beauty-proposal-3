import Header from "../components/Header"
import Footer from "../components/Footer"
import { cssObj } from "../lib/cssObj"

export default function Team() {
  return (
    <>
      <Header />
      <main>
    <section className="sectio banner-inner">
      <div className="hero-container">
        <div className="banner-inner-container">
          <h1 className="banner-inner-title">
            Our Team
          </h1>
          {" "}
          <p className="banner-inner-excerpt animate-box animated animate__animated" data-animate="animate__fadeInUp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
    </section>
    <section className="section-py-medium">
      <div className="hero-container">
        <div className="d-flex flex-column gspace-5">
          <div className="d-flex flex-column gspace-2 justify-content-center align-items-center text-center">
            <div className="sub-heading-double sub-heading-w-20 justify-content-center animate-box animated animate__animated" data-animate="animate__fadeInDown">
              <h6 className="sub-heading-text">
                Our Team
              </h6>
            </div>
            {" "}
            <h2 className="animate-box animated animate__animated" data-animate="animate__fadeInDown">
              Professional cosmetologists
            </h2>
          </div>
          {" "}
          <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 grid-spacer-2">
            <div className="col">
              <div className="team-content-container team-founder-hair-style animate-box animated-delay-fast animate__animated" data-animate="animate__fadeInUp">
                <div className="team-name-container">
                  <div className="content-spacer" />
                  {" "}
                  <h3 className="team-name">
                    Tiana
                  </h3>
                  {" "}
                  <p className="team-details">
                    Founder &amp; Hair Styler
                  </p>
                </div>
              </div>
            </div>
            {" "}
            <div className="col">
              <div className="team-content-container team-cofounder-fashion-style animate-box animated animate__animated" data-animate="animate__fadeInUp">
                <div className="team-name-container">
                  <div className="content-spacer" />
                  {" "}
                  <h3 className="team-name">
                    Sofia
                  </h3>
                  {" "}
                  <p className="team-details">
                    Co-Founder &amp; Fashion Styler
                  </p>
                </div>
              </div>
            </div>
            {" "}
            <div className="col">
              <div className="team-content-container team-makeup-artist animate-box animated-delay-slow animate__animated" data-animate="animate__fadeInUp">
                <div className="team-name-container">
                  <div className="content-spacer" />
                  {" "}
                  <h3 className="team-name">
                    Efrina
                  </h3>
                  {" "}
                  <p className="team-details">
                    Makeup Artist
                  </p>
                </div>
              </div>
            </div>
            {" "}
            <div className="col">
              <div className="team-content-container team-makeup-styler animate-box animated animate__animated" data-animate="animate__fadeInUp">
                <div className="team-name-container">
                  <div className="content-spacer" />
                  {" "}
                  <h3 className="team-name">
                    Nita
                  </h3>
                  {" "}
                  <p className="team-details">
                    Makeup Styler
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section testimonial-banner testimonial-light-banner">
      <div className="hero-container">
        <div className="d-flex flex-column align-items-center justify-content-center h-100 gspace-2">
          <div className="testimonial-quote-icon animate-box animated animate__animated" data-animate="animate__zoomIn">
            <i className="fa-solid fa-quote-right" />
          </div>
          {" "}
          <div className="testimonial-content-container animate-box animated animate__animated" data-animate="animate__fadeInUp">
            <div className="testimonial-btn-container">
              <button className="testimonial-btn" id="prev" type="button">
                <i className="fa-solid fa-arrow-left" />
              </button>
              {" "}
              <button className="testimonial-btn" id="next" type="button">
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
            {" "}
            <div className="testimonial-slider">
              <div className="testimonial-slider-wrapper" id="testimonial-slider">
                <div className="testimonial-slide" data-index="0">
                  <p className="testimonial-quote">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  </p>
                  {" "}
                  <div className="d-flex flex-column align-items-center">
                    <h5 className="testimonial-name">
                      Jhon Doe
                    </h5>
                    {" "}
                    <p className="testimonial-designation">
                      Designation
                    </p>
                  </div>
                </div>
                {" "}
                <div className="testimonial-slide" data-index="1">
                  <p className="testimonial-quote">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  </p>
                  {" "}
                  <div className="d-flex flex-column align-items-center">
                    <h5 className="testimonial-name">
                      Jhon Doe
                    </h5>
                    {" "}
                    <p className="testimonial-designation">
                      Designation
                    </p>
                  </div>
                </div>
                {" "}
                <div className="testimonial-slide" data-index="2">
                  <p className="testimonial-quote">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  </p>
                  {" "}
                  <div className="d-flex flex-column align-items-center">
                    <h5 className="testimonial-name">
                      Jhon Doe
                    </h5>
                    {" "}
                    <p className="testimonial-designation">
                      Designation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <div className="testimonial-nav-container">
              <button className="testimonial-nav-btn active" />
              {" "}
              <button className="testimonial-nav-btn" />
              {" "}
              <button className="testimonial-nav-btn" />
            </div>
          </div>
        </div>
      </div>
    </section>
      </main>
      <Footer />
    </>
  )
}
