import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const totalExpenses = props.dataPoints
    .map((datapoint) => datapoint.value)
    .reduce((sum, term) => sum + term);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          totalExpenses={totalExpenses}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
