import Header from "../components/Header"
import Footer from "../components/Footer"
import { cssObj } from "../lib/cssObj"

export default function About() {
  return (
    <>
      <Header />
      <main>
    <section className="section banner-inner">
      <div className="hero-container">
        <div className="banner-inner-container">
          <h1 className="banner-inner-title">
            About Us
          </h1>
          {" "}
          <p className="banner-inner-excerpt animate-box animated animate__animated" data-animate="animate__fadeInUp">
            Welcome to Kalai's Beauty &amp; Academy in Vadavalli, Coimbatore — your premier destination for bridal makeup, hair styling, and rejuvenating skincare.
          </p>
        </div>
      </div>
    </section>
    <section className="section about-benefits">
      <div className="hero-container">
        <div className="about-benefits__main-content">
          <div className="about-benefits__image-container animate-box animated-delay-fast animate__animated" data-animate="animate__fadeInRight">
            <div className="about-benefits__image-decoration">
              <div className="image-spacer" />
            </div>
            {" "}
            <div className="image-container about-benefits__image">
              <img alt="About Image" src="/assets/images/about123.jpg" />
            </div>
          </div>
          {" "}
          <div className="about-benefits__content-container animate-box animated animate__animated" data-animate="animate__fadeInLeft">
            <div className="sub-heading-line animate-box animated animate__animated" data-animate="animate__fadeInDown">
              <h6 className="sub-heading-text">
                Know More About Us
              </h6>
            </div>
            {" "}
            <h2 className="animate-box animated animate__animated" data-animate="animate__fadeInUp">
              Where you always feel young.
            </h2>
            {" "}
            <p className="about-benefit__content-description animate-box animated animate__animated" data-animate="animate__fadeInUp">
              At Kalai's Beauty &amp; Academy, we are passionate about enhancing your natural beauty. From bespoke bridal artistry to relaxing everyday salon care, our focus is always on your comfort, radiance, and satisfaction.
            </p>
            {" "}
            <div className="about-benefits__list-container">
              <div className="about-benefits__icon-list-container">
                <i className="fa-solid fa-check about-benefits__icon-list" />
              </div>
              {" "}
              <div className="d-flex flex-column gspace-2">
                <h3>
                  Certified experts
                </h3>
                {" "}
                <p>
                  Our certified beauty professionals bring years of hands-on experience in specialized bridal makeup, trendsetting hair designs, and skincare therapies.
                </p>
              </div>
            </div>
            {" "}
            <div className="about-benefits__list-container">
              <div className="about-benefits__icon-list-container">
                <i className="fa-solid fa-check about-benefits__icon-list" />
              </div>
              {" "}
              <div className="d-flex flex-column gspace-2">
                <h3>
                  Safe Product for Skin
                </h3>
                {" "}
                <p>
                  We only use high-grade, dermatologist-tested beauty and cosmetic products that are gentle, nourishing, and completely safe for all skin types.
                </p>
              </div>
            </div>
            {" "}
            <div className="about-benefits__list-container">
              <div className="about-benefits__icon-list-container">
                <i className="fa-solid fa-check about-benefits__icon-list" />
              </div>
              {" "}
              <div className="d-flex flex-column gspace-2">
                <h3>
                  Affordable Price
                </h3>
                {" "}
                <p>
                  Premium beauty and spa experiences at clear, budget-friendly rates with personalized packages for brides and bridal parties.
                </p>
              </div>
            </div>
            {" "}
            <div>
              <a className="btn btn-primary" href="contact.html">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section banner-appointment-cta">
      <div className="hero-container">
        <div className="appointment-cta-content" style={{ justifyContent: "center", textAlign: "center", borderLeft: "none" }}>
          <div className="appointment-cta-heading animate-box animated animate__animated" data-animate="animate__fadeInUp" style={{ width: "100%", alignItems: "center" }}>
            <div className="accent-line sub-heading-line sub-heading-w-25">
              <h6 className="sub-heading-text accent-color">
                Special Offer
              </h6>
            </div>
            {" "}
            <h2 className="accent-color">
              Bringing the joy of creativity!
              <br />
              Book An Appointment Today
            </h2>
          </div>
        </div>
      </div>
    </section>
    <div className="section about-experience">
      <div className="hero-container">
        <div className="about-experience__main-content">
          <div className="about-experience__content-container">
            <div className="sub-heading-line animate-box animated animate__animated" data-animate="animate__fadeInDown">
              <h6 className="sub-heading-text">
                Take a Ten minute vacation with us
              </h6>
            </div>
            {" "}
            <h2 className="animate-box animated animate__animated" data-animate="animate__fadeInDown">
              Where you always feel young.
            </h2>
            {" "}
            <p className="about-experience__content-description animate-box animated animate__animated" data-animate="animate__fadeInDown">
              Escape into a world of pampering and luxury. Whether you need a refreshing facial, an exquisite haircut, or complete bridal grooming, we ensure every moment is relaxing.
            </p>
            {" "}
            <div className="image-container">
              <img alt="About Experience Image" src="/assets/images/Homeheroimage1alk.jpg" />
            </div>
          </div>
          {" "}
          <div className="about-experience__highlight-container animate-box animated animate__animated" data-animate="animate__fadeInRight">
            <div className="image-container">
              <img alt="About Experience Image" src="/assets/images/whyusimg123.jpg" />
            </div>
            {" "}
            <p>
              Every treatment is personalized to complement your features and accentuate your natural glow with attention to hygiene and modern styling.
            </p>
            {" "}
            <div className="row row-cols-md-3 row-cols-1 grid-spacer-2 w-100">
              <div className="col">
                <ul className="check-list">
                  <li>
                    Body Treatments
                  </li>
                  {" "}
                  <li>
                    Acupuncture
                  </li>
                  {" "}
                  <li>
                    Manicure
                  </li>
                  {" "}
                  <li>
                    Hair Treatments
                  </li>
                </ul>
              </div>
              {" "}
              <div className="col">
                <ul className="check-list">
                  <li>
                    Bridal Makeup
                  </li>
                  {" "}
                  <li>
                    Pedicure
                  </li>
                  {" "}
                  <li>
                    Facial Spa
                  </li>
                  {" "}
                  <li>
                    Hair Coloring
                  </li>
                </ul>
              </div>
              {" "}
              <div className="col">
                <ul className="check-list">
                  <li>
                    Skin Cleansing
                  </li>
                  {" "}
                  <li>
                    Nail Art
                  </li>
                  {" "}
                  <li>
                    Hair Spa
                  </li>
                  {" "}
                  <li>
                    Grooming
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section-py-medium">
      <div className="hero-container">
        <div className="blog-section-container">
          <div className="blog-content-title animate-box animated animate__animated" data-animate="animate__fadeInDown">
            <div className="sub-heading-line sub-heading-w-50">
              <h6 className="sub-heading-text">
                Article &amp; News
              </h6>
            </div>
            {" "}
            <h2>
              Latest News
            </h2>
            {" "}
            <p className="blog-section-description">
              Explore our expert beauty advice, skincare guides, and hair care tips written by professional makeup artists.
            </p>
            {" "}
            <div>
              <a className="btn btn-primary" href="blog.html">
                More Article
              </a>
            </div>
          </div>
          {" "}
          <div className="blog-content-container animate-box animated animate__animated" data-animate="animate__fadeInRight">
            <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
              <div className="col">
                <a className="card card-blog" href="single-post.html">
                  <div className="image-container">
                    <img alt="Blog Image" src="/assets/images/servicesdailymakeup.jpg" />
                  </div>
                  {" "}
                  <h4 className="blog-title">
                    Chic &amp; Glam: Your Daily Dose of Beauty Inspiration
                  </h4>
                </a>
              </div>
              {" "}
              <div className="col">
                <a className="card card-blog" href="single-post.html">
                  <div className="image-container">
                    <img alt="Blog Image" src="/assets/images/Event-amkeupimg1223.jpg" />
                  </div>
                  {" "}
                  <h4 className="blog-title">
                    Unveiling Beauty: Your Guide to Radiant Hair, Skin, and Style
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </main>
      <Footer />
    </>
  )
}
