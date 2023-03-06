import "./BarTime.css";

const BarTime = ({ percentage = "50%", label }) => {
  return (
    <div className="bar">
      <div className="bar-time">
        <div className="bar-fill-time" style={{ height: percentage }}></div>
      </div>
      <div className="bar-label">{label}</div>
    </div>
  );
};

export default BarTime;
