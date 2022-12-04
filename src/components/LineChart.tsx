import ReactApexChart from "react-apexcharts";

function LineChart() {
  const last7Days = () => {
    var result = [];
    for (var i = 0; i < 7; i++) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      result.push(d.getTime());
    }

    return result;
  };
  const formatDataChart = last7Days().map((e) => {
    // format: [1361401200000,38.34]
    return [e, Math.floor(Math.random() * 100)];
  });

  const sevenDaysAgo: Date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  const seriesLineChart = [
    {
      name: "Desktops",
      data: formatDataChart,
    },
  ];

  const optionsLineChart = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    annotations: {
      yaxis: [
        {
          y: 10,
          borderColor: "#999",
          label: {
            show: true,
            text: "Support",
            style: {
              color: "#fff",
              background: "#00E396",
            },
          },
        },
      ],
      xaxis: [
        {
          x: sevenDaysAgo.getTime(),
          borderColor: "#999",
          yAxisIndex: 0,
          label: {
            show: true,
            text: "Rally",
            style: {
              color: "#fff",
              background: "#775DD0",
            },
          },
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 5,
      style: "hollow",
    },
    xaxis: {
      type: "datetime",
      min: sevenDaysAgo.getTime(),
      max: new Date().getTime(),
      tickAmount: 6,
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
  };

  return (
    <>
      <ReactApexChart
        options={optionsLineChart as any}
        series={seriesLineChart}
        type="line"
        height={350}
        width={800}
      />
    </>
  );
}
export default LineChart;
