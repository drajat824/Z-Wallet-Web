import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Register = () => {

  let history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const [visiblePassword, setVisiblePassword] = useState(false);
  
  const onSubmit = (e) => {
    e.preventDefault()

    localStorage.setItem("name", firstName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    localStorage.getItem('name') && localStorage.getItem('email') && localStorage.getItem('password') ?
    ( history.replace("/register/pin")) : (alert('All fields must be filled'))
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
              <div
                className="d-flex flex-column"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                <div className="p-2">
                  <p
                    style={{
                      color: "white",
                      fontFamily: "Nunito Sans",
                      fontSize: "40px",
                    }}
                  >
                    Zwallet
                  </p>
                </div>
                <div className="p-2 d-sm-none d-md-block ">
                  <Image
                    src={require("../../Assets/phone.png")}
                    className="img-phone"
                  />
                  {/* <Image src={require("../Assets/line.png")} className="img-line"/> */}
                </div>
                <div
                  className="p-2"
                  style={{
                    fontFamily: "Nunito Sans",
                    color: "white",
                    fontSize: "17px",
                  }}
                >
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
            <div
              className="d-flex flex-column"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              <div className="p-2">
                <h4>
                  {" "}
                  Start Accessing Banking Needs <br /> With All Devices and All
                  Platforms <br /> With 30.000+ Users
                </h4>
              </div>
              <div className="p-2">
                <p className="text-description3">
                  Transfering money is eassier than ever, you can access <br />
                  Zwallet wherever you are. Desktop, laptop, mobile phone?{" "}
                  <br /> we cover all of that for you!
                </p>
              </div>

              <form
                onSubmit={(e) => onSubmit(e)}
                encType="multipart/form-data"
                style={{ marginTop: "100px" }}
              >
                <div className="p-2 d-flex justify-content-center">
                  <div className="d-flex flex-column">
                    <div className="input-login input-group  d-flex justify-content-center">
                      <label>
                        <Image
                          src={
                            !firstName
                              ? require("../../Assets/person.png")
                              : require("../../Assets/active/person.png")
                          }
                          style={{
                            width: "25px",
                            height: "25px",
                            marginRight: "20px",
                          }}
                        />
                        <input
                          style={{
                            backgroundColor: "transparent",
                            outline: "none",
                          }}
                          type="text"
                          className="border-0"
                          placeholder="Input your name"
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                        <hr
                          style={{
                            borderWidth: "2px",
                            borderColor: !firstName ? "#88888F" : "blue",
                          }}
                        />
                      </label>
                    </div>

                    <div className="input-login input-group  d-flex justify-content-center">
                      <label>
                        <Image
                          src={
                            !email
                              ? require("../../Assets/mail.png")
                              : require("../../Assets/active/mail.png")
                          }
                          style={{
                            width: "25px",
                            height: "25px",
                            marginRight: "20px",
                          }}
                        />
                        <input
                          style={{
                            backgroundColor: "transparent",
                            outline: "none",
                          }}
                          type="text"
                          className="border-0"
                          placeholder="Input your email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <hr
                          style={{
                            borderWidth: "2px",
                            borderColor: !email ? "#88888F" : "blue",
                          }}
                        />
                      </label>
                    </div>

                    <div className="input-login input-group  d-flex justify-content-center">
                      <label>
                        <Image
                          src={
                            !password
                              ? require("../../Assets/lock.png")
                              : require("../../Assets/active/lock.png")
                          }
                          style={{
                            width: "25px",
                            height: "25px",
                            marginRight: "20px",
                          }}
                        />
                        <input
                          style={{
                            backgroundColor: "transparent",
                            outline: "none",
                          }}
                          type={visiblePassword ? "text" : "password"}
                          className="border-0"
                          placeholder="Enter your password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <hr
                          style={{
                            borderWidth: "2px",
                            borderColor: !password ? "#88888F" : "blue",
                          }}
                        />
                      </label>
                      <section style={{ left: "10px" }}>
                        <div
                          onClick={() => {
                            setVisiblePassword(!visiblePassword);
                          }}
                          style={{ right: "5px", position: "absolute" }}
                        >
                          <Image
                            src={
                              visiblePassword
                                ? require("../../Assets/eye.png")
                                : require("../../Assets/eye-crossed.png")
                            }
                            style={{ width: "25px" }}
                          />
                        </div>
                      </section>
                    </div>
                  </div>
                </div>

                <div
                  className="p-2 d-flex justify-content-center"
                  style={{ marginTop: "70px" }}>
                  <button
                    href="/login"
                    style={{
                      width: "80%",
                      borderRadius: "20px",
                      border: "0",
                      outline: "none",
                      height: "60px",
                      backgroundColor:
                        firstName && email && password ? "#6379F4" : "#DADADA",
                      justifyContent: "center",
                    }}
                  >
                    <p
                      style={{
                        color:
                          firstName && email && password ? "white" : "#88888F",
                        fontWeight: "bold",
                        fontSize: "20px",
                        marginTop: "10px",
                      }}
                    >
                      Register
                    </p>
                  </button>
                </div>

              </form>

              <div className="p-2 d-flex justify-content-center">
                <p className="text-signup">
                  Have an account? <a href="/login"> Let’s Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
