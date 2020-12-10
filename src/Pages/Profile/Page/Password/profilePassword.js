import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import qs from "qs";
import { Navigation } from "../../../../Components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { PatchProfile } from "../../../../Redux/Actions/Users";
import { HeaderNav } from "../../../../Components/Header";

const Content = () => {
  const dispatch = useDispatch();

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [password3, setPassword3] = useState("");
  const [visiblePassword1, setVisiblePassword1] = useState(false);
  const [visiblePassword2, setVisiblePassword2] = useState(false);
  const [visiblePassword3, setVisiblePassword3] = useState(false);
  
  const Auth = useSelector((s) => s.Auth);
  const onSubmit = () => {

    if (password2 != password3){
      alert('Password must be the same')
    } else if (password3.length <= 5 ) {
      alert('Password must be more than 6')
    }else {
      dispatch(
        PatchProfile({
          password: password3,
          token: Auth.data.token,
        })
      ) 
    }
  };

  return (
    <>
      <Container className="transfer-color-confirmation">
        <div className="d-flex flex-column pb-5">
          <div className="p-1 mb-3">
            <div className="d-flex flex-column">
              <div className="p-2 text-style mb-3">Change Password</div>
              <p className="ml-1" style={{color: '#7A7886'}}>
                You must enter your current password and then <br /> type your
                new password twice.
              </p>
            </div>
          </div>

          <div className="p-1">
            <div className="d-flex flex-column">
              <div className="p-1">
                <Container className="margin-menu pb-3" style={{paddingRight: '10%'}}>

                  {/* <Row className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center">
                    <label style={{width: '100%'}}>
                      <Image style={{width: '25px', height: '25px'}} src={!password1 ? require("../../../../Assets/lock.png") : require("../../../../Assets/active/lock.png")} />
                      <input style={{ backgroundColor: "transparent", outline: "none" }}
                        onChange={(e) => setPassword1(e.target.value)}
                        type={visiblePassword1? 'text' : 'password'}
                        className="form border-0 input-pw ml-2"
                        placeholder="Current password" />
                        <Image onClick={() => { setVisiblePassword1(!visiblePassword1)}} src={ visiblePassword1 ? require("../../../../Assets/eye.png") : require("../../../../Assets/eye-crossed.png")} style={{position: 'absolute', width: '25px'}}/>
                      <hr style={{ borderWidth: "2px", borderColor: !password1 ? "#88888F" : "blue", width: '110%'}}/>
                      </label>
                    </div>
                  </Row> */}

                  <Row className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center">
                    <label style={{width: '100%'}}>
                      <Image style={{width: '25px', height: '25px'}} src={!password2 ? require("../../../../Assets/lock.png") : require("../../../../Assets/active/lock.png")} />
                      <input style={{ backgroundColor: "transparent", outline: "none" }}
                        onChange={(e) => setPassword2(e.target.value)}
                        type={visiblePassword2? 'text' : 'password'}
                        className="form border-0 input-pw ml-2"
                        placeholder="New password" />
                        <Image onClick={() => { setVisiblePassword2(!visiblePassword2)}} src={ visiblePassword2 ? require("../../../../Assets/eye.png") : require("../../../../Assets/eye-crossed.png")} style={{position: 'absolute', width: '25px'}}/>
                      <hr style={{ borderWidth: "2px", borderColor: !password2 ? "#88888F" : "blue", width: '110%'}}/>
                      </label>
                    </div>
                  </Row>

                  <Row className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center">
                    <label style={{width: '100%'}}>
                      <Image style={{width: '25px', height: '25px'}} src={!password3 ? require("../../../../Assets/lock.png") : require("../../../../Assets/active/lock.png")} />
                      <input style={{ backgroundColor: "transparent", outline: "none" }}
                        onChange={(e) => setPassword3(e.target.value)}
                        type={visiblePassword3? 'text' : 'password'}
                        className="form border-0 input-pw ml-2"
                        placeholder="Repeat new password" />
                        <Image onClick={() => { setVisiblePassword3(!visiblePassword3)}} src={ visiblePassword3 ? require("../../../../Assets/eye.png") : require("../../../../Assets/eye-crossed.png")} style={{position: 'absolute', width: '25px'}}/>
                      <hr style={{ borderWidth: "2px", borderColor: !password3 ? "#88888F" : "blue", width: '110%'}}/>
                      </label>
                    </div>
                  </Row>

                  <div className="p-2 d-flex justify-content-center" style={{ marginTop: "85px" }}>
                <button
                    onClick={() => onSubmit()}
                    style={{
                      width: "70%",
                      borderRadius: "20px",
                      border: "0",
                      outline: "none",
                      height: "60px",
                      backgroundColor:
                        password2 && password3 ? "#6379F4" : "#DADADA",
                    }}
                  >
                    <p style={{
                        color:
                        password2 && password3 ? "white" : "#88888F",
                        fontWeight: "bold",
                        fontSize: "20px",
                        marginTop: "10px",
                      }}> Change PIN
                    </p>
                  </button>
                </div>

                </Container>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

const ProfilePassword = (props) => {
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

export default ProfilePassword;
