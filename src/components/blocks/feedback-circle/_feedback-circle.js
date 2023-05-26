import { Chart } from "chart.js/auto";
import { DoughnutController, ArcElement } from "chart.js";

let chosenCardVotes = localStorage.getItem("chosenCard")
  ? JSON.parse(localStorage.getItem("chosenCard"))[0].votes
  : 0;

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
        autoPadding: true,
        padding: {
          // top: 20,
          // left: 0,
        },
      },
      cutout: "90%",
      plugins: {
        legend: {
          display: true,
          position: "right",
          align: "end",
          maxWidth: 180,
          padding: {
            // left: 20,
          },
          labels: {
            usePointStyle: true,
            pointStyle: "circle",
            boxHeight: 9,
            // boxWidth: 200,
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
        ctx.fillText(`${chosenCardVotes}`, width / 2, height / 2);
        ctx.font = "12px MontserratBold";
        ctx.fillText("ГОЛОСОВ", width / 2, height / 2 + 20);
      },
    };
    this.config = {
      type: "doughnut",
      options: this.options,
      plugins: [centerText],
      data: {
        labels: [
          "Великолепно",
          "Хорошо",
          "Удовлетворительно       ",
          "Разочарован",
        ],
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
