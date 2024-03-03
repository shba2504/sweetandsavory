import "../Footer/Footer.css";
import Images from "../../images/images";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div>
            <img src={Images.Logo2} alt="second restaurant logo" />
          </div>
          <div className="socialmedia">
            <FaFacebookF color="white" fontSize={20} className="icon1" />
            <FaInstagram color="white" fontSize={20} className="icon2" />
            <FaTwitter color="white" fontSize={20} className="icon3" />
            <FaLinkedinIn color="white" fontSize={20} className="icon4" />
          </div>
          <div class="copyright">Handcrafted by me &#169; 2024</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
