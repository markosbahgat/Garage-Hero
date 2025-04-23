import { ApexOptions } from "apexcharts";

export function toArabicNumbers(input: string | number): string {
  const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return input.toString().replace(/\d/g, (d) => arabicDigits[parseInt(d)]);
}

const useReactApexChart = () => {
  const stackedBarOptions: ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 3,
        barHeight: "20px",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [""],
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      markers: {
        shape: "circle",
        size: 5,
      },
    },
    colors: ["#3366FF", "#4BC0C0", "#B03030"],
  };

  const stackedBarSeries: ApexAxisChartSeries = [
    {
      name: "Profit",
      data: [46],
    },
    {
      name: "Expenses",
      data: [34],
    },
    {
      name: "Assets",
      data: [10],
    },
  ];
  const barChartSeriesOne: ApexAxisChartSeries = [
    {
      name: "Payable",
      data: [null, 14],
      type: "bar",
    },
    {
      name: "Receivable",
      data: [20],
    },
  ];
  const barChartOptionsOne: ApexOptions = {
    colors: ["#E62A49", "#2FB578"],
    legend: { show: false },
    chart: {
      type: "bar",
      height: 200,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 3,
        horizontal: false,
        columnWidth: "60%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    // fill: {
    //   type: '',
    //   // Set the starting color (top color) here
    //   gradient: {
    //     shade: "light", // Gradient shading type
    //     type: "vertical", // Gradient direction (vertical)
    //     shadeIntensity: 0.5, // Intensity of the gradient shading

    //     inverseColors: false, // Do not invert colors
    //     opacityFrom: 1, // Starting opacity
    //     opacityTo: 1, // Ending opacity
    //     stops: [0, 100],
    //   },
    // },
    grid: {
      borderColor: "#D1D5DB",
      strokeDashArray: 4, // Use a number for dashed style
      position: "back",
      padding: {
        top: -10,
        right: -10,
        bottom: -10,
        left: -10,
      },
    },
    xaxis: {
      type: "category",
      categories: ["Receivable", "Payable"],
    },
  };
  const userOverviewDonutChartOptionsTwo: ApexOptions = {
    colors: ["#E3E7EE", "#1A4C84"],
    labels: ["Purchase", "Sales"],
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",

          labels: {
            show: true,

            name: {
              show: true,
              fontSize: "16px",
              fontFamily: "Poppins",
              color: "#1A4C84",

              formatter: () => "",
            },

            value: {
              show: true,
              fontSize: "14px",
              fontFamily: "Poppins",
              color: "#1A4C84",
              formatter: function (val) {
                return "";
              },
            },
          },
        },
      },
    },
    chart: {
      type: "donut",
      height: 270,
      sparkline: {
        enabled: false, // Remove whitespace
      },
    },
    stroke: {
      width: 0,
    },
    dataLabels: {
      enabled: true,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const userOverviewDonutChartSeriesTwo = [30, 70];

  const purchaseSaleChartOptions: ApexOptions = {
    colors: ["#1A56DB", "#16BDCA"],

    legend: {
      show: false,
    },
    chart: {
      type: "bar",

      height: 600,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: true,
      borderColor: "#D1D5DB",
      strokeDashArray: 4, // Use a number for dashed style
      position: "back",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
        barHeight: "100%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    stroke: {
      show: true,
      width: 3,
      colors: ["transparent"],
    },
    xaxis: {
      labels: {
        formatter: (val) => "$ " + val,
        rotate: -45,
        rotateAlways: true,
        minHeight: 40,
      },
      categories: [
        "April 24",
        "",
        "May 24",
        "",
        "June 24",
        "",
        "July 24",
        "",
        "Aug 24",
      ],
      stepSize: 500,
    },
    yaxis: {
      show: true,
      labels: {
        rotate: 270,
        offsetX: -20,
        offsetY: 0,
        align: "left",
        style: { fontSize: "14px" },
      },
    },

    fill: {
      opacity: 1,
    },
  };

  const purchaseSaleChartSeries = [
    {
      name: "Sales",
      data: [2500, null, 1800, null, 1200, null, 1800, null, 1000],
    },
    {
      name: "Expenses",
      data: [2000, null, 1840, null, 800, null, 1006, null, 600],
    },
  ];

  const incomeExpenseOptions: ApexOptions = {
    legend: {
      show: false,
    },
    chart: {
      type: "area",
      width: "100%",
      height: 150,
      toolbar: {
        show: false,
      },
      // padding: {
      //   left: 0,
      //   right: 0,
      //   top: 0,
      //   bottom: 0,
      // },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#487FFF"],
    },

    grid: {
      show: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.6, // Intense near the top of the fill
        opacityTo: 0, // Fades to transparent at the bottom
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: "#487FFF", // Bright blue at the top
            opacity: 0.6,
          },
          {
            offset: 100,
            color: "#FFFFFF", // Fade into white at the bottom
            opacity: 0,
          },
        ],
      },
    },

    markers: {
      colors: ["#487FFF"], // Use two colors for the markers
      strokeWidth: 3,
      size: 0,
      hover: {
        size: 10,
      },
    },

    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  const incomeExpenseSeries = [
    {
      name: "Sales", // or any label you want
      data: [11, 15, 20, 17, 21, 24, 20, 18],
    },
  ];

  return {
    incomeExpenseOptions,
    purchaseSaleChartSeries,
    incomeExpenseSeries,
    purchaseSaleChartOptions,
    userOverviewDonutChartSeriesTwo,
    userOverviewDonutChartOptionsTwo,
    barChartOptionsOne,
    barChartSeriesOne,
    stackedBarSeries,
    stackedBarOptions,
  };
};

export default useReactApexChart;
