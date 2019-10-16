import React from 'react';
import { Link } from 'react-router-dom';

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
                  <Link to="/" className="footer__link">
                    Design-a-thon
                  </Link>
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
                  <Link to="/" className="footer__link">
                    About us
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to="/" className="footer__link">
                    Privacy Policy
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to="/" className="footer__link">
                    Omnibiz Market
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to="/" className="footer__link">
                    Reach and Partners
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to="/" className="footer__link">
                    Terms & Conditions
                  </Link>
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
                  <Link to="/" className="footer__link">
                    Create a website
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to="/" className="footer__link">
                    Register Your Business
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to="/" className="footer__link">
                    Sell Online
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to="/" className="footer__link">
                    Business Listing
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to="/" className="footer__link">
                    Business Scan
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to="/" className="footer__link">
                    Google My Business
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to="/" className="footer__link">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="footer-col">
            <h5 className="footer__heading">Follow Us</h5>
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="/" className="footer__link">
                  Facebook
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/" className="footer__link">
                  Twitter
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/" className="footer__link">
                  LinkeIn
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/" className="footer__link">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright">
        &copy; Copyright {new Date().getFullYear()} Omnibiz Africa
      </div>
    </div>
  </footer>
);
