import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AuthLogout } from "../../Redux/Actions/Auth";
import { ProfileLogout } from "../../Redux/Actions/Users";
import { useDispatch } from "react-redux";

import "./navigationStyle.css";

const Content = (props) => {
  const {
    imgDb,
    colorDb,
    imgTr,
    colorTr,
    imgTopup,
    colorTopup,
    imgPr,
    colorPr
  } = props

  console.log(props)

  return (
    <>
    
     <div className="p-2 d-block d-lg-none d-xl-none navigation-color" style={{marginBottom: "25px", height: "80px"}}>
        <Container style={{paddingTop: "20px"}}>
        <div className="d-flex flex-row" style={{justifyContent: 'space-around'}}>
          <div>
            <Link to="/" style={{color: colorDb? {colorDb} : 'black'}}>
            <Image src={ imgDb? imgDb : require("../../Assets/db.png" )}/>
            </Link>
          </div>
          <div>
            <Link to="/transfer" style={{color: colorDb? {colorDb} : 'black'}}>
            <Image src={ imgTr? imgTr : require("../../Assets/transfer.png")}/>
            </Link>
          </div>
          <div>
            <Link to="/topup" style={{color: colorDb? {colorDb} : 'black'}}>
            <Image  src={ imgTopup ? imgTopup : require("../../Assets/topup.png")}/>
            </Link>
          </div>
          <div>
            <Link to="/profile" style={{color: colorDb? {colorDb} : 'black'}}>
            <Image src={ imgPr ? imgPr : require("../../Assets/profile.png")}/>
            </Link>
          </div>
          <div>
            <Link style={{color: "black"}} onClick={() => props.onLogout()}>
            <Image src={require("../../Assets/logout.png")}/>
            </Link>
          </div>
        </div>
        </Container>
      </div>

      <div className="p-2 d-none d-lg-block d-xl-block navigation-color">
        <Container>
          <div className="d-flex align-items-start flex-column">
            <div className="mb-auto p-2">
              <div className="d-flex align-items-start flex-column">
                <div className="mb-auto p-2">
                  <div className="d-flex flex-column">
                    <div className="mb-5 mt-3">
                      <Image
                        className="mr-3"
                        src={ imgDb? imgDb : require("../../Assets/db.png" )}
                      />
                      <span className="text-menu">
                        <Link to="/" style={{color: colorDb? {colorDb} : 'black'}}>Dashboard</Link>
                      </span>
                    </div>

                    <div className="mb-5">
                      <Image
                        className="mr-3"
                        src={ imgTr? imgTr : require("../../Assets/transfer.png")}
                      />
                      <span className="text-menu">
                        <Link to="/transfer" style={{color: colorTr? {colorTr} : 'black'}}>Transfer</Link>
                      </span>
                    </div>

                    <div className="mb-5">
                      <Image
                        className="mr-3"
                        src={ imgTopup ? imgTopup : require("../../Assets/topup.png")}
                      />
                      <span className="text-menu">
                        <Link to="/topup" style={{color: colorTopup? {colorTopup} : 'black'}}>Topup</Link>
                      </span>
                    </div>

                    <div className="margin-nav">
                      <Image
                        className="mr-3"
                        src={ imgPr ? imgPr : require("../../Assets/profile.png")}
                      />
                      <span className="text-menu">
                        <Link to="/profile" style={{color: colorPr? {colorPr} : 'black'}}>Profile</Link>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-5 mt-3 ml-2" style={{bottom: 0, position: 'absolute'}}>
                  <Image
                    className="mr-3"
                    src={require("../../Assets/logout.png")} />
                  <span className="text-menu">
                    <Link style={{color: "black"}} onClick={() => props.onLogout()}>Logout</Link>
                  </span>
                </div>

              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

const Navigation = (props) => {
  const {
    imgDb,
    colorDb,
    imgTr,
    colorTr,
    imgTopup,
    colorTopup,
    imgPr,
    colorPr
  } = props

  console.log(props)
  let location = useLocation();
  let history = useHistory();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(AuthLogout());
    dispatch(ProfileLogout());
    history.replace("/login");
  };

  return <Content imgDb={imgDb} colorDb={colorDb} colorPr={colorPr} colorTopup={colorTopup} colorTr={colorTr} imgTr={imgTr} imgTopup={imgTopup} imgPr={imgPr} location={location} onLogout={onLogout} />;
};

export default Navigation;
