import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { SiAndroid, SiApple } from "react-icons/si";

const FooterMid = () => {
  return (
    <div className="footer-mid flex justify-between px-10 my-4 py-10 rounded-sm">
      <div className="download-app flex gap-3">
        <p className="font-semibold mr-3">Download App</p>
        <SiAndroid className="app-icon" size={25} />
        <SiApple className="app-icon" size={25} />
      </div>

      <div className="social-icons flex gap-3">
        <FaFacebook className="social-icon" size={25} />
        <FaTwitter className="social-icon" size={25} />
        <FaInstagram className="social-icon" size={25} />
        <FaYoutube className="social-icon" size={25} />
        <FaLinkedin className="social-icon" size={25} />
      </div>

      <div className=" text-base font-light">
        © 2024 Tata CLiQ | All rights reserved
      </div>
    </div>
  );
};

export default FooterMid;
