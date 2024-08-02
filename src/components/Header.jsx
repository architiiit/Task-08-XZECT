// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <>

          {/*...::: Header Start :::... */}
          <header
          className="site-header site-header--absolute is--white py-3"
          id="sticky-menu"
        >
          <div className="container-default">
            <div className="flex items-center justify-between gap-x-8">
              {/* Header Logo */}
              <a className="" href="/">
                <img
                  src="assets/img/logo-dark.png"
                  alt="Masco"
                  width={109}
                  height={24}
                />
              </a>
              {/* Header Logo */}
              {/* Header Navigation */}
              <div className="menu-block-wrapper">
                <div className="menu-overlay" />
                <nav className="menu-block" id="append-menu-header">
                  <div className="mobile-menu-head">
                    <div className="go-back">
                      <i className="fa-solid fa-angle-left" />
                    </div>
                    <div className="current-menu-title" />
                    <div className="mobile-menu-close">×</div>
                  </div>
                  <ul className="site-menu-main">
                    <li className="nav-item nav-item-has-children">
                      <a href="#" className="nav-link-item drop-trigger">
                        Demo <i className="fa-solid fa-angle-down" />
                      </a>
                      <ul className="sub-menu" id="submenu-1">
                        <li className="sub-menu--item">
                          <a href="/">Digital</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/index-2">Software</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/index-3">Fitness Apps</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/index-4">Courses</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/index-5">SEO Agency</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/index-6">Email</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/index-7">Web Hosting</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/index-8">Startup</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/index-9">Tracking Software</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/index-10">AI Writing Tool</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/index-11">Website Builder</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/index-12">Photo Editor</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/index-13">initial coin offering (ICO)</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/index-14">AI Content</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/index-15">IT Service</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link-item" href="/about">
                        About
                      </a>
                    </li>
                    <li className="nav-item nav-item-has-children">
                      <a href="#" className="nav-link-item drop-trigger">
                        Services
                        <i className="fa-solid fa-angle-down" />
                      </a>
                      <ul className="sub-menu" id="submenu-2">
                        <li className="sub-menu--item">
                          <a href="/services">Services</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/service-details">Service Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-has-children">
                      <a href="#" className="nav-link-item drop-trigger">
                        Pages <i className="fa-solid fa-angle-down" />
                      </a>
                      <ul className="sub-menu" id="submenu-3">
                        <li className="sub-menu--item nav-item-has-children">
                          <a href="#" data-menu-get="h3" className="drop-trigger">
                            blogs <i className="fa-solid fa-angle-right" />
                          </a>
                          <ul className="sub-menu shape-none" id="submenu-4">
                            <li className="sub-menu--item">
                              <a href="/blog">blogs</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/blog-details">blog details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a href="#" data-menu-get="h3" className="drop-trigger">
                            Team
                            <i className="fa-solid fa-angle-right" />
                          </a>
                          <ul className="sub-menu shape-none" id="submenu-5">
                            <li className="sub-menu--item">
                              <a href="/teams">Teams</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a href="#" data-menu-get="h3" className="drop-trigger">
                            FAQ
                            <i className="fa-solid fa-angle-right" />
                          </a>
                          <ul className="sub-menu shape-none" id="submenu-6">
                            <li className="sub-menu--item">
                              <a href="/faq">FAQ-4</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/faq-2">FAQ-3</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/faq-3">FAQ-2</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/faq-4">FAQ-1</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a href="#" data-menu-get="h3" className="drop-trigger">
                            Portfolio
                            <i className="fa-solid fa-angle-right" />
                          </a>
                          <ul className="sub-menu shape-none" id="submenu-7">
                            <li className="sub-menu--item">
                              <a href="/portfolio">Classic</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/portfolio-2">Masonry</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/portfolio-3">Modern</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/portfolio-4">Minimal</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/portfolio-details">Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a href="#" data-menu-get="h3" className="drop-trigger">
                            Pricing
                            <i className="fa-solid fa-angle-right" />
                          </a>
                          <ul className="sub-menu shape-none" id="submenu-8">
                            <li className="sub-menu--item">
                              <a href="/pricing">Pricing-3</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/pricing-2">Pricing-2</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a href="#" data-menu-get="h3" className="drop-trigger">
                            Careers
                            <i className="fa-solid fa-angle-right" />
                          </a>
                          <ul className="sub-menu shape-none" id="submenu-9">
                            <li className="sub-menu--item">
                              <a href="/careers">Career</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/career-details">Career Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a href="#" data-menu-get="h3" className="drop-trigger">
                            Utilities
                            <i className="fa-solid fa-angle-right" />
                          </a>
                          <ul className="sub-menu shape-none" id="submenu-10">
                            <li className="sub-menu--item">
                              <a href="/login">Login</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/signup">Signup</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/reset-password">Password</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/coming-soon">Coming Soon</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/error-404">Error 404 Not Found</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-has-children">
                      <a href="#" className="nav-link-item drop-trigger">
                        Contact
                        <i className="fa-solid fa-angle-down" />
                      </a>
                      <ul className="sub-menu" id="submenu-11">
                        <li className="sub-menu--item">
                          <a href="/contact">Contact-3</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/contact-2">Contact-2</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/contact-3">Contact-1</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Header Navigation */}
              {/* Header User Event */}
              <div className="flex items-center gap-6">
                <a
                  className="btn-text hidden text-white hover:text-ColorBlue sm:inline-block"
                  href="/login"
                >
                  Login
                </a>
                <a
                  className="btn is-blue is-transparent btn-animation group hidden rounded-[3px] sm:inline-block"
                  href="/signup"
                >
                  <span>Sign up free</span>
                </a>
                {/* Responsive Offcanvas Menu Button */}
                <div className="block lg:hidden">
                  <button
                    id="openBtn"
                    className="hamburger-menu mobile-menu-trigger"
                  >
                    <span />
                    <span />
                    <span />
                  </button>
                </div>
              </div>
              {/* Header User Event */}
            </div>
          </div>
        </header>
        {/*...::: Header End :::... */}
        </>
  );
};

export default Header;
