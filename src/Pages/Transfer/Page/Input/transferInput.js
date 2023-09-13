import React from "react";
import { Container, Row, Image, Col } from "react-bootstrap";
import "./style.css";
import { useHistory } from "react-router-dom";
import { Navigation } from "../../../../Components/Navigation";
import { GetProfileTransfer } from "../../../../Redux/Actions/Users";
import { useDispatch, useSelector } from "react-redux";
import { HeaderNav } from "../../../../Components/Header";
import NumberFormat from 'react-number-format';

const Content = (props) => {

  let history = useHistory();
  const Auth = useSelector((s) => s.Auth);
  const  { myData, dataTr }  = useSelector((s) => s.Users);

  const dispatch = useDispatch();
  const [amount, setAmount] = React.useState("");
  const [notes, setNotes] = React.useState("");

  React.useEffect(() => {
    dispatch(
      GetProfileTransfer({
        id: localStorage.getItem("id"),
        token: Auth.data.token,
      })
    );
  }, []);

  const onSubmit = (e) => {
    if(amount.length == 0 || notes.length == 0){
      alert('All must be filled')
    } else {

        localStorage.setItem("amount", amount);
        localStorage.setItem("notes", notes);
        localStorage.setItem("NameReceiver", dataTr.data.name);
        localStorage.setItem("PhoneReceiver", dataTr.data.phone);
        localStorage.setItem("MyBalance", myData.data[0].balance - amount);
        localStorage.setItem("MyPin", myData.data[0].pin);
        history.replace("/transfer/confirmation");

    }
  }

  return (
    <>
      <Container className="transfer-color" style={{height: '650px'}}>
          <div className="d-flex flex-column">
            <div className="ml-3 pt-4" style={{fontWeight: 'bold'}}> Transfer Money </div>
            <div className="p-1 mb-4">
              <div className="transfer-color-sub p-1 tr-box">
                <div className="nav-profile form-inline my-3 my-lg-0 pt-2 pb-2 pl-2">
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
                  <ul className="navbar-nav mr-sm-0 text-history ml-3">
                    <li>{dataTr ? dataTr.data.name : <div />}</li>
                    <li>{dataTr ? dataTr.data.phone : <div />}</li>
                  </ul>
                </div>
              </div>

              <div className="p-1 mt-4">
                Type the amount you want to transfer and then <br /> press
                continue to the next steps.
              </div>

              <div className="p-1" style={{marginBottom: '100px'}}>
                <div className="d-flex justify-content-center">
                  <div className="p-1">
                    <input
                      onChange={(e) => setAmount(e.target.value)}
                      type="text"
                      placeholder="0.00"
                      className="input-money"
                    />

                  <div className="p-1 text-avail">
                  <NumberFormat value={myData? (myData.data[0].balance - amount) : ('0')}  displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                  {' '}Available
                    </div>

                    <div>
                      <Image src={ notes? require("../../../../Assets/active/pen.png") : require("../../../../Assets/pen.png")} />
                      <input
                        onChange={(e) => setNotes(e.target.value)}
                        className="text text-tr-hs input-notes"
                        placeholder="Add some notes"
                      />
                      <section>
                        <hr style={{borderWidth: "2px",borderColor: notes? 'blue' : 'rgba(169, 169, 169, 0.6)'}} size="30px" />
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Container className="d-flex justify-content-end">

                 
                <button
                  onClick={(e) => {
                    if(amount > myData.data[0].balance){
                      alert('Your money is not enough')
                    } else {
                        onSubmit(e)}
                  }}
                  className="btn-continue-input text-btn-input mr-3">
                  Continue
                </button>


            </Container>
            
          </div>

      </Container>
    </>
  );
};

const TransferInput = (props) => {
  return (
    <>
      <HeaderNav />
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

export default TransferInput;
