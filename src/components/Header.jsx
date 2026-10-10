import { cssObj } from "../lib/cssObj"

export default function Header() {
  return (
    <>
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="logo-container header-logo">
            <a className="navbar-brand" href="index.html">
              <img alt="Kalai's Beauty Salon & Spa" className="img-fluid" src="/assets/images/kalai-logo.png" style={{ maxHeight: "48px", width: "auto" }} />
            </a>
          </div>
          {" "}
          <div className="nav-link-wrapper">
            <button aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" className="btn nav-btn" data-bs-target="#navbarNav" data-bs-toggle="collapse" type="button">
              <i className="fa-solid fa-bars" />
            </button>
            {" "}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a aria-current="page" className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                {" "}
                <li className="nav-item">
                  <a aria-current="page" className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                {" "}
                <li className="nav-item">
                  <a aria-current="page" className="nav-link" href="services.html">
                    Services
                  </a>
                </li>
                {" "}
                <li className="nav-item dropdown">
                  <a aria-expanded="false" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">
                    Pages
{" "}
                    <i className="fa-solid fa-angle-down" />
                  </a>
                  {" "}
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="pricing.html">
                        Treatments &amp; Services
                      </a>
                    </li>
                    {" "}
                    <li>
                      <a className="dropdown-item" href="contact.html">
                        Contact Us
                      </a>
                    </li>
                    {" "}
                    <li>
                      <a className="dropdown-item" href="faq.html">
                        FAQs
                      </a>
                    </li>
                  </ul>
                </li>
                {" "}
                <li className="nav-item dropdown">
                  <a aria-expanded="false" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">
                    Blog
{" "}
                    <i className="fa-solid fa-angle-down" />
                  </a>
                  {" "}
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="blog.html">
                        Archive
                      </a>
                    </li>
                    {" "}
                    <li>
                      <a className="dropdown-item" href="single-post.html">
                        Blog Detail
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {" "}
          <div className="navbar-cta-container">
            <a className="btn btn-primary btn-nohover" href="contact.html">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
    <aside>
      <div className="sidebar-overlay" />
      {" "}
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <img alt="Kalai's Beauty Salon & Spa" className="logo" src="/assets/images/kalai-logo.png" style={{ maxHeight: "45px", width: "auto" }} />
          </div>
          {" "}
          <button className="close-btn-sidebar">
            <span>
              X
            </span>
          </button>
        </div>
        {" "}
        <ul className="sidebar-menu">
          <li>
            <a href="index.html">
              Home
            </a>
          </li>
          {" "}
          <li>
            <a href="about.html">
              About
            </a>
          </li>
          {" "}
          <li>
            <a href="services.html">
              Services
            </a>
          </li>
          {" "}
          <li className="sidebar-dropdown">
            <div className="dropdown-header">
              <a href="#">
                Pages
              </a>
              {" "}
              <button className="sidebar-dropdown-btn">
                <i className="fa-solid fa-angle-down" />
              </button>
            </div>
            {" "}
            <ul className="sidebar-dropdown-menu">
              <li>
                <a href="pricing.html">
                  Treatments &amp; Services
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html">
                  Contact Us
                </a>
              </li>
              {" "}
              <li>
                <a href="faq.html">
                  FAQs
                </a>
              </li>
            </ul>
          </li>
          {" "}
          <li className="sidebar-dropdown">
            <div className="dropdown-header">
              <a href="#">
                Blog
              </a>
              {" "}
              <button className="sidebar-dropdown-btn">
                <i className="fa-solid fa-angle-down" />
              </button>
            </div>
            {" "}
            <ul className="sidebar-dropdown-menu">
              <li>
                <a href="blog.html">
                  Archive
                </a>
              </li>
              {" "}
              <li>
                <a href="single-post.html">
                  Blog Detail
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
    </>
  )
}
