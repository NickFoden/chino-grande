import React from "react";
import { SiInstagram } from "react-icons/si";

const Footer = () => (
  <footer className="footer">
    <div className="column">
      <div className="footer_row">
        <p>253 Grand Street &nbsp;</p>
        <p>Brooklyn, NY 11211</p>
      </div>
      <span className="footer_row">
        <a href="mailto:info@chinograndenyc.com">info@chinograndenyc.com</a>
        <span className="footer_space">&nbsp;-&nbsp;</span>{" "}
        <a href="tel:19179090466">917 909-0466</a>
        <span className="footer_space">&nbsp;-&nbsp;</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            href="https://www.instagram.com/chinograndenyc/"
            target="_blank"
            aria-label="open the chino grande instagram page"
          >
            <SiInstagram size={20} />
          </a>
        </div>
      </span>
    </div>
  </footer>
);

export default Footer;
