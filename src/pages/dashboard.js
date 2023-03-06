import { useEffect, useState, useRef } from "react";
import Obiective from "../components/Obiective";
import Greutate from "../components/Greutate";
import BarRon from "../components/BarRon";
import BarTime from "../components/BarTime";
import { Alert } from "react-bootstrap";
import "./dashboard.css";

const Dashboard = () => {
  const storedData = localStorage.getItem("data");
  const data = storedData ? JSON.parse(storedData) : {};
  const [proposedDays, setProposedDays] = useState(data?.history || []);
  const [showAlert, setShowAlert] = useState(false);

  const isToday = (d) => {
    const selectedDate = new Date(d.date);
    const today = new Date();
    return (
      selectedDate.getDate() === today.getDate() &&
      selectedDate.getMonth() === today.getMonth()
    );
  };

  const isPastDay = (d) => {
    const selectedDate = new Date(d.date);
    const today = new Date();

    return (
      selectedDate.getDate() < today.getDate() &&
      selectedDate.getMonth() <= today.getMonth() &&
      selectedDate.getFullYear() <= today.getFullYear()
    );
  };

  const editedDay = useRef(proposedDays.findIndex((d) => isToday(d)));

  useEffect(() => {
    const generateDays = () => {
      const days = [];
      const date = new Date(data.startData);
      for (let i = 0; i < data.noZile; i++) {
        days.push(date.toString());
        date.setDate(date.getDate() + 1);
      }
      setProposedDays(
        days.map((d) => ({
          date: new Date(d),
        }))
      );
    };
    if (!data?.history) {
      generateDays();
    } else {
      const newArr = [...proposedDays];
      newArr.forEach((day) => {
        if (isPastDay(day)) {
          day.isPassed = true;
        }
      });
      setProposedDays(newArr);
    }
  }, []);

  const getPassedDays = () => {
    const passedDays = proposedDays.filter((d) => d.isPassed);
    return passedDays;
  };

  const getSumaPierduta = () => {
    const sumaPerDay = data.suma / data.noZile;
    const sumaPerObiectiv = sumaPerDay / data.obiectiveSecundare.length;
    const totalPierderi = [];
    proposedDays
      .filter((d, index) => index <= editedDay.current)
      .forEach((d, index, arr) => {
        let obiectiveBifate = [];
        data.obiectiveSecundare.forEach((obiectiv) => {
          if (d[obiectiv] && d[obiectiv].selected)
            obiectiveBifate.push(obiectiv);
        });
        if (obiectiveBifate.length === 0) totalPierderi.push(sumaPerDay);
        else
          totalPierderi.push(
            sumaPerObiectiv *
              (data.obiectiveSecundare.length - obiectiveBifate.length)
          );
      });
    const res = totalPierderi.reduce((acc, elem) => acc + elem, 0);
    return res.toFixed(2);
  };

  const handleToggleObiectiv = (day, name) => {
    if (!isToday(day)) return;
    if (!day[name]) {
      day[name] = { selected: false };
    }
    day[name].selected = !day[name].selected;
    editedDay.current = proposedDays.indexOf(day);
    const newDays = [...proposedDays];
    setProposedDays(newDays);
  };

  const handleChangeGreutate = (value, day) => {
    day.weight = value;
    const newDays = [...proposedDays];
    setProposedDays(newDays);
  };

  const handleSaveHistory = () => {
    data.history = proposedDays;
    data.saveDate = new Date().toString();
    localStorage.setItem("data", JSON.stringify(data));
    setShowAlert(true);
  };

  return (
    <div className="dashboard-container">
      <img src="Logo.png" className="logo-header-dashboard"></img>
      <div className="data-container">
        <BarRon
          percentage={`${((data.suma - getSumaPierduta()) / data.suma) * 100}%`}
          label={data.suma - getSumaPierduta()}
        />
        <BarTime
          percentage={`${(getPassedDays().length / data.noZile) * 100}%`}
          label={`${getPassedDays().length} de zile din ${data.noZile}`}
        />
        <div className="calendar">
          <div className="obj-weigth">
            {data.obiectiveSecundare.map((os, index) => (
              <Obiective
                days={proposedDays}
                name={os}
                key={os + index}
                onClick={handleToggleObiectiv}
              />
            ))}
            <Greutate days={proposedDays} onChange={handleChangeGreutate} />
          </div>
          <button className="dashboard-btn" onClick={handleSaveHistory}>
            Finalizeaza Ziua
          </button>
        </div>
      </div>
      <div className="alert-wrapper">
        <Alert
          variant="success"
          show={showAlert}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <Alert.Heading>Salvat cu succes.</Alert.Heading>
        </Alert>
      </div>
    </div>
  );
};

export default Dashboard;
