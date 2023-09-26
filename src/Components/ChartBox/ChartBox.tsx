import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import "./ChartBox.scss";
import { Link } from "react-router-dom";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>

        <h1>{props.number}</h1>
        <Link to="./" style={{ color: props.color }}>
          {" "}
          View All
        </Link>
      </div>

      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData} >
              <Tooltip
                contentStyle={{
                  backgroundColor: "transparent",
                  border: "none",
                  fontSize: "0.8rem",
                }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: -27 }}
                cursor={false}
              ></Tooltip>
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
                animationDuration={3000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage > 0 ? "limegreen" : "tomato" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">This Month</span>
        </div>
      </div>
    </div>
  );
};
export default ChartBox;