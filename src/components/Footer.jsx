import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";

function Footer() {
  return (
    <div  className=" text-white p-3 w-100 bott" style={{ backgroundColor: "#1976d2"  }} >

    <div style={{ textAlign: 'center' }}>
  <h3>Contact US</h3>
  <h5><MdEmail />resumebulider@gmail.com</h5>
  <h5> <FaPhoneFlip />6458457548</h5>
  <h4>Keep In Touch With Us On</h4>
  <div   style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        fontSize: '20px',
      }}>
<FaInstagram />
<FaFacebook />
<FaXTwitter />
<br />
  </div>
  <p>Designed & build with ❤️ using React</p>
</div>
    </div>
  )
}

export default Footer