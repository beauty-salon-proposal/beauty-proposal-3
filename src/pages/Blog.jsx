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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
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
                Unveiling Beauty: Your Guide to Radiant Hair, Skin, and Style
              </h4>
            </a>
          </div>
          {" "}
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
                Unveiling Beauty: Your Guide to Radiant Hair, Skin, and Style
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
