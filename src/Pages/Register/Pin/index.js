import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AuthRegister } from "../../../Redux/Actions/Auth";
import { useHistory } from "react-router-dom";
import "./style.css"

const RegisterPin = () => {

    let history = useHistory();

    const [pin1, setPin1] = useState("");
    const [pin2, setPin2] = useState("");
    const [pin3, setPin3] = useState("");
    const [pin4, setPin4] = useState("");
    const [pin5, setPin5] = useState("");
    const [pin6, setPin6] = useState("");
    let pin = pin1 + pin2 + pin3 + pin4 + pin5 + pin6

    const dispatch = useDispatch();

    const name = localStorage.getItem('name')
    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      AuthRegister({
        name : name,
        email: email,
        password: password,
        pin: pin
      })
    )

    history.replace("/register/success")

  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="bg-1 col-sm-12 col-lg-6 "
            style={{ background: "rgba(99, 121, 244, 1)" }}
          >
            <Container fluid>
            <div className="d-flex flex-column" style={{paddingTop: '20px', paddingBottom: '20px'}}>
                <div className="p-2">
                <p style={{color: 'white', fontFamily: 'Nunito Sans', fontSize: '40px'}}>
                    Zwallet
                    </p>
                </div>
                <div className="p-2 d-sm-none d-md-block ">
                  <Image
                    src={require("../../../Assets/phone.png")}
                    className="img-phone"
                  />
                </div>
                <div className="p-2" style={{fontFamily: 'Nunito Sans', color: 'white', fontSize: '17px'}}>
                  <p>App that Covering Banking Needs.</p>
                  <p>
                    Zwallet is an application that focussing in banking needs
                    for all users in the world. Always updated and always
                    following world trends. 5000+ users registered in Zwallet
                    everyday with worldwide users coverage.
                  </p>
                </div>
              </div>
            </Container>
          </div>

          <div className="col">
            <div className="d-flex flex-column" style={{paddingTop: '20px', paddingBottom: '20px'}}>
              <div className="p-2">
                <h4>
                  {" "}
                  Secure Your Account, Your Wallet,<br/>
                  and Your Data With 6 Digits PIN<br/>
                  That You Created Yourself.
                </h4>
              </div>
              <div className="p-2">
                <p className="text-description3">
                Create 6 digits pin to secure all your money and your data in <br/>
                Zwallet app. Keep it secret and don’t tell anyone about your <br/> 
                Zwallet account password and the PIN.
                </p>
              </div>

              <form onSubmit={(e) => onSubmit(e)} encType="multipart/form-data" style={{marginTop: '100px'}}>
                <div className="p-2 d-flex justify-content-center">

                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin1(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '20px'}} />
                </div>
                
                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin2(e.target.value)}  className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '20px'}} />
                </div>

                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin3(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '20px'}} />
                </div>

                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin4(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '20px'}} />
                </div>

                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin5(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '20px'}} />
                </div>

                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin6(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '20px'}} />
                </div>
                
              </div>

              <div className="p-2 d-flex justify-content-center" style={{ marginTop: "70px" }}>
                <button
                    onClick={(e) => onSubmit(e)}
                    style={{
                      width: "80%",
                      borderRadius: "20px",
                      border: "0",
                      outline: "none",
                      height: "60px",
                      backgroundColor:
                        pin1 && pin2 && pin3 && pin4 && pin5 && pin6 ? "#6379F4" : "#DADADA",
                      justifyContent: "center",
                    }}
                  >
                    <p
                      style={{
                        color:
                        pin1 && pin2 && pin3 && pin4 && pin5 && pin6 ? "white" : "#88888F",
                        fontWeight: "bold",
                        fontSize: "20px",
                        marginTop: "10px",
                      }}>
                      Confirm
                    </p>
                  </button>
                </div>
                  
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPin;
