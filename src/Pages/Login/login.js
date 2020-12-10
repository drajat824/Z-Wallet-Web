import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogin } from "../../Redux/Actions/Auth";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const dispatch = useDispatch();

  const Login = (e) => {
    e.preventDefault(e);

    dispatch(
      AuthLogin({
        email: email,
        password: password,
        history: props.history,
      })
    );
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
                <div className="p-2 d-none d-md-block d-lg-block d-xl-block" style={{alignSelf: 'center'}}>
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

          <div
            className="col"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <div className="d-flex flex-column">
              <div className="p-1">
                <h4 className="text-description2">
                  {" "}
                  Start Accessing Banking Needs <br /> With All Devices and All
                  Platforms <br /> With 30.000+ Users
                </h4>
              </div>

              <div className="p-1">
                <p>
                  Transfering money is eassier than ever, you can access <br />
                  Zwallet wherever you are. Desktop, laptop, mobile phone?{" "}
                  <br /> we cover all of that for you!
                </p>
              </div>

              <form
                onSubmit={(e) => Login(e)}
                encType="multipart/form-data"
                style={{ marginTop: "100px" }}>
                <div
                  className="p-3 d-flex"
                  style={{ justifyContent: "center" }}
                >
                  <div className="d-flex flex-column">
                    <div className="p-2 d-flex justify-content-center">
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
                          placeholder="Enter your email"
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

                    <div className="p-3">
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
                              outline: "none"
                            }}
                            type={visiblePassword ? "text" : "password"}
                            className="border-0"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)} />
                          <hr
                            style={{
                              borderWidth: "2px",
                              borderColor: !password ? "#88888F" : "blue",
                            }}
                          />
                        </label>

                        <section style={{right: 0, position: 'absolute'}}>
                          <div
                            onClick={() => {
                              setVisiblePassword(!visiblePassword);
                            }}>
                            <Image
                              src={
                                visiblePassword
                                  ? require("../../Assets/eye.png")
                                  : require("../../Assets/eye-crossed.png")
                              }
                              style={{ width: "25px"}}/>
                          </div>
                        </section>
                        
                      </div>

                      <a href="">
                        <div className="d-flex justify-content-end">
                          <p style={{ color: "#88888F" }}>Forgot Password?</p>
                        </div>
                      </a>
                    </div>

                  </div>
                </div>

                <div
                  className="p-2 d-flex justify-content-center"
                  style={{ marginTop: "70px" }}
                >
                  <button
                    style={{
                      width: "80%",
                      borderRadius: "20px",
                      border: "0",
                      outline: "none",
                      height: "60px",
                      backgroundColor:
                        email && password ? "#6379F4" : "#DADADA",
                      justifyContent: "center",
                    }}
                  >
                    <p
                      style={{
                        color: email && password ? "white" : "#88888F",
                        fontWeight: "bold",
                        fontSize: "20px",
                        marginTop: "10px",
                      }}
                    >
                      Login
                    </p>
                  </button>
                </div>
              </form>

              <div
                style={{ bottom: "10px", left: "50px", right: "50px" }}
                className="p-2 d-flex justify-content-center" >
                <p style={{ color: "rgba(58, 61, 66, 0.8)" }}>
                  Don’t have an account? <a href="/register"> Let’s Sign Up</a>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
