import Header from "../components/Header"
import Footer from "../components/Footer"
import { cssObj } from "../lib/cssObj"

export default function Blog() {
  return (
    <>
      <Header />
      <main>
    <section className="sectio banner-inner">
      <div className="hero-container">
        <div className="banner-inner-container">
          <h1 className="banner-inner-title">
            Archive
          </h1>
          {" "}
          <p className="banner-inner-excerpt animate-box animated animate__animated" data-animate="animate__fadeInUp">
            Explore our latest articles, beauty insights, and style recommendations curated by our team.
          </p>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="hero-container">
        <div className="row row-cols-lg-3 row-cols-2 row-cols-1 grid-spacer-3">
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
          {" "}
          <div className="col">
            <a className="card card-blog" href="single-post.html">
              <div className="image-container">
                <img alt="Blog Image" src="/assets/images/about123.jpg" />
              </div>
              {" "}
              <h4 className="blog-title">
                The Secret to Long-Lasting Bridal Makeup
              </h4>
            </a>
          </div>
          {" "}
          <div className="col">
            <a className="card card-blog" href="single-post.html">
              <div className="image-container">
                <img alt="Blog Image" src="/assets/images/serviceshairstyle11.jpg" />
              </div>
              {" "}
              <h4 className="blog-title">
                Hair Spa Rituals: Repair, Nourish &amp; Shine
              </h4>
            </a>
          </div>
          {" "}
          <div className="col">
            <a className="card card-blog" href="single-post.html">
              <div className="image-container">
                <img alt="Blog Image" src="/assets/images/servicesmakeupfashiongoal.jpg" />
              </div>
              {" "}
              <h4 className="blog-title">
                Glowing Skin Secrets: Facials for Every Skin Type
              </h4>
            </a>
          </div>
          {" "}
          <div className="col">
            <a className="card card-blog" href="single-post.html">
              <div className="image-container">
                <img alt="Blog Image" src="/assets/images/Dailymakeupimg.jpg" />
              </div>
              {" "}
              <h4 className="blog-title">
                Party-Perfect Makeup: From Day Chic to Evening Glam
              </h4>
            </a>
          </div>
        </div>
      </div>
    </section>
      </main>
      <Footer />
    </>
  )
}
