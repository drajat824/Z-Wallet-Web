import React from "react";
import { Container, Row, Col, Image, Media, Nav } from "react-bootstrap";
import "./dashboardStyle.css";
import { Navigation } from "../../Components/Navigation";
import { Link } from "react-router-dom";
import { GetProfile } from "../../Redux/Actions/Users";
import { GetTransfer } from "../../Redux/Actions/Transfer";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Components/Loading";
import { HeaderNav } from "../../Components/Header";
import NumberFormat from 'react-number-format';
import { TextBlock } from "react-placeholder/lib/placeholders";

const Content = () => {
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);

  React.useEffect(() => {
    dispatch(
      GetProfile({
        token: Auth.data.token,
      })
    );
  }, []);

  React.useEffect(() => {
    dispatch(
      GetTransfer({
        token: Auth.data.token,
      })
    );
  }, []);

    const { getTr, loading } = useSelector((s) => s.Transfer);
    const { myData } = useSelector((s) => s.Users);

    console.log(getTr)

  return (
    <>
      <Container>
        <Row className="balance-color">
          <Col>
            <Col>
              <Col className="mt-2 mb-2" style={{color: '#E0E0E0'}}>Balance</Col>
              <div>
                <Col className="text-bal balance-text">
                <NumberFormat value={myData ? myData.data[0].balance : "0"} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                </Col>
                <Col style={{color: '#E0E0E0'}} className="mt-2 mb-2">
                  {myData ? (myData.data[0].phone? (myData.data[0].phone) : ('+62')) : ("+62")}
                </Col>
              </div>
            </Col>
          </Col>
          <Col md={3} className="mt-5 mb-5">
            <Col>
              <Col className="mb-3 btn-ballance">
                <>
                  <Image src={require("../../Assets/transfer-btn.png")} />
                  <span>Transfer</span>
                </>
              </Col>
              <Col className="btn-ballance">
                <>
                  <Image src={require("../../Assets/topup-btn.png")} />
                  <span>Topup</span>
                </>
              </Col>
            </Col>
          </Col>
        </Row>

        <Row>
          
          <Col style={{marginTop: "20px"}}>
            <div className="dashboard-color">
              <div className="d-flex flex-column">
                <div className="p-2">
                  <div className="container">
                    <div className="row justify-content-around">

                      <Col md={7}>
                        <Image src={require("../../Assets/arrow-up.png")} />
                        <p style={{color: '#6A6A6A', fontSize: '12px'}}>Income</p>
                        <p style={{color: '#3A3D42', fontWeight: 'bold'}}>
                        {
                        !getTr || !myData ? ( <div style={{ height: "50vh" }} /> ) 
                        : 
                        (

                          <NumberFormat value={
                            Array.from(getTr.map((e) => {
                            if( e.id_sender == myData.data[0].id_profile) {
                              return e.amount
                            }
                          })).filter((a) => {
                            return a != undefined
                          }).reduce((a, b) => {
                            if(b != undefined || b != null){
                            return a + b
                            }
                          }, 0)} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />

                          
                        )}
                        </p>
                      </Col>

                      <Col>
                        <Image src={require("../../Assets/arrow-down.png")} />
                        <p style={{color: '#6A6A6A', fontSize: '12px'}}>Expense</p>
                        <p style={{color: '#3A3D42', fontWeight: 'bold'}}>
                        {
                        !getTr || !myData ? ( <div style={{ height: "50vh" }} /> ) 
                        : 
                        (

                          <NumberFormat value={
                            Array.from(getTr.map((e) => {
                            if( e.id_receiver == myData.data[0].id_profile) {
                              return e.amount
                            }
                          })).filter((a) => {
                            return a != undefined
                          }).reduce((a, b) => {
                            if(b != undefined || b != null){
                            return a + b
                            }
                          }, 0)} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />

                          
                        )}
                        </p>
                      </Col>
                    </div>
                  </div>
                </div>
                <div className="p-2 d-flex align-items-end">
                  <canvas id="canvas"></canvas>
                </div>
              </div>
            </div>
          </Col>

          <Col style={{marginTop: "20px"}}>
            <div className="dashboard-color">
              <div className="d-flex flex-column">
                <div className="p-2">
                  <div className="container">
                    <div className="row">
                      <div className="col-9">Transaction History</div>
                      <div className="col">
                        <Link to="">See all</Link>
                      </div>
                    </div>
                  </div>
                </div>

              <div style={{overflow: 'hidden'}}>
                <div style={{height: "400px", overflow: 'scroll'}}>
                <div className="p-2">
                  {loading ? (
                    <Loading />
                  ) : !getTr ? (
                    <div style={{ height: "50vh" }} />
                  ) : (
                    getTr.map((item) => (
                      <Container className="mb-3">
                        <Row>
                          <Col>
                            <Nav className="nav-profile form-inline my-3 my-lg-0 pr-5">
                            <Image
                                className="mr-sm-2"
                                src={
                                  item.photo
                                    ? 'http://103.123.63.223:8000' +
                                      "/images/" +
                                      item.photo
                                    : require("../../Assets/picture.png")
                                }
                                width="50px"
                                height="50px"
                                style={{ borderRadius: "10px" }}
                              />
                              <Media.Body className="ml-2 mr-2">
                                <ul className="navbar-nav mr-sm-0">
                                  <li className="text-style">
                                    {item.name}
                                  </li>
                                  {/* <li>{item.name} </li> */}
                                </ul>
                              </Media.Body>
                            </Nav>
                          </Col>
                          {!myData? 
                          (<TextBlock
                            rows={1}
                            style={{ width: 170, marginBottom: 10, height: 25 }}
                            color="#f0f0f0"
                          />) : (
                          <p className="mr-2" style={{color: item.id_sender == myData.data[0].id_profile ? '#FF5B37' : '#1EC15F', fontWeight: 'bold', marginTop: '10px'}}>
                            <NumberFormat value={item.amount} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                          </p>
                          )}
                        </Row>
                      </Container>
                    ))
                  )}
                </div>
                </div>
              </div>

              </div>
            </div>
          </Col>
        
        </Row>
      </Container>
    </>
  );
};

const Profile = (props) => {
  return (
    <>
      <HeaderNav />
      <section class="my-5 container">
        <div class="row">
          <Col lg={3}>
            <Navigation imgDb={require("../../Assets/active/grid.png")} colorDb={"blue"} prefix="ppp"/>
          </Col>
          <Col>
            <Content />
          </Col>
        </div>
      </section>
    </>
  );
};

export default Profile;
