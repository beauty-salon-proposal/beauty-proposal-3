import Header from "../components/Header"
import Footer from "../components/Footer"
import { cssObj } from "../lib/cssObj"

export default function SinglePost() {
  return (
    <>
      <Header />
      <main>
    <section className="sectio banner-inner">
      <div className="hero-container">
        <div className="banner-inner-container">
          <h1 className="banner-inner-title">
            Single Post
          </h1>
          {" "}
          <p className="banner-inner-excerpt animate-box animated animate__animated" data-animate="animate__fadeInUp">
            Read our in-depth guides on bridal beauty preparation, daily skincare routines, and timeless hairstyle trends.
          </p>
        </div>
      </div>
    </section>
    <section className="section-py-medium">
      <div className="hero-container">
        <div className="blog-post-content-container">
          <div className="blog-post-content-wraper">
            <div className="image-container blog-post-image">
              <img alt="Blog Post Image" src="/assets/images/hero-images245.jpg" />
            </div>
            {" "}
            <h2>
              The Ultimate Guide to Flawless Bridal Artistry &amp; Skincare
            </h2>
            {" "}
            <p>
              Your wedding day is one of the most memorable milestones in life, and preparing your skin for that natural, radiant glow requires thoughtful care and professional expertise. At Kalai's Beauty &amp; Academy, we guide brides through curated routines that bring out their true elegance.
            </p>
            {" "}
            <p>
              A successful bridal makeover starts weeks ahead of the big day with targeted skin hydration, gentle exfoliation, and personalized hair nourishment. Regular salon facial treatments combined with daily sun protection and deep conditioning build the perfect canvas for your bridal makeup.
            </p>
            {" "}
            <h3>
              Essential Pre-Bridal Skincare Tips
            </h3>
            {" "}
            <p>
              Hydration is the secret to lasting makeup. Drinking plenty of water, incorporating gentle hyaluronic serums, and scheduling monthly restorative facials help smooth texture and even out tone. Always avoid trying harsh unfamiliar chemicals immediately before your wedding events.
            </p>
            {" "}
            <h3>
              Choosing the Right Makeup &amp; Hair Styling
            </h3>
            {" "}
            <p>
              Whether you envision traditional South Indian bridal grandeur with fragrant jasmine and intricate hair accessories, or a contemporary soft-glam reception look, our artists personalize every shade and stroke to complement your bridal attire and lighting.
            </p>
          </div>
          {" "}
          <div className="blog-post-content-sidebar">
            <div className="card card-blog-recent">
              <h3>
                Recent Post
              </h3>
              {" "}
              <a href="single-post.html">
                <div className="row row-cols-md-2 row-cols-1 grid-spacer-2 align-items-center">
                  <div className="col">
                    <div className="image-container recent-post-img">
                      <img alt="Single Post" src="/assets/images/servicesdailymakeup.jpg" />
                    </div>
                  </div>
                  {" "}
                  <div className="col">
                    <div className="d-flex flex-column gspace-1">
                      <h4 className="blog-title recent-post">
                        Chic &amp; Glam: Your Daily Dose of Beauty Inspiration
                      </h4>
                      {" "}
                      <p className="blog-title-excerpt recent-post">
                        Discover daily makeup tips and skincare habits that keep you glowing effortlessly…
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              {" "}
              <a href="single-post.html">
                <div className="row row-cols-md-2 row-cols-1 grid-spacer-2 align-items-center">
                  <div className="col">
                    <div className="image-container recent-post-img">
                      <img alt="Single Post" src="/assets/images/Event-amkeupimg1223.jpg" />
                    </div>
                  </div>
                  {" "}
                  <div className="col">
                    <div className="d-flex flex-column gspace-1">
                      <h4 className="blog-title recent-post">
                        Unveiling Beauty: Your Guide to Radiant Hair, Skin, and Style
                      </h4>
                      {" "}
                      <p className="blog-title-excerpt recent-post">
                        Simple steps and salon treatments to revitalize damaged hair and protect your skin…
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              {" "}
              <a href="single-post.html">
                <div className="row row-cols-md-2 row-cols-1 grid-spacer-2 align-items-center">
                  <div className="col">
                    <div className="image-container recent-post-img">
                      <img alt="Single Post" src="/assets/images/about123.jpg" />
                    </div>
                  </div>
                  {" "}
                  <div className="col">
                    <div className="d-flex flex-column gspace-1">
                      <h4 className="blog-title recent-post">
                        The Secret to Long-Lasting Bridal Makeup
                      </h4>
                      {" "}
                      <p className="blog-title-excerpt recent-post">
                        Expert advice on primer, setting sprays, and smudge-proof beauty techniques…
                      </p>
                    </div>
                  </div>
                </div>
              </a>
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
