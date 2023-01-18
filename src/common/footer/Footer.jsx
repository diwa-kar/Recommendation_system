import React from "react"
import "./style.css"
import { Text } from "@nextui-org/react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            {/* <h1>Bonik</h1> */}
            <Text
            h1
            size={45}
            className="dq-head"
            css={{
              textGradient: "45deg, $red600 , $black 80%",
            }}
            weight="bold"
          >
           DigiVerZ
          </Text>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>136, Arcot Rd, AVM Nagar, Saligramam, Chennai, Tamil Nadu 600093, India </li>
              <li>Email: support@digiverz.com</li>
              <li>Phone: +91 6383308393</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
