"use client";
import "./Footers.css";

import {
  Footer,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle
} from "flowbite-react";

import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble
} from "react-icons/bs";

export default function FoodFooter() {
  return (
    <Footer bgDark>
      <div className="w-full">
        
        {/* TOP GRID */}
{/* TOP GRID — PARALLEL HEADINGS */}
<div className="footer-top">

  <div className="footer-section">
    <FooterTitle title="Food Delivery" />
    <FooterLinkGroup col>
      <FooterLink href="#">Nearby Restaurants</FooterLink>
      <FooterLink href="#">Top Dishes</FooterLink>
      <FooterLink href="#">Popular Orders</FooterLink>
      <FooterLink href="#">Offers & Discounts</FooterLink>
    </FooterLinkGroup>
  </div>

  <div className="footer-section">
    <FooterTitle title="Customer Support" />
    <FooterLinkGroup col>
      <FooterLink href="#">Help Center</FooterLink>
      <FooterLink href="#">Track Order</FooterLink>
      <FooterLink href="#">Report Issue</FooterLink>
      <FooterLink href="#">Contact Us</FooterLink>
    </FooterLinkGroup>
  </div>

  <div className="footer-section">
    <FooterTitle title="Our Company" />
    <FooterLinkGroup col>
      <FooterLink href="#">About Us</FooterLink>
      <FooterLink href="#">Careers</FooterLink>
      <FooterLink href="#">Delivery Partners</FooterLink>
      <FooterLink href="#">Privacy Policy</FooterLink>
    </FooterLinkGroup>
  </div>

  <div className="footer-section">
    <FooterTitle title="Download App" />
    <FooterLinkGroup col>
      <FooterLink href="#">Android App</FooterLink>
      <FooterLink href="#">iOS App</FooterLink>
      <FooterLink href="#">Partner App</FooterLink>
      <FooterLink href="#">Rider App</FooterLink>
    </FooterLinkGroup>
  </div>

</div>


        {/* BOTTOM BAR */}
<div className="footer-bottom">
  
  {/* SOCIAL ICONS – NOW LEFT SIDE */}
  <div className="social-left">
    <FooterIcon href="#" icon={BsFacebook} />
    <FooterIcon href="#" icon={BsInstagram} />
    <FooterIcon href="#" icon={BsTwitter} />
    <FooterIcon href="#" icon={BsGithub} />
    <FooterIcon href="#" icon={BsDribbble} />
  </div>

  <FooterCopyright
    href="#"
    by="FoodExpress Delivery™"
    year={2025}
  />
</div>

      </div>
    </Footer>
  );
}
