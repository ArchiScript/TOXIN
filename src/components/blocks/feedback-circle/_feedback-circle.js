import { Chart } from "chart.js/auto";
import { DoughnutController, ArcElement } from "chart.js";
Chart.register(DoughnutController, ArcElement);

export class ChartCircle {
  constructor(canvas) {
    this.canvas = canvas;
    this.roomDetailsChart = document.querySelector(this.canvas);
    if (!this.roomDetailsChart) {
      return;
    }
    this.createGradients();
    this.setup();
    this.init();
  }

  setup() {
    this.options = {
      datasets: {
        doughnut: {
          rotation: 180,
        },
      },
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2.6,
      layout: {
        padding: {
          // top: 20,
        },
      },
      cutout: "90%",
      plugins: {
        legend: {
          display: true,
          position: "right",
          align: "end",
          maxWidth: 200,
          padding: {
            left: 30,
          },
          labels: {
            usePointStyle: true,
            pointStyle: "circle",
            boxHeight: 9,
            boxWidth: 170,
            color: "#575870",
            textAlign: "left",
            font: {
              family: "MontserratRegular",
              size: 14,
            },
          },
        },
      },
    };
    const centerText = {
      id: "centerText",
      beforeDraw(chart, args, options) {
        const {
          ctx,
          chartArea: { top, right, bottom, left, width, height },
        } = chart;
        ctx.save();
        ctx.fillStyle = "#BC9CFF";
        ctx.textAlign = "center";
        ctx.font = "24px MontserratBold";
        ctx.fillText("260", width / 2, height / 2);
        ctx.font = "12px MontserratBold";
        ctx.fillText("ГОЛОСОВ", width / 2, height / 2 + 20);
      },
    };
    this.config = {
      type: "doughnut",
      options: this.options,
      plugins: [centerText],
      data: {
        labels: ["Великолепно", "Хорошо", "Удовлетворительно", "Разочарован"],
        datasets: [
          {
            data: [50, 26, 22, 2],
            backgroundColor: [
              this.gradient1,
              this.gradient2,
              this.gradient3,
              this.gradient4,
            ],
            hoverOffset: 1,
          },
        ],
      },
    };
  }
  // setCenterText() {
  //   centerText = {
  //     id: "centerText",
  //     beforeDraw(chart, args, options) {
  //       const {
  //         ctx,
  //         chartArea: { top, right, bottom, left, width, height },
  //       } = chart;
  //       ctx.save();
  //       ctx.fillStyle = "#BC9CFF";
  //       ctx.textAlign = "center";
  //       ctx.font = "24px MontserratBold";
  //       ctx.fillText("260", width / 2, height / 2);
  //       ctx.font = "12px MontserratBold";
  //       ctx.fillText("ГОЛОСОВ", width / 2, height / 2 + 20);
  //     },
  //   };
  //   return centerText;
  // }

  setGradient(canvas, colorStart, colorEnd) {
    const chartHeight = canvas.height;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, chartHeight);
    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorEnd);
    return gradient;
  }

  createGradients() {
    this.gradient1 = this.setGradient(
      this.roomDetailsChart,
      "rgba(255, 227, 156, 1)",
      "rgba(255, 186, 156, 1)"
    );
    this.gradient2 = this.setGradient(
      this.roomDetailsChart,
      "#6FCF97",
      "#66D2EA"
    );
    this.gradient3 = this.setGradient(
      this.roomDetailsChart,
      "#BC9CFF",
      "#8BA4F9"
    );
    this.gradient4 = this.setGradient(
      this.roomDetailsChart,
      "#909090",
      "#3D4975"
    );
  }

  init() {
    if (this.canvas) {
      this.chart = new Chart(this.roomDetailsChart, this.config);
    }
  }
}

const chartInit = new ChartCircle("#circle-chart-1");

// const roomDetailsChart = document.querySelector("#circle-chart-1");

// function setGradient(canvas, colorStart, colorEnd) {
//   const chartHeight = canvas.height;
//   const ctx = canvas.getContext("2d");
//   const gradient = ctx.createLinearGradient(0, 0, 0, chartHeight);
//   gradient.addColorStop(0, colorStart);
//   gradient.addColorStop(1, colorEnd);
//   return gradient;
// }

// const gradient1 = setGradient(
//   roomDetailsChart,
//   "rgba(255, 227, 156, 1)",
//   "rgba(255, 186, 156, 1)"
// );
// const gradient2 = setGradient(roomDetailsChart, "#6FCF97", "#66D2EA");
// const gradient3 = setGradient(roomDetailsChart, "#BC9CFF", "#8BA4F9");
// const gradient4 = setGradient(roomDetailsChart, "#909090", "#3D4975");

// // ==========plugin centerText===================
// const centerText = {
//   id: "centerText",
//   beforeDraw(chart, args, options) {
//     const {
//       ctx,
//       chartArea: { top, right, bottom, left, width, height },
//     } = chart;
//     ctx.save();
//     ctx.fillStyle = "#BC9CFF";
//     ctx.textAlign = "center";
//     ctx.font = "24px MontserratBold";
//     ctx.fillText("260", width / 2, height / 2);
//     ctx.font = "12px MontserratBold";
//     ctx.fillText("ГОЛОСОВ", width / 2, height / 2 + 20);
//   },
// };

// const options = {
//   datasets: {
//     doughnut: {
//       rotation: 180,
//     },
//   },
//   responsive: true,
//   maintainAspectRatio: true,
//   aspectRatio: 2.6,
//   layout: {
//     padding: {
//       // top: 20,
//     },
//   },
//   cutout: "90%",
//   plugins: {
//     legend: {
//       display: true,
//       position: "right",
//       align: "end",
//       maxWidth: 200,
//       padding: {
//         left: 30,
//       },
//       labels: {
//         usePointStyle: true,
//         pointStyle: "circle",
//         boxHeight: 9,
//         boxWidth: 170,
//         color: "#575870",
//         textAlign: "left",
//         font: {
//           family: "MontserratRegular",
//           size: 14,
//         },
//       },
//     },
//   },
// };

// const config = {
//   type: "doughnut",
//   options: options,
//   plugins: [centerText],
//   data: {
//     labels: ["Великолепно", "Хорошо", "Удовлетворительно", "Разочарован"],
//     datasets: [
//       {
//         data: [50, 26, 22, 2],
//         backgroundColor: [gradient1, gradient2, gradient3, gradient4],
//         hoverOffset: 1,
//       },
//     ],
//   },
// };

// if (roomDetailsChart) {
//   const myChart = new Chart(roomDetailsChart, config);
// }
