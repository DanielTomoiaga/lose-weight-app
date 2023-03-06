import { forwardRef } from "react";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

const FirstForm = forwardRef(({ title }, ref) => {
  return (
    <Container
      style={{
        maxWidth: "25rem",
        marginTop: "2rem",
        marginBottom: "3rem",
      }}
    >
      <h2>{title}</h2>
      <Form ref={ref}>
        <Form.Group className="mb-3">
          <Form.Label>Greutate (Kg)</Form.Label>
          <Form.Control type="number" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Inaltime (cm)</Form.Label>
          <Form.Control type="number" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Varsta</Form.Label>
          <Form.Control type="number" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Suma (RON)</Form.Label>
          <Form.Control type="number" placeholder="" />
          <Form.Text className="text-muted">
            Suma de bani o primesti integral inapoi la final, daca reusesti
            sa-ti atingi 100% obiectivul!
          </Form.Text>
        </Form.Group>
      </Form>
    </Container>
  );
});

export default FirstForm;
