import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import { Navigation } from "../../Components/Navigation";
import Loading from "../../Components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { GetProfileName } from "../../Redux/Actions/Users";
import { HeaderNav } from "../../Components/Header";

const Content = (props) => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const [query, setQuery] = React.useState("");
  const {data} = useSelector((s) => s.Users);
  const Auth = useSelector((s) => s.Auth);

  const [loading, setLoading] = useState(false)
  const [hasMore, setMore] = useState(true)
  const [offset, setOffset] = useState(2)
  const [isScrolling, setScrolling] = useState(false)

  React.useEffect(() => {
    dispatch(
      GetProfileName({
        name: query,
        token: Auth.data.token,
      })
    );
  }, [query]);

  const _handleId = (e) => {
    localStorage.setItem("id", e);
  };

  // const loadMore = () => {
  //   if (isScrolling) return false
  //   setScrolling(true)
  //   setOffset(offset + 1)
  //   setTimeout(() => {
  //     dispatch(
  //       GetProfileName({
  //         name: query,
  //         token: Auth.data.token,
  //       })
  //     );
  //     setScrolling(false)
  //     if (data.length < (offset - 1) * 4) return setMore(false)
  //   }, 1500)
  // }

  return (
    <>
      <Container className="transfer-color" style={{height: '650px'}}>
        <div className="ml-3 pt-4" style={{fontWeight: 'bold'}}>Search Receiver</div>

        <div className="p-2">
          <Form method="get">
            <Form.Group>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <Image src={require("../../Assets/search.png")} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <span class="i-search"></span>
                <FormControl
                  className=" search-input"
                  placeholder="Search receiver here"
                  name="name"
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search receiver here"
                  type="text"
                  class="input-line"
                />
              </InputGroup>
            </Form.Group>
          </Form>
        </div>

      <div style={{overflow: 'hidden'}}>
        <div style={{height: "500px", overflow: 'scroll'}}>

        {!data ? (
          <Loading />
        ) : (
          data.map((item) => (
            <div style={{marginBottom: "10px"}} >
              <Link
                to="/transfer/input"
                onClick={(e) => _handleId(item.id_profile)}>
                <div className="transfer-color-sub nav-profile form-inline my-3 pl-3 my-lg-0 pt-3 pb-3">
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
                  <ul className="navbar-nav mr-sm-0 text-color" style={{marginLeft: "10px"}}>
                    <li style={{fontWeight: 'bold'}}>{item.name}</li>
                    <li>{item.phone}</li>
                  </ul>
                </div>
              </Link>
            </div>
          ))
        )}
        </div>
        </div>
      </Container>
    </>
  );
};

const transfer = (props) => {
  return (
    <>
      <HeaderNav />
      <section class="my-5 container">
        <div class="row">
          <Col lg={3}>
            <Navigation {...props} imgTr={require("../../Assets/active/arrow-up.png")} colorTr={"blue"} />
          </Col>
          <Col>
            <Content />
          </Col>
        </div>
      </section>
    </>
  );
};

export default transfer;
