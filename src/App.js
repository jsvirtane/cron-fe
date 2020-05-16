import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
} from "reactstrap";

function App() {
  const [name, setName] = useState("");
  const [interval, setInterval] = useState(10);
  const [target, setTarget] = useState("");

  const [loading, setLoading] = useState(false);

  // console.log(`target: ` + target);
  // console.log(`name: ` + name);

  const submit = () => {
    setLoading(true);
    let payload = {
      name: name,
      interval: parseInt(interval),
      target: target,
    };
    axios
      .post("http://5ae94fcc.ngrok.io/api/new/", payload)
      .then((response) => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Name
          </Label>
          <Col sm={3}>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Interval
          </Label>
          <Col sm={3}>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              value={interval}
              onChange={(e) => setInterval(e.target.value)}
              disabled={loading}
            >
              <option value={10}>10 sec</option>
              <option value={60}>1 min</option>
              <option value={300}>5 min</option>
              <option value={3600}>1 hour</option>
              <option value={36000}>10 hours</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="target" sm={2}>
            Target
          </Label>
          <Col sm={3}>
            <Input
              type="target"
              name="target"
              id="exampleTarget"
              placeholder="Target"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              disabled={loading}
            />
          </Col>
        </FormGroup>
      </Form>
      <Button onClick={submit} disabled={loading}>
        Submit
      </Button>
      <br />
    </Container>
  );
}

export default App;
