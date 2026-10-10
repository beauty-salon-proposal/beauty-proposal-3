import Header from "../components/Header"
import Footer from "../components/Footer"
import { cssObj } from "../lib/cssObj"

export default function Home() {
  return (
    <>
      <Header />
      <main>
    <section className="section banner-home">
      <div className="hero-container">
        <div className="banner-home-content">
          <div className="accent-line sub-heading-line animate-box animated animate__animated" data-animate="animate__fadeInDown">
            <h6 className="sub-heading-text accent-color">
              Welcome to Kalai's Beauty Salon &amp; Spa
            </h6>
          </div>
          {" "}
          <h1 className="animate-box animated animate__animated" data-animate="animate__fadeInUp">
            We Can Create What You
{" "}
            <span className="home-heading-wrapper">
              Imagine.
            </span>
          </h1>
          {" "}
          <p className="accent-color home-content-description animate-box animated animate__animated" data-animate="animate__fadeInUp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          {" "}
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gspace-3 animate-box animated animate__animated" data-animate="animate__fadeInUp">
            <a className="btn btn-primary" href="about.html">
              Discover More
            </a>
            {" "}
            <div className="home-contact-container">
              <div>
                <i className="fa-solid fa-phone-volume contact-home-icon" />
              </div>
              {" "}
              <div className="d-flex flex-column gspace-1">
                <h6>
                  Make Appointment
                </h6>
                {" "}
                <p className="accent-color mb-0">
                  +91 98420 23382
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section about-intro">
      <div className="hero-container">
        <div className="about-intro__main-content">
          <div className="about-intro__content-container">
            <div className="sub-heading-line animate-box animated animate__animated" data-animate="animate__fadeInDown">
              <h6 className="sub-heading-text">
                Know More About Us
              </h6>
            </div>
            {" "}
            <h2 className="animate-box animated animate__animated" data-animate="animate__fadeInUp">
              There is a kind of beauty in imperfection
            </h2>
            {" "}
            <p className="about-intro__content-description animate-box animated animate__animated" data-animate="animate__fadeInUp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            {" "}
            <div className="animate-box animated animate__animated" data-animate="animate__fadeInUp">
              <a className="btn btn-primary" href="about.html">
                About Us
              </a>
            </div>
            {" "}
            <div className="about-intro__content-spacer" />
            {" "}
            <div className="image-container about-intro__highlight-image animate-box animated animate__animated" data-animate="animate__fadeInUp">
              <img alt="About Intro Highlight Image" src="/assets/images/imageabout1.jpg" />
            </div>
            {" "}
            <div className="card card-about-intro__highlight animate-box animated animate__animated" data-animate="animate__fadeInLeft">
              <h3>
                There is a kind of beauty
              </h3>
              {" "}
              <p className="accent-color">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          {" "}
          <div className="about-intro__image-container animate-box animated animate__animated" data-animate="animate__fadeInRight">
            <div className="about-intro__image-decoration">
              <div className="image-spacer" />
            </div>
            {" "}
            <div className="image-container about-intro__image">
              <img alt="About Image" src="/assets/images/about123.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="d-flex flex-column text-center align-items-center gspace-2">
        <div className="sub-heading-double sub-heading-w-20 justify-content-center animate-box animated animate__animated" data-animate="animate__fadeIn">
          <h6 className="sub-heading-text">
            Get Beautifull With Us
          </h6>
        </div>
        {" "}
        <h2 className="animate-box animated animate__animated" data-animate="animate__fadeInDown">
          Highlight your natural beauty with Us
        </h2>
        {" "}
        <p className="animate-box animated animate__animated" data-animate="animate__fadeInDown">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        {" "}
        <div className="service-content-container">
          <div className="service-container service-container--cinematic-makeup animate-box animated-delay-fast animate__animated" data-animate="animate__fadeInUp">
            <div className="service-content-spacer" />
            {" "}
            <a className="card service-description-card" href="#">
              <h6 className="service-subtitle">
                Disc 15%
              </h6>
              {" "}
              <h3 className="service-title">
                Cinematic Makeup
              </h3>
            </a>
          </div>
          {" "}
          <div className="service-container service-container--fashion-makeup animate-box animated animate__animated" data-animate="animate__fadeInUp">
            <div className="service-content-spacer" />
            {" "}
            <a className="card service-description-card" href="#">
              <h6 className="service-subtitle">
                Disc 10%
              </h6>
              {" "}
              <h3 className="service-title">
                Fashion Makeup
              </h3>
            </a>
          </div>
          {" "}
          <div className="service-container service-container--bridal-makeup animate-box animated-delay-slow animate__animated" data-animate="animate__fadeInUp">
            <div className="service-content-spacer" />
            {" "}
            <a className="card service-description-card" href="#">
              <h6 className="service-subtitle">
                Disc 20%
              </h6>
              {" "}
              <h3 className="service-title">
                Bridal Makeup
              </h3>
            </a>
          </div>
          {" "}
          <div className="service-container service-container--hair-style animate-box animated animate__animated" data-animate="animate__fadeInUp">
            <div className="service-content-spacer" />
            {" "}
            <a className="card service-description-card" href="#">
              <h6 className="service-subtitle">
                Disc 10%
              </h6>
              {" "}
              <h3 className="service-title">
                Hair Style
              </h3>
            </a>
          </div>
        </div>
        {" "}
        <div className="animate-box animated-delay-slow animate__animated" data-animate="animate__zoomIn">
          <a className="btn btn-primary" href="services.html">
            View All Services
          </a>
        </div>
      </div>
    </section>
    <div className="section whychooseus-banner">
      <div className="hero-container">
        <div className="whychooseus-content-container">
          <div className="whychooseus-content">
            <div className="sub-heading-line animate-box animated animate__animated" data-animate="animate__fadeInLeft">
              <h6 className="sub-heading-text">
                The Best Beauty Rituals
              </h6>
            </div>
            {" "}
            <h2 className="animate-box animated animate__animated" data-animate="animate__fadeInLeft">
              We care for the perfectionist in you.
            </h2>
            {" "}
            <p className="whychooseus-content-description animate-box animated animate__animated" data-animate="animate__fadeInLeft">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            {" "}
            <div className="chooseus-container animate-box animated-delay-fast animate__animated" data-animate="animate__fadeInLeft">
              <div className="chooseus-icon">
                <i className="fa-solid fa-check" />
              </div>
              {" "}
              <div className="d-flex flex-column gspace-1">
                <h3>
                  Hygiene and Safety
                </h3>
                {" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>
            {" "}
            <div className="chooseus-container animate-box animated animate__animated" data-animate="animate__fadeInLeft">
              <div className="chooseus-icon">
                <i className="fa-solid fa-check" />
              </div>
              {" "}
              <div className="d-flex flex-column gspace-1">
                <h3>
                  Professional Services
                </h3>
                {" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>
            {" "}
            <div className="chooseus-container animate-box animated-delay-slow animate__animated" data-animate="animate__fadeInLeft">
              <div className="chooseus-icon">
                <i className="fa-solid fa-check" />
              </div>
              {" "}
              <div className="d-flex flex-column gspace-1">
                <h3>
                  Stylish Makeovers
                </h3>
                {" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>
          </div>
          {" "}
          <div className="whychooseus-image-container animate-box animated animate__animated" data-animate="animate__fadeInRight">
            <div className="whychooseus-decoration-border">
              <div className="image-spacer" />
            </div>
            {" "}
            <div className="image-container chooseus-image">
              <img alt="Chooseus Image" src="/assets/images/Dailymakeupimg.jpg" />
            </div>
            {" "}
            <div className="whychooseus-decoration-paint">
              <div className="image-container chooseus-image-paint">
                <img alt="Choose Us Image" src="/assets/images/gambar-pemanis-e17643142116311111.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="section testimonial-banner">
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
                  00
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          {" "}
          <div className="pricing-content">
            <div className="sub-heading-line animate-box animated animate__animated" data-animate="animate__fadeInDown">
              <h6 className="sub-heading-text">
                Treatment &amp; Prices
              </h6>
            </div>
            {" "}
            <h2 className="animate-box animated animate__animated" data-animate="animate__fadeInDown">
              Because being beautiful should never harm you
            </h2>
            {" "}
            <div className="pricing-list-container">
              <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                <div className="pricing-list__heading-container">
                  <h3>
                    Face Treatments
                  </h3>
                  {" "}
                  <p className="pricing-sub-heading">
                    There are many variations of passages
                  </p>
                </div>
                {" "}
                <div className="pricing-list__price">
                  <div className="pricing-list__line" />
                  {" "}
                  <h3>
                    $50
                  </h3>
                </div>
              </div>
              {" "}
              <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                <div className="pricing-list__heading-container">
                  <h3>
                    Facial &amp; Message
                  </h3>
                  {" "}
                  <p className="pricing-sub-heading">
                    Are many variations of passages of available.
                  </p>
                </div>
                {" "}
                <div className="pricing-list__price">
                  <div className="pricing-list__line" />
                  {" "}
                  <h3>
                    $50
                  </h3>
                </div>
              </div>
              {" "}
              <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                <div className="pricing-list__heading-container">
                  <h3>
                    Hair Treatment
                  </h3>
                  {" "}
                  <p className="pricing-sub-heading">
                    Variations of passages of available.
                  </p>
                </div>
                {" "}
                <div className="pricing-list__price">
                  <div className="pricing-list__line" />
                  {" "}
                  <h3>
                    $50
                  </h3>
                </div>
              </div>
              {" "}
              <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                <div className="pricing-list__heading-container">
                  <h3>
                    Manicure &amp; Padicure
                  </h3>
                  {" "}
                  <p className="pricing-sub-heading">
                    Many variations of passages of available
                  </p>
                </div>
                {" "}
                <div className="pricing-list__price">
                  <div className="pricing-list__line" />
                  {" "}
                  <h3>
                    $50
                  </h3>
                </div>
              </div>
              {" "}
              <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                <div className="pricing-list__heading-container">
                  <h3>
                    Hand/nail Moisturizer
                  </h3>
                  {" "}
                  <p className="pricing-sub-heading">
                    There are many variations of passages of available
                  </p>
                </div>
                {" "}
                <div className="pricing-list__price">
                  <div className="pricing-list__line" />
                  {" "}
                  <h3>
                    $50
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section banner-appointment-cta">
      <div className="hero-container">
        <div className="appointment-cta-content">
          <div className="request-loader-container animate-box animated animate__animated" data-animate="animate__zoomIn">
            <button className="request-loader" data-video="#">
              <i className="fa-solid fa-play" />
            </button>
          </div>
          {" "}
          <div className="appointment-cta-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">
            <div className="accent-line sub-heading-line sub-heading-w-25">
              <h6 className="sub-heading-text accent-color">
                Discount 20%
              </h6>
            </div>
            {" "}
            <h2 className="accent-color">
              Bringing the joy of creativity!
{" "}
              <br />
              {" "}
              Book An Appointment
            </h2>
          </div>
        </div>
      </div>
    </section>
    <div className="section p-0">
      <div className="modal-overlay" id="modal-overlay">
        <span className="modal-close">
          <i className="fa-solid fa-xmark" />
        </span>
        {" "}
        <div className="video-modal">
          <iframe allowFullScreen id="modal-video-frame" />
        </div>
      </div>
    </div>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
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
                      <div className="dropdown-option dd-multi__option" data-value="treatment-1" role="option">
                        Treatment 1
                      </div>
                      {" "}
                      <div className="dropdown-option dd-multi__option" data-value="treatment-2" role="option">
                        Treatment 2
                      </div>
                      {" "}
                      <div className="dropdown-option dd-multi__option" data-value="treatment-3" role="option">
                        Treatment 3
                      </div>
                      {" "}
                      <div className="dropdown-option dd-multi__option" data-value="treatment-4" role="option">
                        Treatment 4
                      </div>
                      {" "}
                      <div className="dropdown-option dd-multi__option" data-value="treatment-5" role="option">
                        Treatment 5
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
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
