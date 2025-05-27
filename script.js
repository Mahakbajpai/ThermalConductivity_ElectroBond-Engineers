const canvas = document.getElementById("simCanvas");
const ctx = canvas.getContext("2d");
const liquidSelect = document.getElementById("liquid");

let tempTop = 100;
let tempBottom = 20;
let animationId;
let frame = 0;

const conductivity = {
  water: 0.1,
  oil: 0.05,
  alcohol: 0.08,
};

let currentLiquid = "water";
liquidSelect.addEventListener("change", () => {
  currentLiquid = liquidSelect.value;
});

const tempChart = new Chart(document.getElementById("tempChart").getContext("2d"), {
  type: 'line',
  data: {
    labels: [],
    datasets: [
      {
        label: 'Top Plate Temp (°C)',
        data: [],
        borderColor: 'red',
        fill: false,
      },
      {
        label: 'Bottom Plate Temp (°C)',
        data: [],
        borderColor: 'blue',
        fill: false,
      }
    ]
  },
  options: {
    animation: false,
    scales: {
      x: { title: { display: true, text: 'Time (s)' } },
      y: { title: { display: true, text: 'Temperature (°C)' }, min: 0, max: 120 }
    }
  }
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Top Plate
  ctx.fillStyle = "#ff4d4d";
  ctx.fillRect(150, 30, 200, 20);
  ctx.fillStyle = "black";
  ctx.fillText(`Top: ${tempTop.toFixed(1)}°C`, 180, 25);

  // Gap
  ctx.fillStyle = "#fff";
  ctx.fillRect(150, 50, 200, 10);

  // Liquid
  ctx.fillStyle = "skyblue";
  ctx.fillRect(150, 60, 200, 100);

  // Gap
  ctx.fillStyle = "#fff";
  ctx.fillRect(150, 160, 200, 10);

  // Bottom Plate
  ctx.fillStyle = "#4d79ff";
  ctx.fillRect(150, 170, 200, 20);
  ctx.fillStyle = "black";
  ctx.fillText(`Bottom: ${tempBottom.toFixed(1)}°C`, 170, 210);

  let k = conductivity[currentLiquid];
  let delta = (tempTop - tempBottom) * k * 0.01;

  if (tempTop > tempBottom + 0.1) {
    tempTop -= delta;
    tempBottom += delta;
  }

  if (frame % 30 === 0) {
    const timeLabel = (frame / 60).toFixed(1);
    tempChart.data.labels.push(timeLabel);
    tempChart.data.datasets[0].data.push(tempTop.toFixed(1));
    tempChart.data.datasets[1].data.push(tempBottom.toFixed(1));
    tempChart.update();
  }

  frame++;
  animationId = requestAnimationFrame(draw);
}

function startSim() {
  if (!animationId) {
    draw();
  }
}

function stopSim() {
  cancelAnimationFrame(animationId);
  animationId = null;
}

function resetSim() {
  tempTop = 100;
  tempBottom = 20;
  frame = 0;
  tempChart.data.labels = [];
  tempChart.data.datasets[0].data = [];
  tempChart.data.datasets[1].data = [];
  tempChart.update();
  stopSim();
  draw();
}

// Q calculation
function calculateQ() {
  const k = conductivity[currentLiquid];
  const A = parseFloat(document.getElementById("area").value);
  const deltaT = parseFloat(document.getElementById("deltaT").value);
  const t = parseFloat(document.getElementById("time").value);
  const d = parseFloat(document.getElementById("thickness").value);

  if (isNaN(A) || isNaN(deltaT) || isNaN(t) || isNaN(d) || d === 0) {
    document.getElementById("qValue").innerText = "Invalid input";
    return;
  }

  const Q = (k * A * deltaT * t) / d;
  document.getElementById("qValue").innerText = Q.toFixed(2);
}
