import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import FirstForm from "../components/FirstForm";
import SecondForm from "../components/SecondForm";
import ThirdForm from "../components/ThirdForm";

const Forms = () => {
  const [currentForm, setCurrentForm] = useState(0);

  const firstFormRef = useRef();
  const secondFormRef = useRef();
  const thirdFormRef = useRef();

  const navigate = useNavigate();

  const setSecondFormData = () => {
    if (!firstFormRef.current) return;
    const greutate = firstFormRef.current[0].value;
    const inaltime = firstFormRef.current[1].value;
    const greutateIdeala = Math.floor((23 * (inaltime * inaltime)) / 10000);
    return {
      greutate: greutateIdeala,
      noZile: Math.ceil((greutate - greutateIdeala) * 7),
    };
  };

  const renderForm = () => {
    return (
      <>
        <div style={{ display: currentForm === 0 ? "initial" : "none" }}>
          <FirstForm title="Parametrii tai" ref={firstFormRef} />
        </div>
        <div style={{ display: currentForm === 1 ? "initial" : "none" }}>
          <SecondForm
            title=""
            ref={secondFormRef}
            getData={setSecondFormData}
          />
        </div>
        <div style={{ display: currentForm === 2 ? "initial" : "none" }}>
          <ThirdForm title="Obiective secundare" ref={thirdFormRef} />
        </div>
      </>
    );
  };

  const handleNext = () => {
    if (currentForm === 2) return;
    setCurrentForm((state) => state + 1);
  };

  const handlePrev = () => {
    if (currentForm === 0) return;
    setCurrentForm((state) => state - 1);
  };

  const handleSubmit = () => {
    const obj = {
      greutate: firstFormRef.current[0].value,
      inaltime: firstFormRef.current[1].value,
      varsta: firstFormRef.current[2].value,
      suma: firstFormRef.current[3].value,
      sumaPierduta: 0,
      greutateIdeala: Math.floor(secondFormRef.current[0].value),
      noZile: Math.ceil(secondFormRef.current[1].value),
      startData: secondFormRef.current[2].value,
      obiectiveSecundare: thirdFormRef.current,
    };
    localStorage.setItem("data", JSON.stringify(obj));
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <img
          src="simple_logo.png"
          style={{
            maxWidth: "70px",
            marginTop: "2rem",
          }}
        ></img>
      </div>
      <div>{renderForm()}</div>
      <div className="d-flex justify-content-center gap-5">
        <Button style={{ backgroundColor: "#465B90" }} onClick={handlePrev}>
          Inapoi
        </Button>

        {currentForm === 2 ? (
          <Button style={{ backgroundColor: "#465B90" }} onClick={handleSubmit}>
            Trimite
          </Button>
        ) : (
          <Button style={{ backgroundColor: "#465B90" }} onClick={handleNext}>
            Inainte
          </Button>
        )}
      </div>
    </div>
  );
};

export default Forms;
