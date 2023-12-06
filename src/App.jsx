
import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Card, Form } from "react-bootstrap";

function App() {
 

  // Create state for count and setCount
  const [harga, setharga] = useState(10_000_000);
  const [dibayar, setDibayar] = useState(0);


  const kembalian = useMemo(() => {
    let result = dibayar - harga;
    return result < 0 ? 0 : result;
  }, [dibayar]);

  // react-bootstrap bootstrap

  return (
    <>
      <Container className="mt-5">
        <Row className="d-flex justify-content-center">
          <Col md={5} >
            <Card>
              <Card.Body>
                <Card.Title className="mb-5">
                  Penjualan App
                </Card.Title>
                <Form.Group className="mb-3">
                  <Form.Label>Harga Penjualan</Form.Label>
                  <Form.Control readOnly={true} value={harga} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Dibayar</Form.Label>
                  <Form.Control type="number" onChange={(e) => setDibayar(parseInt(e.target.value))} value={dibayar} />
                </Form.Group>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-end">
                <h3>{kembalian}</h3>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

