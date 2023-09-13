import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import qs from "qs";
import { HeaderNav } from "../../../../Components/Header";

const ProfileAddPhone = () => {
  const [phone, setPhone] = useState("");
  const onSubmit = () => {
    Axios({
      method: "patch",
      url: "http://103.123.63.223:8000/profile/1",
      data: qs.stringify({
        phone: `+62${phone}`,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    })
      .then((res) => {
        alert("data Berhasil di ubah");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Container className="transfer-color-profile-phone mt-4">
        <div className="d-flex flex-column pb-5">
          <div className="p-1 mb-3">
            <div className="d-flex flex-column">
              <div className="p-2 text-style mb-3">Add Phone Number</div>
              <p className="ml-1">
                Add at least one phone number for the transfer <br /> ID so you
                can start transfering your money to <br /> another user.
              </p>
            </div>
          </div>

          <div className="p-1">
            <div className="d-flex flex-column">
              <div className="p-1">
                <Container className="margin-menu pb-3">
                  <Row className="d-flex justify-content-center mb-5">
                    <div>
                      <Image src={require("../../../../Assets/phone.png")} />
                    </div>
                    <p className="text-style ml-3">+62</p>
                    <div>
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        className="form border-0 input-pw ml-3"
                        placeholder="Add Phone Number"
                      />
                      <section></section>
                    </div>
                  </Row>
                  <Link>
                    <Row
                      onClick={() => onSubmit()}
                      className="justify-content-md-center mt-5"
                    >
                      <Col md={6} className="btn-menu-password">
                        <p className="mt-2 text-style-phone">
                          Add Phone Number
                        </p>
                      </Col>
                    </Row>
                  </Link>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProfileAddPhone;
