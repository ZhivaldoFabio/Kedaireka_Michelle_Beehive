export const grafik = {
    type: "line",
    data: {
      labels: ["HST Awal", "HST Tengah", "HST Akhir"],
      datasets: [
        {
          label: "Karbon Tanah",
          data: [20, 23, 22],
          borderColor: "#F85C5C",
          borderWidth: 3,
          fill: false
        },
        {
          label: "Karbon Tanaman",
          data: [45, 41, 49],
          borderColor: "#20FAE1",
          borderWidth: 3,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  
  export default grafik;