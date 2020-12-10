import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Axios from "axios";
import { Navigation } from "../../../../Components/Navigation";
import jwt from "jsonwebtoken";
import { GetProfile } from "../../../../Redux/Actions/Users";
import { useDispatch, useSelector } from "react-redux";
import { HeaderNav } from "../../../../Components/Header";
import { TextBlock } from "react-placeholder/lib/placeholders";

const Content = (props) => {

  const dispatch = useDispatch();
  const { myData, loading } = useSelector((s) => s.Users);
  const Auth = useSelector((s) => s.Auth);

  React.useEffect(() => {

    async function diss() {
      await dispatch(
      GetProfile({
        token: Auth.data.token,
      })
    )
    }

    diss()

  }, []);





  return (
    <>

      <Container className="transfer-color-confirmation d-block d-lg-none d-xl-none" >
        <div className="d-flex flex-column pb-5">
          <div className="p-1 mb-3">
            <div className="d-flex flex-column">
              <div className="p-2 text-style mb-3">Personal Information</div>
              <p className="ml-1" style={{color: '#7A7886', fontSize: '13px'}}>
                We got your personal information from the sign up
                proccess. If you want to make changes on your
                information, contact our support.
              </p>
            </div>
          </div>

          <div className="p-1">
            <div className="d-flex flex-column">
              <div className="p-1 text-style"></div>

              <div className="p-1 transfer-color-sub mb-3">
                <div className="d-flex flex-column">
                  <div className="p-1">First Name</div>
                  <div className="p-1 text-style">
                    {myData ? (
                      myData.data[0].name.split(' ').slice(0, 1).join(' ')
                    ) : (
                      <TextBlock
                        rows={1}
                        style={{ width: 170, marginBottom: 10, height: 25 }}
                        color="#f0f0f0"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="p-1 transfer-color-sub  mb-3">
                <div className="d-flex flex-column">
                  <div className="p-1">Last Name</div>
                  <div className="p-1 text-style">
                    {myData ? (
                    myData.data[0].name.split(' ').slice(1, 3).join(' ')
                    ) : (
                      <TextBlock
                        rows={1}
                        style={{ width: 170, marginBottom: 10, height: 25 }}
                        color="#f0f0f0"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="p-1 transfer-color-sub  mb-3">
                <div className="d-flex flex-column">
                  <div className="p-1">Verifed E-mail</div>
                  <div className="p-1 text-style">
                    {myData ? (
                      myData.data[0].email
                    ) : (
                      <TextBlock
                        rows={1}
                        style={{ width: 170, marginBottom: 10, height: 25 }}
                        color="#f0f0f0"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="p-1 transfer-color-sub">
                <Row>
                  <Col>
                    <div className="d-flex flex-column">
                      <div className="p-1">Phone Number</div>
                      <div className="p-1 text-style">
                        {myData ? (
                          myData.data[0].phone
                        ) : (
                          <TextBlock
                            rows={1}
                            style={{ width: 170, marginBottom: 10, height: 25 }}
                            color="#f0f0f0"
                          />
                        )}
                      </div>
                    </div>
                  </Col>
                  <Link to="/phone" style={{marginRight: '25px'}}>
                    <Col>Manage</Col>
                  </Link>
                </Row>
              </div>

            </div>
          </div>
        </div>
      </Container>

      <Container className="transfer-color-confirmation d-none d-lg-block d-xl-block" style={{height: '650px'}}>
        <div className="d-flex flex-column pb-5">
          <div className="p-1 mb-3">
            <div className="d-flex flex-column">
              <div className="p-2 text-style mb-3">Personal Information</div>
              <p className="ml-1" style={{color: '#7A7886'}}>
                We got your personal information from the sign up <br />{" "}
                proccess. If you want to make changes on <br /> your
                information, contact our support.
              </p>
            </div>
          </div>

          <div className="p-1">
            <div className="d-flex flex-column">
              <div className="p-1 text-style"></div>

              <div className="p-1 transfer-color-sub mb-3">
                <div className="d-flex flex-column">
                  <div className="p-1">First Name</div>
                  <div className="p-1 text-style">
                    {myData ? (
                      myData.data[0].name.split(' ').slice(0, 1).join(' ')
                    ) : (
                      <TextBlock
                        rows={1}
                        style={{ width: 170, marginBottom: 10, height: 25 }}
                        color="#f0f0f0"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="p-1 transfer-color-sub  mb-3">
                <div className="d-flex flex-column">
                  <div className="p-1">Last Name</div>
                  <div className="p-1 text-style">
                    {myData ? (
                    myData.data[0].name.split(' ').slice(1, 3).join(' ')
                    ) : (
                      <TextBlock
                        rows={1}
                        style={{ width: 170, marginBottom: 10, height: 25 }}
                        color="#f0f0f0"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="p-1 transfer-color-sub  mb-3">
                <div className="d-flex flex-column">
                  <div className="p-1">Verifed E-mail</div>
                  <div className="p-1 text-style">
                    {myData ? (
                      myData.data[0].email
                    ) : (
                      <TextBlock
                        rows={1}
                        style={{ width: 170, marginBottom: 10, height: 25 }}
                        color="#f0f0f0"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="p-1 transfer-color-sub">
                <Row>
                  <Col>
                    <div className="d-flex flex-column">
                      <div className="p-1">Phone Number</div>
                      <div className="p-1 text-style">
                        {myData ? (
                          myData.data[0].phone
                        ) : (
                          <TextBlock
                            rows={1}
                            style={{ width: 170, marginBottom: 10, height: 25 }}
                            color="#f0f0f0"
                          />
                        )}
                      </div>
                    </div>
                  </Col>
                  <Link style={{marginRight: '25px'}}>
                    <Col>Manage</Col>
                  </Link>
                </Row>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

const ProfilePersonal = (props) => {
  return (
    <>
      <HeaderNav />
      <section class="my-5 container">
        <div class="row">
          <Col lg={3}>
            <Navigation {...props} imgPr={require("../../../../Assets/active/user.png")} colorPr={"blue"} />
          </Col>
          <Col>
            <Content />
          </Col>
        </div>
      </section>
    </>
  );
};

export default ProfilePersonal;
