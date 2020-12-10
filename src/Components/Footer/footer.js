import React from "react";
import { Card } from "react-bootstrap";
import "./footerStyle.css";
import { withRouter } from "react-router";

const footer = (props) => {
  if (
    props.location.pathname === "/" ||
    props.location.pathname === "/history" ||
    props.location.pathname === "/transfer" ||
    props.location.pathname === "/transfer/input" ||
    props.location.pathname === "/transfer/confirmation" ||
    props.location.pathname === "/transfer/success" ||
    props.location.pathname === "/topup" ||
    props.location.pathname === "/profile" ||
    props.location.pathname === "/profile/personal" ||
    props.location.pathname === "/profile/password" ||
    props.location.pathname === "/profile/phone" ||
    props.location.pathname === "/profile/pin" ||
    props.location.pathname === "/admin"
  ) {
    return (
      <Card.Body className="footer-color">
        <div className="row ml-5">
          <div className="col-lg-5 col-sm-6 text">
            {" "}
            2020 Zwallet. All right reserved.
          </div>
          <div className="col-lg-4 col-sm-3 text">+62 5637 8882 9901</div>
          <div className="col-lg-3 col-sm-3 text">contact@zwallet.com</div>
        </div>
      </Card.Body>
    );
  } else {
    return false;
  }
};

export default withRouter(footer);
