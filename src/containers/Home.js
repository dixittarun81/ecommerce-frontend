import React from "react";
import {Jumbotron} from 'react-bootstrap'

import Layout from "../components/Layout";
import './home.css';

export default function Home() {
  return (
    <Layout sidebar>
      
      
      <Jumbotron
        style={{ margin: "5rem", background: "#fff" }}
        className="text-center"
      >
        <h1>Welcome to the home page</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          consequatur dolore nostrum, temporibus cupiditate incidunt voluptates
          unde veniam, dicta in veritatis eos officiis modi delectus esse? Ipsam
          quos expedita vitae odio illum earum quam aliquid culpa dicta quis
          labore nisi dignissimos, aut soluta beatae minus ut iste magni.
          Dignissimos quia quas cupiditate animi minima asperiores delectus
          pariatur provident optio, facere dolores impedit vel quam excepturi
        </p>
      </Jumbotron>
    </Layout>
  );
}
