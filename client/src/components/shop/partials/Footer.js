import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "#303031", color: "#87898A" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
      <span>
      <strong> MUKKAM </strong><br /> <br />
      <strong>Contact us at:</strong> namitabarde5@gmail.com, atharvavohra132@gmail.com
      </span>  
      </footer>
    </Fragment>
  );
};

export default Footer;
