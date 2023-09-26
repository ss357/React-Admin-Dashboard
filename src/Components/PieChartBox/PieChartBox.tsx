import "./PieChartBox.scss";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "MacBook Air", value: 110000, color: "#C0C0C0" },
  { name: "Tablet", value: 27500, color: "#FF8042" },
  { name: "Desktop", value: 79000, color: "#0088FE" },
  { name: "NoteBook", value: 100000, color: "#FFBB28" },
  { name: "SmartPhones", value: 110000, color: "limegreen" },
  { name: "Ipod", value: 11000, color: "tomato" },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Leads By Source</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%" >
          <PieChart>
            <Tooltip
              contentStyle={{ background: "aliceblue", borderRadius: "10px" }}
            ></Tooltip>
            <Pie
              data={data}
              innerRadius="70%"
              outerRadius="90%"
              paddingAngle={5}
              dataKey="value"
              animationDuration={3000}
              
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div
                className="dot"
                style={{ backgroundColor: item.color }}
              ></div>
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
