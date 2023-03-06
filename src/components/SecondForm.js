import { forwardRef } from "react";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

const SecondForm = forwardRef(({ title, getData }, ref) => {
  const getMinDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month =
      date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return `${year}-${month}-${day}`;
  };

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
          <Form.Label>Greutatea ideala</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            readOnly
            defaultValue={getData()?.greutate || ""}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Zile</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            defaultValue={getData()?.noZile || ""}
          />
          <Form.Text className="text-muted">
            Numarul minim de zile de care ai nevoie ca sa-ti atingi obiectivul.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Data start (de cand vrei sa incepi)</Form.Label>
          <Form.Control type="date" placeholder="" min={getMinDate()} />
        </Form.Group>
      </Form>
    </Container>
  );
});

export default SecondForm;
