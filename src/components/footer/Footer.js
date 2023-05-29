import React from "react";
import "./footer.css";
// import Istagram from "../../../assets/images/instagram.png";
// import Facebook from "../../../assets/images/facebook.png";
// import Twitter from "../../../assets/images/twitter.png";
// import Linkdin from "../../../assets/images/linkidin.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employeer</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Resourses</h4>
            <a href="/resource">
              <p>Resourcr Center</p>
            </a>
            <a href="/testimonials">
              <p>Testimonials</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Paterneship</h4>
            <a href="/employer">
              <p></p>
            </a>
            <a href="/best">
              <p></p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Company</h4>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/contact-us">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Comming Soon on</h4>
            <div className="socialmedia">
              <a href="facebook.com">
                <p>
                  {/* <img src={Istagram} alt="dfdfdg" /> */}
                </p>
              </a>
              <a href="https://www.facebook.com/ParoisseGikondo/">
                <p>
                  {/* <img src={Facebook} alt="" /> */}
                </p>
              </a>

              <a href="twiitwe.com">
                {" "}
                <p>
              +
                </p>
              </a>
              <a href="linkdin.com">
                <p>
                  {/* <img src={Linkdin} alt="" /> */}
                </p>
              </a>
            </div>
          </div>
          <hr />

          <div className="sb_footer-below">
            <div className="sb_footer-copyright">
              <p>&copy; {new Date().getFullYear()} ubukode-RIC-House. All right Reserved</p>
            </div>
            <div className="sb_footer-below-links">
              <a href="/terms">
                <div>
                  <p>Terms & Conditions</p>
                </div>
              </a>
              <a href="/privacy">
                <div>
                  <p>Privacy</p>
                </div>
              </a>
              <a href="/security">
                <div>
                  <p>Security</p>
                </div>
              </a>
              <a href="/cokkies">
                <div>
                  <p>Cokiees</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
