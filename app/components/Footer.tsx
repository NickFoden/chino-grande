import React from "react";
import { SiInstagram } from "react-icons/si";

const Footer = () => (
  <footer className="footer">
    <div className="column">
      <div className="footer_row">
        <p>253 Grand Street&nbsp;</p>
        <p>Brooklyn, NY 11211</p>
      </div>
      <span className="footer_row">
        <a className="blue_links" href="mailto:info@chinograndenyc.com">
          info@chinograndenyc.com
        </a>
        <span className="footer_space">&nbsp;-&nbsp;</span>{" "}
        <a className="blue_links" href="tel:19179090466">
          917 909-0466
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
