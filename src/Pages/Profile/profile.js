import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import Axios from "axios";
import { Navigation } from "../../Components/Navigation";
import jwt from "jsonwebtoken";
import { GetProfile, setImage } from "../../Redux/Actions/Users";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogout } from "../../Redux/Actions/Auth";
import { ProfileLogout } from "../../Redux/Actions/Users";
import qs from "qs";
import { HeaderNav } from "../../Components/Header";
import { TextBlock } from "react-placeholder/lib/placeholders";

const Content = (props) => {
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const { myData, loading } = useSelector((s) => s.Users);

  React.useEffect(() => {
    dispatch(
      GetProfile({
        token: Auth.data.token,
      })
    );
  }, []);

  const _setImage = (e) => {
    const data = new FormData();
    data.append("image", e.target.files[0]);
    e.preventDefault();

    dispatch(
      setImage({
        token: Auth.data.token,
        data,
      })
    );
  };

  return (
    <>
      <Container className="profile-color" style={{height: '650px'}}>

        <Container className="pt-4 mb-4">
          <Row className="justify-content-center">
            <ul className="navbar-nav mr-sm-0">
              <li className="mb-3">
                <div className="text-center">
                  <Image
                    src={
                      myData ? (
                        myData.data[0].photo ? (
                          'http://103.123.63.223:8000' +
                          "/images/" +
                          myData.data[0].photo
                        ) : (
                          require("../../Assets/picture.png")
                        )
                      ) : (
                        <div>Loading.. </div>
                      )
                    }
                    width="80px"
                    height="80px"
                    style={{ borderRadius: "10px" }}
                  />
                </div>

                <div className="text-center">
                  <label
                    className="text-black-50 small"
                    style={{ cursor: "pointer" }}
                  >
                    <div>Edit</div>
                    <input
                      type="file"
                      className="d-none"
                      onChange={_setImage}
                      accept="image/*"
                    />
                  </label>
                </div>
              </li>

              <li className="text-center">
                <p className="font-weight-bold" style={{fontSize: '20px'}}>
                  {myData ? (
                    myData.data[0].name
                  ) : (
                    <TextBlock
                      rows={1}
                      style={{ width: 170, marginBottom: 10, height: 25 }}
                      color="#f0f0f0"
                    />
                  )}
                </p>
                <p style={{color: "#7A7886"}}>
                  {myData ? (
                    myData.data[0].phone
                  ) : (
                    <TextBlock
                      rows={1}
                      style={{ width: 170, height: 25 }}
                      color="#f0f0f0"
                    />
                  )}
                </p>
              </li>
            </ul>
          </Row>
        </Container>

        <Container>

          <Row className="justify-content-center">
            <Col md={6} className="btn-menu mb-4">
              <Link to="/profile/personal">
              <Row style={{marginTop: '15px'}}>
                  <Col className="text-menu" style={{fontWeight: 'bold', color: '#4D4B57'}}>
                    Personal Info
                  </Col>
                  <Image style={{marginRight: '10px'}} src={require("../../Assets/arrow-left.png")} />
                </Row>
              </Link>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md={6} className="btn-menu mb-4">
              <Link to="/profile/password">
              <Row style={{marginTop: '15px'}}>
                  <Col className="text-menu" style={{fontWeight: 'bold', color: '#4D4B57'}}>
                    Change Password
                  </Col>
                  <Image style={{marginRight: '10px'}} src={require("../../Assets/arrow-left.png")} />
                </Row>
              </Link>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md={6} className="btn-menu mb-4">
              <Link to="/profile/pin">
              <Row style={{marginTop: '15px'}}>
                  <Col className="text-menu" style={{fontWeight: 'bold', color: '#4D4B57'}}>
                    Change Pin
                  </Col>
                  <Image style={{marginRight: '10px'}} src={require("../../Assets/arrow-left.png")} />
                </Row>
              </Link>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md={6} className="btn-menu mb-4">
            <Row style={{marginTop: '15px'}}>
                  <Col className="text-menu" style={{fontWeight: 'bold', color: '#4D4B57'}}>
                  <Link className="text-menu" onClick={() => props.onLogout()} style={{ color: '#4D4B57'}}>
                    Logout
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

const Profile = (props) => {
  let location = useLocation();
  let history = useHistory();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(AuthLogout());
    dispatch(ProfileLogout());
    history.replace("/login");
  };

  return (
    <>
      <HeaderNav />
      <section class="my-5 container">
        <div class="row">
          <Col lg={3}>
            <Navigation {...props} imgPr={require("../../Assets/active/user.png")} colorPr={"blue"} />
          </Col>
          <Col>
            <Content location={location} onLogout={onLogout} />
          </Col>
        </div>
      </section>
    </>
  );
};

export default Profile;
