import React, { useState } from "react";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const [options, setOptions] = useState({
    chart: {
      width: "500",
      type: "donut",
    },
    labels: ["", "", ""],
    legend: {
      position: "bottom",
    },
  });

  const [series, setSeries] = useState([40, 40, 20]);

  return (
    <div>
      <div id="charts" className=" flex justify-center">
        <div>
          <Chart options={options} series={series} type="donut" width="500" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
