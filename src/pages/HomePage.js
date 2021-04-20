import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Nav, Row, Col, Card } from "react-bootstrap";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function HomePage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const resp = await fetch(BACKEND_URL + "jobs");
      const json = await resp.json();
      console.log({ json });
      setJobs(json);
    }
    fetchJobs();
  }, []);

  return (
    <Container>
      <h1>Home Page</h1>
      {jobs.map((j) => {
        return (
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>{j.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>{j.description}</Card.Text>
              <Nav.Link as={Link} to={"/jobs/" + j.id}>
                More Details
              </Nav.Link>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
}
