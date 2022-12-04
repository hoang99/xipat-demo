import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";

function ColumnChart() {
  const formatCategoryColumnChart = () => {
    const dataFormat = [];
    for (var i = 1; i <= 12; i++) {
      dataFormat.push(`${i}/${new Date().getFullYear()}`);
    }
    return dataFormat;
  };

  const handleSeriesDataColumnChart = () => {
    const dataFormat = [];
    for (var i = 1; i <= 12; i++) {
      dataFormat.push(Math.floor(Math.random() * 100));
    }
    return dataFormat;
  };

  const seriesColumnChart = [
    {
      name: "abc",
      data: handleSeriesDataColumnChart(),
    },
  ];
  const optionsColumnChart = {
    chart: {
      height: 350,
      type: "bar",
      events: {
        // click: function (chart, w, e) {
        //   // console.log(chart, w, e)
        // },
      },
    },
    // colors: colors,
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: formatCategoryColumnChart(),
      labels: {
        style: {
          // colors: colors,
          fontSize: "12px",
        },
      },
    },
  };

  return (
    <>
      <ReactApexChart
        options={optionsColumnChart as any}
        series={seriesColumnChart}
        type="bar"
        height={350}
        width={800}
      />
    </>
  );
}
export default ColumnChart;
