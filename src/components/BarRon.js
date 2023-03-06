import "./BarRon.css";

const BarRon = ({ percentage = "50%", label = 0 }) => {
  return (
    <div className="bar">
      <div className="bar-ron">
        <div className="bar-fill-ron" style={{ height: percentage }}></div>
      </div>
      <div className="bar-label"> {label} RON</div>
    </div>
  );
};

export default BarRon;
