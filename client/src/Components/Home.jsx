import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import Chart from "react-apexcharts";

const Home = () => {
  const [data, setData] = useState({
    series: [
      {
        name: "Cash Flow",
        data: [1.45, 5.42],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [
              {
                from: -100,
                to: -46,
                color: "#F15B46",
              },
              {
                from: -45,
                to: 0,
                color: "#FEB019",
              },
            ],
          },
          columnWidth: "80%",
        },
      },
      dataLabels: {
        enabled: true,
      },
      yaxis: {
        title: {
          text: "Growth",
        },
        labels: {
          formatter: function (y) {
            return y.toFixed(0) + "%";
          },
        },
      },
      xaxis: {
        type: "datetime",
        categories: ["2011-01-01", "2011-02-01"],
        labels: {
          rotate: -90,
        },
      },
    },
  });

  //   useEffect(() => {
  //     fetch(`http://localhost:8000/operations?id=${localStorage.userid}`)
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   },[]);

  console.log(data);
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default Home;
