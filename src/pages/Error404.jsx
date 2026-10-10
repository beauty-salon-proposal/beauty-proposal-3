import Header from "../components/Header"
import Footer from "../components/Footer"
import { cssObj } from "../lib/cssObj"

export default function Error404() {
  return (
    <>
      <Header />
      <main>
    <section className="sectio banner-notfound">
      <div className="hero-container">
        <div className="banner-notfound-container">
          <h1 className="banner-notfound-title">
            404
          </h1>
          {" "}
          <h5 className="banner-notfound-subtitle">
            Oopss your page not found!!!
          </h5>
          {" "}
          <p className="banner-notfound-excerpt animate-box animated animate__animated" data-animate="animate__fadeInUp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          {" "}
          <div>
            <a className="btn btn-primary btn-nohover" href="index.html">
              Back Home
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
