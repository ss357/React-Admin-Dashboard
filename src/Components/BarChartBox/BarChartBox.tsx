import { ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts";
import "./BarChartBox.scss";

type Props = {
    title: string,
    color: string,
    dataKey: string,
    chartData: object[],
}

const BarChartBox = (props: Props) => {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart  data={props.chartData}>
            <Tooltip
              contentStyle={{ backgroundColor: "#2a3447", borderRadius: "5px" }}
              labelStyle={{display:'none'}}
              cursor={{fill:'none'}}
            ></Tooltip>
            <Bar dataKey={props.dataKey} fill={props.color} animationDuration={3000}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
