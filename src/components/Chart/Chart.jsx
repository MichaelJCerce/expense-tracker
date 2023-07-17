import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const total = props.dataPoints
    .map((datapoint) => datapoint.value)
    .reduce((sum, term) => sum + term);
  
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={total}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
