import "./Greutate.css";
const Greutate = ({ days, onChange }) => {
  const months = [
    "Ian",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Iun",
    "Iul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="container-weigth">
      <div className="label-weigth">Greutate</div>
      {days.map((d) => (
        <div className="count-days" key={d.date.toString()}>
          <input
            className="input"
            type="number"
            name="day"
            defaultValue={d.weight}
            onChange={(e) => onChange(e.target.value, d)}
          ></input>
          <label htmlFor="day">{`${new Date(d.date).getDate()} ${
            months[new Date(d.date).getMonth()]
          }`}</label>
        </div>
      ))}
    </div>
  );
};

export default Greutate;
