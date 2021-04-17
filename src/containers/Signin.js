import React from "react";
import Layout from "../components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";

import Input from "../components/Ui/Input";
import { logIn } from "../actions/auth";
import { useDispatch } from "react-redux";

export default function Signin() {
  const dispatch = useDispatch();
  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      email: "test2@gmail.com",
      password: "123456",
    };

    dispatch(logIn(user));
  };

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email"
                placeholder="Email"
                value=""
                type="email"
                onChange={() => {}}
              />

              <Input
                label="Password"
                placeholder="Password"
                value=""
                type="password"
                onChange={() => {}}
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
