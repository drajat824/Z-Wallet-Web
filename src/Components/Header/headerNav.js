import React from "react";
import { Navbar, Nav, Image, Media } from "react-bootstrap";
import "./headerStyle.css";
import { withRouter } from "react-router";
import { TextBlock } from "react-placeholder/lib/placeholders";
import { GetProfile } from "../../Redux/Actions/Users";
import { useDispatch, useSelector } from "react-redux";

const HeaderNav = (props) => {
  const dispatch = useDispatch();

  const { myData } = useSelector((s) => s.Users);
  const Auth = useSelector((s) => s.Auth);

  React.useEffect(() => {
    dispatch(
      GetProfile({
        token: Auth.data.token,
      })
    );
  }, []);

  if (
    props.location.pathname === "/" ||
    props.location.pathname === "/history" ||
    props.location.pathname === "/transfer" ||
    props.location.pathname === "/transfer/input" ||
    props.location.pathname === "/transfer/confirmation" ||
    props.location.pathname === "/transfer/success" ||
    props.location.pathname === "/topup" ||
    props.location.pathname === "/profile" ||
    props.location.pathname === "/profile/personal" ||
    props.location.pathname === "/profile/password" ||
    props.location.pathname === "/profile/phone" ||
    props.location.pathname === "/profile/pin" ||
    props.location.pathname === "/admin"
  ) {
    return (
      <>

      <div className="d-block d-md-none d-lg-none d-xl-none"> 
        <Navbar className="headerStyle">
          <Navbar.Collapse >
            <Navbar.Text className="borderless">
              <Nav className="nav-profile form-inline my-3 my-lg-0 pr-5">
                <>
                  <div className="text-center">
                    <Image
                      src={
                        myData ? (
                          myData.data[0].photo ? (
                            'http://localhost:8000' +
                            "/images/" +
                            myData.data[0].photo
                          ) : (
                            require("../../Assets/picture.png")
                          )
                        ) : (
                          <div>Loading.. </div>
                        )
                      }
                      width="50px"
                      height="50px"
                      style={{ borderRadius: "10px", marginBottom: '15px' }}
                    />
                  </div>
                  <Media.Body className="ml-2 mr-2">
                    {!myData ? (
                      <TextBlock
                        rows={1}
                        style={{ width: 170, marginBottom: 10, height: 25 }}
                        color="#f0f0f0"
                      />
                    ) : (
                      <p style={{fontWeight: 'bold', color: 'black'}}>
                        {myData.data[0].name}
                      </p>
                    )}
                    <p>
                      {!myData ? (
                        <TextBlock
                          rows={1}
                          style={{ width: 170, marginBottom: 10, height: 25 }}
                          color="#f0f0f0"
                        />
                      ) : (
                        myData.data[0].phone
                      )}
                    </p>
                  </Media.Body>
                </>
                <Image
                  style={{right: 30, position: 'absolute'}}
                  src={require("../../Assets/bell.png")}
                />
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className="d-none d-md-block d-lg-block d-xl-block "> 
        <Navbar className="headerStyle ">
          <Navbar.Brand className="pl-5 ">
            <div className="text-logo">Zwallet</div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="borderless">
              <Nav className="nav-profile form-inline my-3 my-lg-0 pr-5">
                {/* {!loading ? ( */}
                <>
                  <div className="text-center">
                    <Image
                      src={
                        myData ? (
                          myData.data[0].photo ? (
                            'http://localhost:8000' +
                            "/images/" +
                            myData.data[0].photo
                          ) : (
                            require("../../Assets/picture.png")
                          )
                        ) : (
                          <div>Loading.. </div>
                        )
                      }
                      width="50px"
                      height="50px"
                      style={{ borderRadius: "10px", marginBottom: '15px'}}
                    />
                  </div>
                  <Media.Body className="ml-2 mr-2">
                    {!myData ? (
                      <TextBlock
                        rows={1}
                        style={{ width: 170, marginBottom: 10, height: 25 }}
                        color="#f0f0f0"
                      />
                    ) : (
                      <p style={{fontWeight: 'bold', color: 'black'}}>
                        {myData.data[0].name}
                      </p>
                    )}
                    <p>
                      {!myData ? (
                        <TextBlock
                          rows={1}
                          style={{ width: 170, marginBottom: 10, height: 25 }}
                          color="#f0f0f0"
                        />
                      ) : (
                        myData.data[0].phone
                      )}
                    </p>
                  </Media.Body>
                </>
                {/* ) : (
                  <TextBlock
                  rows={1}
                  style={{ width: 170, marginBottom: 10, height: 25 }}
                  color="#f0f0f0"
                />
                )} */}
                <Image
                  className="mb-3 pl-4"
                  src={require("../../Assets/bell.png")}
                />
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        </div>
      </>
    );
  } else {
    return false;
  }
};

export default withRouter(HeaderNav);
