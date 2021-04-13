import React from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";

export default function Layout(props) {
  return (
    <>
      <Header />

      {props.children}
    </>
  );
}
