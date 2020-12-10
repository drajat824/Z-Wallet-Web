import React, { Component, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TextBlock } from "react-placeholder/lib/placeholders";
import { Navigation } from "../../../../Components/Navigation";
import { GetTopup } from "../../../../Redux/Actions/Topup";
import { useDispatch, useSelector } from "react-redux";
import { HeaderNav } from "../../../../Components/Header";

const Content = (props) => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((s) => s.Topup);
  const Auth = useSelector((s) => s.Auth);
  let newData = "";

  if (data.success == true) {
    newData = data.data;
  } else {
    console.log("p");
  }

  console.log(data, "ini Topup");

  React.useEffect(() => {
    dispatch(
      GetTopup({
        token: Auth.data.token,
      })
    );
  }, []);

  return (
    <>
      <Container className="topup-color">
        <p className="ml-3 pt-4" style={{fontWeight: 'bold'}}>Transaction History</p>

        <div style={{overflow: 'hidden'}}>
        <div style={{height: "550px", overflow: 'scroll'}}>
        {!newData ? (
          <TextBlock
            rows={6}
            style={{ width: '100%', marginBottom: 10, height: '100%', borderRadius: '20px' }}
            color="#f0f0f0"
          />
        ) : (
          newData.map((item) => (
            <Col className="pb-1">
              <Col className="topup-color-sub-topup d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-1 my-2 p-4">
                <Row className="align-items-center">
                  <div className="font-weight-bold text-primary align-self-start" >
                    {item.number}
                  </div>
                  <div style={{position: 'absolute',left: '50px' ,color: '#7A7886'}}>{item.step}</div>
                </Row>
              </Col>
            </Col>
          ))
        )}
        </div>
        </div>
      </Container>
    </>
  );
};

const dashboardHistory = (props) => {
  return (
    <>
      <HeaderNav />
      <section class="my-5 container">
        <div class="row">
          <Col lg={3}>
            <Navigation {...props} imgTopup={require("../../../../Assets/active/plus.png")} colorTopup={"blue"} />
          </Col>
          <Col>
            <Content />
          </Col>
        </div>
      </section>
    </>
  );
};

export default dashboardHistory;
