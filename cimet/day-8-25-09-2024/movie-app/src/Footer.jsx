import '../Styles/Footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    < div className='wrapper' >
      <div>
        <div>
          <p>Terms Of Use</p>
          <p>Privacy-Policy</p>
          <p>About</p>
          <p>Blog</p>
          <p>FAQ</p>
        </div >
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor .</p>
        </div>
        <div>
          <FaFacebookF />
          <FaInstagram />
          <FaGithub />
          <FaLinkedin />
        </div>
      </div>
    </div >
  )
}

export default Footer