import React, { useState} from "react";
import Layout from "../components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

import Input from "../components/Ui/Input";
import { logIn } from "../actions/auth";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [error, setError] = useState('');
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(logIn(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email"
                placeholder="Email"
                defaultValue=""
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                placeholder="Password"
                defaultValue=""
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

// const mapStateToProps = (state) => {
//   return {user : state.user};
// }
// export default connect(mapStateToProps,{logIn})(Signin);
