import React from "react";
import {
  Container,
  Row,
  Image,
  Button,
  Modal,
  Col,
} from "react-bootstrap";
import "./style.css";
import { Navigation } from "../../../../Components/Navigation";
import { DateTime } from "luxon";
import { useDispatch, useSelector } from "react-redux";
import { PostTransfer } from "../../../../Redux/Actions/Transfer";
import { GetProfileTransfer } from "../../../../Redux/Actions/Users";
import NumberFormat from 'react-number-format';

const Content = (props) => {

  const [pin1, setPin1] = React.useState("");
  const [pin2, setPin2] = React.useState("");
  const [pin3, setPin3] = React.useState("");
  const [pin4, setPin4] = React.useState("");
  const [pin5, setPin5] = React.useState("");
  const [pin6, setPin6] = React.useState("");
  let pin = pin1 + pin2 + pin3 + pin4 + pin5 + pin6

  const [transferDate, setTransferDate] = React.useState(
    DateTime.local().toFormat("DD - hh.mm")
  );

  const Auth = useSelector((s) => s.Auth);
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false)
  const myPin = localStorage.getItem("MyPin")

  const closeModal = () => {
    setShow(!show)
  }

  React.useEffect(() => {
    dispatch(
      GetProfileTransfer({
        id: localStorage.getItem("id"),
        token: Auth.data.token,
      })
    );
  }, []);
  const  { dataTr }  = useSelector((s) => s.Users);

  const handleSubmit = (e) => {
    if (pin != myPin) {
      alert('Pin wrong!')
    } else {
    dispatch(
      PostTransfer({
        id_receiver: localStorage.getItem("id"),
        amount: localStorage.getItem("amount"),
        notes: localStorage.getItem("notes"),
        token: Auth.data.token,
      })
    )
    localStorage.setItem("Date", transferDate);
    localStorage.removeItem('MyPin')
    }
  };

  return (
    <>
      <Container className="transfer-color-confirmation" style={{height: '650px'}}>
        <div className="d-flex flex-column">
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
                        'http://103.123.63.223:8000' +
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
                        {localStorage.getItem("NameReceiver")}
                      </li>
                      <li>{localStorage.getItem("PhoneReceiver") == 'null' ? '' : localStorage.getItem("PhoneReceiver") }</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1">
            <div className="d-flex flex-column">
              <div className="p-1 text-style">Details</div>

              <div className="p-1 transfer-color-sub mb-3">
                <div className="d-flex flex-column">
                  <div className="p-1">Amount</div>
                  <div className="p-1 text-style">
                  <NumberFormat value={localStorage.getItem("amount")}  displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                  </div>
                </div>
              </div>

              <div className="p-1 transfer-color-sub  mb-3">
                <div className="d-flex flex-column">
                  <div className="p-1">Balance Left</div>
                  <div className="p-1 text-style">
                  <NumberFormat value={localStorage.getItem("MyBalance")}  displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                  </div>
                </div>
              </div>

              <div>
                <div className="p-1 transfer-color-sub  mb-3">
                  <div className="d-flex flex-column">
                    <div className="p-1">Date & Time</div>
                    <div className="p-1 text-style">{transferDate}</div>
                  </div>
                </div>
                <div className="p-1 transfer-color-sub ">
                  <div className="d-flex flex-column">
                    <div className="p-1">Notes</div>
                    <div className="p-1 text-style">
                      {localStorage.getItem("notes")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Container className="d-flex justify-content-end" style={{marginTop: '40px'}}>
              <Row>
              <button
                  onClick={() => closeModal() }
                  className="btn-continue-input text-btn-input mr-3">
                  Continue
                </button>
              </Row>
            </Container>
          </div>
        </div>
      </Container>

      <Modal show={show} onHide={() => closeModal()}>
          <Modal.Header closeButton>
            <Modal.Title>Enter PIN to Transfer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Enter your 6 digits PIN for confirmation to <br /> continue
              transferring money.{" "}
            </p>
            <Container>
              <Row className="justify-content-center" style={{marginBottom: '80px'}}>
                
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

              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => handleSubmit()}>
                Submit
            </Button>
          </Modal.Footer>
        </Modal>
    </>
  );
};

const TransferConfirmation = (props) => {
  return (
    <>
      <section class="my-5 container">
        <div class="row">
          <Col lg={3}>
            <Navigation {...props} imgTr={require("../../../../Assets/active/arrow-up.png")} colorTr={"blue"}  />
          </Col>
          <Col>
            <Content />
          </Col>
        </div>
      </section>
    </>
  );
};

export default TransferConfirmation;
