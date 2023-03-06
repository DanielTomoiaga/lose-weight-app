import "./Obiective.css";

const Obiective = ({ days, name, onClick }) => {
  return (
    <div className="container-obj">
      <div className="label-obj">{name}</div>
      <div className="days">
        {days.map((d) => (
          <div
            key={d.date.toString()}
            className="day"
            style={{
              backgroundColor:
                d[name] && d[name]?.selected ? "darkblue" : "white",
            }}
            onClick={() => onClick(d, name)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Obiective;
