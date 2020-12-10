import React from "react";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {

    const {error } = useSelector((s) => s.Auth);

    const name = localStorage.getItem('name')
    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')

    console.log(error)

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
                Your PIN Was Successfully Created
                </h4>
              </div>
              <div className="p-2">
                <p className="text-description3">
                Your PIN was successfully created and you can now access <br/> 
                all the features in Zwallet. Login to your new account and <br/> 
                start exploring!
                </p>
              </div>

              <Link to="/login">

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
                      backgroundColor: "#6379F4",
                      justifyContent: "center",
                    }}>
                    <p
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "20px",
                        marginTop: "10px",
                      }}>
                      Login
                    </p>
                  </button>
                </div>

                </Link>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default RegisterSuccess;
