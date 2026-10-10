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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            {" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            {" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida erat mi, vel pretium justo consectetur vitae. Vivamus sed lacinia tellus, quis fringilla urna. Sed finibus dolor metus. Nam aliquet enim sit amet metus bibendum, non pulvinar enim iaculis. Quisque vulputate eget nibh non feugiat. Proin non faucibus ipsum. Quisque rhoncus orci quis nisl pretium, quis ullamcorper erat pharetra. Fusce sit amet rhoncus odio, id lobortis neque. Suspendisse sit amet augue massa.
            </p>
            {" "}
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            {" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida erat mi, vel pretium justo consectetur vitae. Vivamus sed lacinia tellus, quis fringilla urna. Sed finibus dolor metus. Nam aliquet enim sit amet metus bibendum, non pulvinar enim iaculis. Quisque vulputate eget nibh non feugiat. Proin non faucibus ipsum. Quisque rhoncus orci quis nisl pretium, quis ullamcorper erat pharetra. Fusce sit amet rhoncus odio, id lobortis neque. Suspendisse sit amet augue massa.
            </p>
            {" "}
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            {" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida erat mi, vel pretium justo consectetur vitae. Vivamus sed lacinia tellus, quis fringilla urna. Sed finibus dolor metus. Nam aliquet enim sit amet metus bibendum, non pulvinar enim iaculis. Quisque vulputate eget nibh non feugiat. Proin non faucibus ipsum. Quisque rhoncus orci quis nisl pretium, quis ullamcorper erat pharetra. Fusce sit amet rhoncus odio, id lobortis neque. Suspendisse sit amet augue massa.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec…
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec…
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
                        Five Chilling Instances of Slips In Time
                      </h4>
                      {" "}
                      <p className="blog-title-excerpt recent-post">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec…
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
