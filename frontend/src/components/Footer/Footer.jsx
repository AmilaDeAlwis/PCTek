import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* Footer about and social links */}
          <img src={assets.logo} alt="" className="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ipsa
            perferendis odit, non magnam repellendus suscipit at in ad optio
            voluptas. Temporibus similique maxime debitis nostrum quis dolorum
            sapiente ea.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        {/* Footer links */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+97-77-123-4567</li>
            <li>contact@pctek.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &#169; PCTek.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
