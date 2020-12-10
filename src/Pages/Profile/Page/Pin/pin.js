import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import { Navigation } from "../../../../Components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { PatchProfile } from "../../../../Redux/Actions/Users";
import { HeaderNav } from "../../../../Components/Header";

const Content = (props) => {


  const Auth = useSelector((s) => s.Auth);
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [pin5, setPin5] = useState("");
  const [pin6, setPin6] = useState("");
  
  let pin = pin1 + pin2 + pin3 + pin4 + pin5 + pin6

  const dispatch = useDispatch();

  const onSubmit = () => {

    dispatch(
      PatchProfile({
        pin: pin,
        token: Auth.data.token,
      })
    )

  }

  return (
    <>
      <Container className="phone-color-pin">
        <div className="d-flex flex-column pb-5">
          <div className="p-1 mb-3">
            <div className="d-flex flex-column">
              <div className="p-2 text-style mb-3">Change Pin</div>
              <p className="ml-2" style={{color: '#7A7886'}}>
                Enter your current 6 digits Zwallet PIN <br/> below to continue
                to the next steps.
              </p>
            </div>
          </div>

          <div className="p-1">
            <div className="d-flex flex-column">
              <div className="p-1">
              
              <div className="d-none d-md-block d-lg-block d-xl-block "> 
                <div className="d-flex justify-content-center" style={{marginTop: '100px'}}>

                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin1(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
                </div>
                
                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin2(e.target.value)}  className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
                </div>

                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin3(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
                </div>

                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin4(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
                </div>

                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin5(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
                </div>

                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin6(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
                </div>
                
              </div>
              </div>

              <div className="d-block d-md-none d-lg-none d-xl-none" style={{paddingRight: '25px'}}> 
                <div className="d-flex justify-content-center" style={{marginTop: '100px'}}>

                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin1(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
                </div>
                
                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin2(e.target.value)}  className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
                </div>

                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin3(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
                </div>

                </div>
                <div className="d-flex justify-content-center" style={{marginTop: '10px'}}>

                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin4(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
                </div>

                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin5(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
                </div>

                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin6(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
                </div>
                
              </div>
              </div>

              <div className="p-2 d-flex justify-content-center" style={{ marginTop: "70px" }}>
                <button
                    onClick={() => {
                      if(pin.length <= 5){
                        alert('Pin must be 6')
                      } else {
                      onSubmit()
                      }
                    }}
                    style={{
                      width: "70%",
                      borderRadius: "20px",
                      border: "0",
                      outline: "none",
                      height: "60px",
                      backgroundColor:
                        pin1 && pin2 && pin3 && pin4 && pin5 && pin6 ? "#6379F4" : "#DADADA",
                    }}
                  >
                    <p style={{
                        color:
                        pin1 && pin2 && pin3 && pin4 && pin5 && pin6 ? "white" : "#88888F",
                        fontWeight: "bold",
                        fontSize: "20px",
                        marginTop: "10px",
                      }}> Change PIN
                    </p>
                  </button>
                </div>
                  
  
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

const ProfilePin = (props) => {
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

export default ProfilePin;
