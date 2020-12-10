import React from "react";
import { Container, Row, Image, Col } from "react-bootstrap";
import "./style.css";
import { GetProfileTransfer, GetProfile } from "../../../../Redux/Actions/Users";
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from "react-router-dom";
import { HeaderNav } from "./../../../../Components/Header";
import { Navigation } from "../../../../Components/Navigation";
import NumberFormat from 'react-number-format';

const Content = (props) => {

    const history = useHistory()
    const amount = localStorage.getItem('amount')
    const notes = localStorage.getItem('notes')
    const name = localStorage.getItem('NameReceiver')
    const phone = localStorage.getItem('PhoneReceiver')
    const date = localStorage.getItem('Date')

    const Auth = useSelector((s) => s.Auth);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(
          GetProfileTransfer({
            id: localStorage.getItem("id"),
            token: Auth.data.token,
          })
        )
      }, []);

      React.useEffect(() => {
        dispatch(
          GetProfile({
            token: Auth.data.token,
          })
        );
      }, []);

    const  { myData, dataTr }  = useSelector((s) => s.Users);

    const onSubmit = () => {
        localStorage.removeItem('id')
        localStorage.removeItem('amount')
        localStorage.removeItem('PhoneReceiver')
        localStorage.removeItem('NameReceiver')
        localStorage.removeItem('notes')
        localStorage.removeItem('MyBalance')

        history.push('/')
    }

  return (
    <>
        <Container className="transfer-color-success">
          <Row className="justify-content-center">
            <Image
              className="img-success mt-3"
              src={require("../../../../Assets/transfer-success.png")}
            />
          </Row>
          <div className="d-flex flex-column">
            <div className="p-1">
              <div className="d-flex flex-column mt-3">
                <div className="p-1 mb-2" style={{backgroundColor: 'white', 
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)', 
                borderRadius: '25px', height: '70px'}}>
                  <div className="d-flex flex-column">
                    <div className="p-1">Amount</div>
                    <div className="p-1 text-style">
                    <NumberFormat value={amount}  displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                    </div>
                  </div>
                </div>

                <div className="p-1 mb-2" style={{backgroundColor: 'white', 
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)', 
                borderRadius: '25px', height: '70px'}}>
                  <div className="d-flex flex-column">
                    <div className="p-1">Balance Left</div>
                    <div className="p-1 text-style">
                    <NumberFormat value={myData? (myData.data[0].balance) : ('0')}  displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                      </div>
                  </div>
                </div>

                <div className="p-1 mb-2" style={{backgroundColor: 'white', 
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)', 
                borderRadius: '25px', height: '70px'}}>
                  <div className="d-flex flex-column">
                    <div className="p-1">Date & Time</div>
                    <div className="p-1 text-style">{date}</div>
                  </div>
                </div>

                <div className="p-1 mb-2" style={{backgroundColor: 'white', 
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)', 
                borderRadius: '25px', height: '70px'}}>
                  <div className="d-flex flex-column">
                    <div className="p-1">Notes</div>
                    <div className="p-1 text-style">{notes}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1">
              <div className="d-flex flex-column">
                <div className="p-2 text-style">Transfer To</div>
                <div className="p-2 transfer-color-sub">
                  <div className="p-1 tr-box">
                    <div className="nav-profile form-inline my-3 my-lg-0">
                        <Image
                        src={
                        !dataTr ? (
                            <div />
                        ) : !dataTr.data.photo ? (
                            require("../../../../Assets/picture.png")
                        ) : (
                            'http://localhost:8000' +
                            "/images/" +
                            dataTr.data.photo
                        )
                        }
                        width="50px"
                        height="50px"
                        style={{ borderRadius: "10px" }}
                    />
                      <ul className="navbar-nav mr-sm-0 ml-2">
                        <li className="text-style">
                          {name}
                        </li>
                        <li>{phone == 'null' ? '' : phone }</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1 mt-2">
              <Row className="d-flex justify-content-end align-items-end mb-3 mr-4">
                <button className="btn-share mr-2">
                  <Image src={require("../../../../Assets/share.png")} />
                </button>

                <button className="btn-download-success mr-2">
                  <Image src={require("../../../../Assets/download.png")} />
                  <span className="text-download">Download PDF</span>
                </button>

                <a onClick={() => onSubmit()}>
                  <button className="btn-continue-success text-back-success">
                    Back To Home
                  </button>
                </a>
              </Row>
            </div>
          </div>
        </Container>
    </>
  );
};

const TransferSuccess = (props) => {
  return (
    <>
      <HeaderNav />
      <section class="my-5 container">
        <div class="row">
          <Col lg={3}>
            <Navigation {...props} imgTr={require("../../../../Assets/active/arrow-up.png")} colorTr={"blue"} />
          </Col>
          <Col>
            <Content />
          </Col>
        </div>
      </section>
    </>
  );
};

export default TransferSuccess;
