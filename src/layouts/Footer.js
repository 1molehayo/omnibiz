import React from 'react';

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="footer-col">
            <div>
              <h5 className="footer__heading">Reach Us</h5>
              <ul className="footer__list">
                <li className="footer__item mt-0">
                  <p className="footer__link footer__link--none">
                    203 Herbert Macaulay Way, <br />
                    Adekunle Yaba Lagos NG.
                  </p>
                </li>
                <li className="footer__item">
                  <a href="tel:09070400695" className="footer__link">
                    0907 040 0695
                  </a>
                </li>
              </ul>

              <h5 className="footer__heading">News and Events</h5>
              <ul className="footer__list">
                <li className="footer__item">
                  <a
                    href="https://thenest.ng/designathon"
                    className="footer__link"
                  >
                    Design-a-thon
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="footer-col">
            <div>
              <h5 className="footer__heading">Useful Links</h5>
              <ul className="footer__list">
                <li className="footer__item">
                  <a
                    href="https://www.omnibiz.com/index.html"
                    className="footer__link"
                  >
                    About us
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="https://www.omnibiz.com/privacypolicy.html"
                    className="footer__link"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="https://market.omnibiz.com/"
                    className="footer__link"
                  >
                    Omnibiz Market
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="https://www.omnibiz.com/reachandpartners.html"
                    className="footer__link"
                  >
                    Reach and Partners
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="https://www.omnibiz.com/termsandconditions.html"
                    className="footer__link"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="footer-col">
            <div>
              <h5 className="footer__heading">Resources</h5>
              <ul className="footer__list">
                <li className="footer__item">
                  <a
                    href="https://www.omnibiz.com/business-website.html"
                    className="footer__link"
                  >
                    Create a website
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="https://omnibiz.com/registerbusiness/"
                    className="footer__link"
                  >
                    Register Your Business
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="https://www.omnibiz.com/online-store.html"
                    className="footer__link"
                  >
                    Sell Online
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="https://www.omnibiz.com/business-listing.html"
                    className="footer__link"
                  >
                    Business Listing
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="https://www.omnibiz.com/business-scan.html"
                    className="footer__link"
                  >
                    Business Scan
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="https://www.omnibiz.com/google-my-business-listing.html"
                    className="footer__link"
                  >
                    Google My Business
                  </a>
                </li>
                <li className="footer__item">
                  <a href="https://blog.omnibiz.com/" className="footer__link">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="footer-col">
            <div>
              <h5 className="footer__heading">Follow Us</h5>
              <ul className="footer__list">
                <li className="footer__item">
                  <a
                    href="https://www.facebook.com/pages/category/Product-Service/Omnibiz-Africa-502665823597619/"
                    className="footer__link"
                  >
                    <span className="icon-facebook-logo mr-2"></span>
                    Facebook
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="https://twitter.com/omnibizafrica"
                    className="footer__link"
                  >
                    <span className="icon-twitter mr-2"></span>
                    Twitter
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="https://www.linkedin.com/company/omnibiz-africa/?originalSubdomain=ng"
                    className="footer__link"
                  >
                    <span className="icon-linkedin mr-2"></span>
                    LinkedIn
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="https://www.youtube.com/channel/UCS2MwkXbUr9YRV8GND394kw"
                    className="footer__link"
                  >
                    <span className="icon-youtube mr-2"></span>
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        &copy; Copyright {new Date().getFullYear()} Omnibiz Africa
      </div>
    </div>
  </footer>
);
