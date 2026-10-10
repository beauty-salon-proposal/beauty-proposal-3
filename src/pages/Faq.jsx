import Header from "../components/Header"
import Footer from "../components/Footer"
import { cssObj } from "../lib/cssObj"

export default function Faq() {
  return (
    <>
      <Header />
      <main>
    <section className="sectio banner-inner">
      <div className="hero-container">
        <div className="banner-inner-container">
          <h1 className="banner-inner-title">
            FAQ
          </h1>
          {" "}
          <p className="banner-inner-excerpt animate-box animated animate__animated" data-animate="animate__fadeInUp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
    </section>
    <section className="section-py-small">
      <div className="hero-container">
        <div className="d-flex flex-column gspace-5">
          <div className="d-flex flex-column gspace-2 justify-content-center align-items-center text-center">
            <div className="sub-heading-double sub-heading-w-30 justify-content-center animate-box animated animate__animated" data-animate="animate__fadeInDown">
              <h6 className="sub-heading-text">
                FAQ
              </h6>
            </div>
            {" "}
            <h2 className="animate-box animated animate__animated" data-animate="animate__fadeInDown">
              Frequently Asked Question
            </h2>
          </div>
          {" "}
          <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
            <div className="col">
              <div className="accordion" id="faqAccordion1">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button aria-controls="faq1" aria-expanded="true" className="accordion-button" data-bs-target="#faq1" data-bs-toggle="collapse" type="button">
                      How to Change my Photo from Admin Dashboard?
                    </button>
                  </h2>
                  {" "}
                  <div className="accordion-collapse collapse show" data-bs-parent="#faqAccordion1" id="faq1">
                    <div className="accordion-body">
                      <span>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                      </span>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button aria-controls="faq2" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#faq2" data-bs-toggle="collapse" type="button">
                      How to Change my Password easily?
                    </button>
                  </h2>
                  {" "}
                  <div className="accordion-collapse collapse" data-bs-parent="#faqAccordion1" id="faq2">
                    <div className="accordion-body">
                      <span>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                      </span>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button aria-controls="faq3" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#faq3" data-bs-toggle="collapse" type="button">
                      How to Change my Subscription Plan using PayPal?
                    </button>
                  </h2>
                  {" "}
                  <div className="accordion-collapse collapse" data-bs-parent="#faqAccordion1" id="faq3">
                    <div className="accordion-body">
                      <span>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                      </span>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button aria-controls="faq4" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#faq4" data-bs-toggle="collapse" type="button">
                      How to Change my Password easily?
                    </button>
                  </h2>
                  {" "}
                  <div className="accordion-collapse collapse" data-bs-parent="#faqAccordion1" id="faq4">
                    <div className="accordion-body">
                      <span>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                      </span>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button aria-controls="faq5" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#faq5" data-bs-toggle="collapse" type="button">
                      How to Change my Subscription Plan using PayPal?
                    </button>
                  </h2>
                  {" "}
                  <div className="accordion-collapse collapse" data-bs-parent="#faqAccordion1" id="faq5">
                    <div className="accordion-body">
                      <span>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <div className="col">
              <div className="accordion" id="faqAccordion2">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button aria-controls="faq6" aria-expanded="true" className="accordion-button" data-bs-target="#faq6" data-bs-toggle="collapse" type="button">
                      How to Change my Photo from Admin Dashboard?
                    </button>
                  </h2>
                  {" "}
                  <div className="accordion-collapse collapse show" data-bs-parent="#faqAccordion2" id="faq6">
                    <div className="accordion-body">
                      <span>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                      </span>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button aria-controls="faq7" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#faq7" data-bs-toggle="collapse" type="button">
                      How to Change my Password easily?
                    </button>
                  </h2>
                  {" "}
                  <div className="accordion-collapse collapse" data-bs-parent="#faqAccordion2" id="faq7">
                    <div className="accordion-body">
                      <span>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                      </span>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button aria-controls="faq8" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#faq8" data-bs-toggle="collapse" type="button">
                      How to Change my Subscription Plan using PayPal?
                    </button>
                  </h2>
                  {" "}
                  <div className="accordion-collapse collapse" data-bs-parent="#faqAccordion2" id="faq8">
                    <div className="accordion-body">
                      <span>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                      </span>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button aria-controls="faq9" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#faq9" data-bs-toggle="collapse" type="button">
                      How to Change my Password easily?
                    </button>
                  </h2>
                  {" "}
                  <div className="accordion-collapse collapse" data-bs-parent="#faqAccordion2" id="faq9">
                    <div className="accordion-body">
                      <span>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                      </span>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button aria-controls="faq10" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#faq10" data-bs-toggle="collapse" type="button">
                      How to Change my Subscription Plan using PayPal?
                    </button>
                  </h2>
                  {" "}
                  <div className="accordion-collapse collapse" data-bs-parent="#faqAccordion2" id="faq10">
                    <div className="accordion-body">
                      <span>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
