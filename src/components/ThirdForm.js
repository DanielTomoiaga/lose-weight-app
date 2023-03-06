import { forwardRef, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./ThirdForm.css";

const initialList = ["Sport", "Fara zahar", "Deficit caloric"];

const ThirdForm = forwardRef(({}, ref) => {
  const [list, setList] = useState(initialList);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    ref.current = selected;
  }, [selected]);

  const handleClick = (item) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
      setSelected([...selected, item]);
    } else {
      setSelected(selected.filter((i) => i !== item));
      setList([...list, item]);
    }
  };

  return (
    <Container
      className="lists-container"
      style={{
        maxWidth: "25rem",
        marginTop: "2rem",
        marginBottom: "3rem",
      }}
    >
      <div className="initial-list">
        <h2>Alege obiectivele secundare</h2>
        <ul>
          {list.map((item, index) => (
            <li key={index} onClick={() => handleClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="selected-list">
        <h2>Obiective secundare alese</h2>
        <ul>
          {selected.map((item, index) => (
            <li key={index} onClick={() => handleClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
});

export default ThirdForm;
