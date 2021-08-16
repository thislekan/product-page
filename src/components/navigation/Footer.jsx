import { ReactComponent as Card1 } from "../../images/card1.svg";
import { ReactComponent as Card2 } from "../../images/card2.svg";
import { ReactComponent as Master } from "../../images/master.svg";
import { ReactComponent as Visa } from "../../images/visa.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  return (
    <section className="footer">
      <div className="footer__contact">
        <div className="footer__contact__text">
          <p className="in-touch">Let’s stay in touch</p>
          <p className="heads-up">
            We’ll give you a heads up on new Lumin products, deals, and events,
            plus tips & tricks on how to keep your skin looking its damned
            finest.
          </p>

          <div className="email">
            <form action="" method="post">
              <input
                type="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                className="email"
              />
            </form>
          </div>
        </div>

        <div className="footer__contact__links">
          <div className="sect">
            <p className="sect__title">Shop</p>
            <div className="sect__title__links">
              <a href="/">Skin</a>
              <a href="/">Hair</a>
              <a href="/">Body</a>
            </div>
          </div>
          <div className="sect">
            <p className="sect__title">About</p>
            <div className="sect__title__links">
              <a href="/">Blog</a>
              <a href="/">How To</a>
              <a href="/">Ingredients</a>
              <a href="/">Reviews</a>
              <a href="/">FAQ</a>
            </div>
          </div>
          <div className="sect">
            <p className="sect__title">More</p>
            <div className="sect__title__links">
              <a href="/">Jobs</a>
              <a href="/">Wholesale</a>
              <a href="/">Heroes Program</a>
              <a href="/">Request Personal Data</a>
            </div>
          </div>
          <div className="sect social-media">
            {/* font awesome here */}
            <a href="/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__support">
        <p className="footer__support__title">Need help?</p>
        <div className="footer__support__addresses">
          <p>
            Contact us through our <a href="/">Support Concierge</a>
          </p>
          <p>
            Or email us at <a href="/">support@luminskin.com</a>
          </p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="footer__brands">
        <div className="footer__brands__imgs">
          <Card1 />
          <Card2 />
          <Master />
          <Visa />
        </div>
        <div className="footer__brands__copyright">
          <p>
            © 2021, <a href="/">Lumin</a>
          </p>
        </div>
      </div>
      <div className="footer__terms">
        <a href="/">Privacy Policy</a>
        <a href="/">Return Policy</a>
        <a href="/">Terms of service</a>
      </div>
      <div className="footer__office-address">
        <p>3600 Wilshire Boulevard, Suite 1700, Los Angeles, CA 90010</p>
      </div>
    </section>
  );
};

export default Footer;
